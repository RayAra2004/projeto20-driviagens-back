import { db } from "../database/database.connection.js";
import { mapObjectToInsertQuery } from "../utils/sql.utils.js"

async function create(passenger){
    const { objectColumns, objectValues, paramsOrder } = mapObjectToInsertQuery(passenger);

    return await db.query(`INSERT INTO passengers(${objectColumns}) VALUES(${paramsOrder}) RETURNING *;`, [...objectValues]);
}

async function getTravelsPassengers(name){
    if(name){
        return await db.query(`
            SELECT passengers."firstName" || ' ' || passengers."lastName" AS "passenger", COUNT(travels."passengerId") AS "travels" 
            FROM passengers
            INNER JOIN travels ON travels."passengerId" = passengers.id
            WHERE passengers."firstName" || ' ' || passengers."lastName" ILIKE '%' || $1 || '%'
            GROUP BY passengers."firstName", passengers."lastName"
            ORDER BY "travels" DESC
            LIMIT 10;
    `, [name])
    }

    return await db.query(`
        SELECT passengers."firstName" || ' ' || passengers."lastName" "passenger", COUNT(travels."passengerId") "travels" 
        FROM passengers
        INNER JOIN travels ON travels."passengerId" = passengers.id
        GROUP BY passengers."firstName", passengers."lastName"
        ORDER BY "travels" DESC
        LIMIT 10;
    `)
}

export const passengersRepository = {
    create,
    getTravelsPassengers
}