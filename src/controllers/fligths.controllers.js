import { fligthsServices } from "../services/fligths.services.js";

export async function create(req, res){
    const fligth = await fligthsServices.create(req.body);
    res.status(201).send(fligth.rows[0]);
}

export async function get(req, res){
    const { origin, destination, 'bigger-date': biggerDate, 'smaller-date': smallerDate } = req.query;

    const fligths = await fligthsServices.get(origin, destination, smallerDate, biggerDate);
    res.send(fligths);
}