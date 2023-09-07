import Joi from "joi";
import JoiDate from "@joi/date";


const JoiToDate = Joi.extend(JoiDate);

export const createFligthSchema = Joi.object({
    origin: Joi.number().integer().positive().required(),
    destination: Joi.number().integer().positive().required(),
    date: JoiToDate.date().format("DD-MM-YYYY").required()
});