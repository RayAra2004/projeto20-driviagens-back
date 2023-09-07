import { fligthsServices } from "../services/fligths.services.js";

export async function create(req, res){
    const fligth = await fligthsServices.create(req.body);
    res.status(201).send(fligth.rows[0]);
}