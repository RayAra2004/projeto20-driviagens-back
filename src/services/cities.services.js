import { citiesRepository } from "../repositories/cities.repository.js"

async function create(name){
    return await citiesRepository.create({name})
}

export const citiesService = {
    create
}