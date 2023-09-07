import { travelsServices } from "../services/travels.services.js";

export async function create(req, res){
    const travel = await travelsServices.create(req.body);
    res.status(201).send(travel.rows[0]);
}