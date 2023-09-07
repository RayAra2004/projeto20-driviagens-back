import { db } from "../database/database.connection.js";
import { mapObjectToInsertQuery } from "../utils/sql.utils.js";

async function create(travel){
    const { objectColumns, objectValues, paramsOrder } = mapObjectToInsertQuery(travel);

    return await db.query(`INSERT INTO travels(${objectColumns}) VALUES(${paramsOrder}) RETURNING *;`, [...objectValues]);
}

export const travelsRepository = {
    create
};