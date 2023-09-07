import { passengersRepository } from "../repositories/passengers.repository.js";

async function create(firstName, lastName){
    return await passengersRepository.create({firstName, lastName});
};


export const passengersService = {
    create
};