import { travelsRepository } from "../repositories/travels.repository.js"

async function create(travel){
    return await travelsRepository.create(travel);
}

export const travelsServices = {
    create
}