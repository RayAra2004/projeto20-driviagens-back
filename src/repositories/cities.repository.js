import { db } from "../database/database.connection.js";
import { mapObjectToInsertQuery } from "../utils/sql.utils.js";

async function create(city){
    const { objectColumns, objectValues, paramsOrder } = mapObjectToInsertQuery(city);

    return await db.query(`INSERT INTO cities(${objectColumns}) VALUES(${paramsOrder}) RETURNING *;`, [...objectValues]);
}

export const citiesRepository = {
    create
}