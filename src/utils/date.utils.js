import JoiDate from "@joi/date";
import Joi from "joi";
import { errors } from "../errors/errors.errors.js";

export function convertDate1(date){
    const day = String(date).substring(0,2);
    const month = String(date).substring(3,5);
    const year = String(date).substring(6);

    return `${year}-${month}-${day}`;
}

export function dateLargerDateCurrent(date){
    const dateFligth = new Date(convertDate1(date)).getTime();

    const dateCurrent = new Date().getTime();

    return dateFligth > dateCurrent;
}

export function dateIsGreaterAnotherDate(d1, d2){
    const date1 = new Date(convertDate1(d1)).getTime();
    const date2 = new Date(convertDate1(d2)).getTime();

    return date1 > date2;
}

export function validateDate(date){

    const JoiToDate = Joi.extend(JoiDate);

    const schema = Joi.object({
        date: JoiToDate.date().format("DD-MM-YYYY").required()
    })

    if(schema.validate({date}).error) throw errors.unprocessableContent("A data deve ser válida!!")
}