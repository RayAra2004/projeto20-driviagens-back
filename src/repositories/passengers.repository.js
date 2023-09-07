import { db } from "../database/database.connection.js";
import { mapObjectToInsertQuery } from "../utils/sql.utils.js"

async function create(passenger){
    const { objectColumns, objectValues, paramsOrder } = mapObjectToInsertQuery(passenger);

    return db.query(`INSERT INTO passengers(${objectColumns}) VALUES(${paramsOrder}) RETURNING *;`, [...objectValues]);
}

export const passengersRepository = {
    create
}