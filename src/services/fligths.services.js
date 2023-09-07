import { errors } from "../errors/errors.errors.js";
import { fligthsRepository } from "../repositories/fligths.repository.js";
import { convertDate1, dateLargerDateCurrent } from "../utils/date.utils.js";

async function create({origin, destination, date}){
    if(origin === destination) throw errors.conflictCity();

    if(!dateLargerDateCurrent(date)) throw errors.unprocessableContent("A data do voo deve ser maior que a atual!!")
    
    const dateFormated = convertDate1(date);

    return await fligthsRepository.create({origin, destination, date: dateFormated})
}

export const fligthsServices = {
    create
}