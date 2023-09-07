import { Router } from "express";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { create } from "../controllers/fligths.controllers.js";
import { createFligthSchema } from "../schemas/fligths.schemas.js";

const fligthRouter = Router();

fligthRouter.post("/fligths", validateSchema(createFligthSchema), create)

export default fligthRouter;