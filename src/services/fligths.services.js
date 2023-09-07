import { errors } from "../errors/errors.errors.js";
import { fligthsRepository } from "../repositories/fligths.repository.js";
import { convertDate1, dateIsGreaterAnotherDate, dateLargerDateCurrent, validateDate } from "../utils/date.utils.js";

async function create({origin, destination, date}){
    if(origin === destination) throw errors.conflictCity();

    if(!dateLargerDateCurrent(date)) throw errors.unprocessableContent("A data do voo deve ser maior que a atual!!")
    
    const dateFormated = convertDate1(date);

    return await fligthsRepository.create({origin, destination, date: dateFormated})
}

async function get(origin, destination, smallerDate, biggerDate){

    if(biggerDate && smallerDate === undefined || biggerDate === undefined && smallerDate) throw errors.unprocessableContent("É necessário informar as duas data limites!!")
    
    if(biggerDate){
        validateDate(biggerDate);
    }

    if(smallerDate){
        validateDate(smallerDate);
    }

    if(dateIsGreaterAnotherDate(smallerDate, biggerDate)) throw errors.badRequest();

    const fligths = await fligthsRepository.get(origin, destination, smallerDate, biggerDate);
    const res = fligths.rows.map(e => {
        const date = new Date(e.date)
        let day = String(date.getDate());
        let month = String((date.getMonth() + 1));
        const year = String(date.getFullYear());

        if(day < 10) day = "0" + day;
        if(month < 10) month = "0" + month;

        const dateFormated = `${day}-${month}-${year}`

        e.date = dateFormated;

        return e
    })

    return res;
}

export const fligthsServices = {
    create,
    get
}