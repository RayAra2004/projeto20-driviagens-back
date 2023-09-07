import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { travelSchema } from "../schemas/travels.schemas.js";
import { create } from "../controllers/travels.controllers.js";

const travelsRouter = Router();

travelsRouter.post("/travels", validateSchema(travelSchema), create)

export default travelsRouter;