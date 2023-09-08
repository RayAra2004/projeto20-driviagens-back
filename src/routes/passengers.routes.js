import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { passengersSchema } from "../schemas/passengers.schemas.js";
import { create, getTravelsPassengers } from "../controllers/passengers.controllers.js";

const passengersRouter = Router();

passengersRouter.post("/passengers", validateSchema(passengersSchema), create)
passengersRouter.get("/passengers/travels", getTravelsPassengers)

export default passengersRouter;