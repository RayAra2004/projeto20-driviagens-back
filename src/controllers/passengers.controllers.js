import { passengersService } from "../services/passengers.services.js";

export async function create(req, res){
    const { firstName, lastName } = req.body;

    const passenger = await passengersService.create(firstName, lastName);
    res.status(201).send(passenger.rows[0]);
}