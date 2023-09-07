import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { citiesSchema } from "../schemas/cities.schemas.js";
import { create } from "../controllers/cities.controllers.js";


const citiesRouter = Router();

citiesRouter.post("/cities", validateSchema(citiesSchema), create)

export default citiesRouter;