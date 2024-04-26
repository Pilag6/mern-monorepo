import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

// Managing the .env file
dotenv.config();

// Import the connectDB function
import connectDB from "./config/connectDB.js";
// Connect to the MongoDB
await connectDB();

// Importing the Router
import Router from "./routes/Router.js";
import AuthRouter from "./routes/AuthRouter.js";

// Importing the Error Handler Middleware
import { errorHandler } from "./middlewares/errorHandler.js";

// Create an express app
const app = express();
const { PORT } = process.env;

// Middleware that allows browsers to accept data from this server
app.use(cors({
  origin: "http://localhost:5173", // The port where the frontend is running. Change this to the port where your frontend is running
  credentials: true
}));
// Middlewares that accepts urlencoded from data request
app.use(express.urlencoded({ extended: true }));
// Middleware that accepts json format data request
app.use(express.json());
// Middleware that logs the request to the console
app.use(morgan("dev"));
// Middleware that parses cookies
app.use(cookieParser());

// ROUTERS
app.use("/api/models", Router)
app.use("/", AuthRouter)

// Error Handler Middleware
app.use(errorHandler);

// Listen
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`.bgBlue.white);
});
