import { db } from "../database/database.connection.js";
import { convertDate1 } from "../utils/date.utils.js";
import { mapObjectToInsertQuery } from "../utils/sql.utils.js";

async function create(fligths){
    const { objectColumns, objectValues, paramsOrder } = mapObjectToInsertQuery(fligths);

    return await db.query(`INSERT INTO fligths(${objectColumns}) VALUES(${paramsOrder}) RETURNING *;`, [...objectValues]);
}

async function get(origin, destination, smallerDate, biggerDate){
    const queryDefault = `
        SELECT fligths.id, fligths.date, cities."name" as "destination", cities2."name" as "origin" FROM fligths
        INNER JOIN cities ON cities.id = fligths.destination
        INNER JOIN cities cities2 ON cities2.id = fligths.origin
        WHERE 1=1
    `
    let complement = '';
    const orderBy = `ORDER BY fligths.date;`
    const values = [];

    if(origin){
        values.push(origin);
        complement = `AND cities2."name" = $${values.length}`
    }

    if(destination){
        values.push(destination);
        complement += `AND cities."name" = $${values.length}`
    }

    if(smallerDate && biggerDate){
        const slDate = convertDate1(smallerDate);
        values.push(slDate);
        complement += `AND fligths.date >= $${values.length}`;
        
        const bgDate = convertDate1(biggerDate);
        values.push(bgDate);
        complement += `AND fligths.date <= $${values.length}`;
        
    }
    console.log(queryDefault + complement + orderBy)
    return await db.query(queryDefault + complement + orderBy, values)
}

export const fligthsRepository = {
    create,
    get
}