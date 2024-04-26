import { Router } from "express";

import { register, login } from "../controllers/AuthController.js";


const authRouter = Router();

// AUTH -----------
authRouter.post("/register", register)

authRouter.post("/login", login)

export default authRouter;