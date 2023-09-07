import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.js";
import { passengersSchema } from "../schemas/passengers.schemas.js";
import { create } from "../controllers/passengers.controllers.js";

const passengersRouter = Router();

passengersRouter.post("/passengers", validateSchema(passengersSchema), create)

export default passengersRouter;