import { Router } from "express";
import passengersRouter from "./passengers.routes.js";
import citiesRouter from "./cities.routes.js";
import fligthRouter from "./flligths.routes.js";

const router = Router();

router.use(passengersRouter);
router.use(citiesRouter);
router.use(fligthRouter)

export default router;