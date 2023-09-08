import { errors } from "../errors/errors.errors.js";
import { passengersRepository } from "../repositories/passengers.repository.js";

async function create(firstName, lastName){
    return await passengersRepository.create({firstName, lastName});
};

async function getTravelsPassengers(name){
    const travels =  await passengersRepository.getTravelsPassengers(name);
    if(travels.rowCount > 10) throw errors.internalServerError("Too many results")

    return travels;
}


export const passengersService = {
    create,
    getTravelsPassengers
};