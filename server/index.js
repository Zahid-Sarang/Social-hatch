import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index.js";
import { APP_PORT, MONGO_URL } from "./config/index.js";
import errorHandler from "./middlewares/erroHandler.js";
import cookieParser from "cookie-parser";

/* CONFIGURATION */
dotenv.config();

const app = express();

const corsOptions = {
  credentials: true,
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cookieParser());


/* ROUTES */
app.use("/api", routes);

/* MONGOOSE SETUP */
mongoose.connect(MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to DB"));

/* Custome Middleware */
app.use(errorHandler);

/* SERVER PORT */
app.listen(APP_PORT, () => console.log(`Listening on port ${APP_PORT}`));
