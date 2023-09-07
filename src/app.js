import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routes/index.routes.js";
import dotenv from "dotenv";
import errorHandlingMiddleware from "./middlewares/error.middleware.js";


const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandlingMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));