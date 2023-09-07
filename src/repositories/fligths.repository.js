import { db } from "../database/database.connection.js";
import { mapObjectToInsertQuery } from "../utils/sql.utils.js";

async function create(fligths){
    const { objectColumns, objectValues, paramsOrder } = mapObjectToInsertQuery(fligths);

    return await db.query(`INSERT INTO fligths(${objectColumns}) VALUES(${paramsOrder}) RETURNING *;`, [...objectValues]);
}

export const fligthsRepository = {
    create
}