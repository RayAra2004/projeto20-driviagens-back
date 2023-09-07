import { citiesService } from "../services/cities.services.js";

export async function create(req, res){
    const { name } = req.body;
    const city = await citiesService.create(name);
    res.status(201).send(city.rows[0]);
}