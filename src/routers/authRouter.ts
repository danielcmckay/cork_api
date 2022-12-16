import { Router } from "express";

import { signUp, logIn, signUserOut } from "../controllers/authController";
export const authRouter = Router();

// Sign up
authRouter.post("/signup", signUp);

// Log in
authRouter.post("/login", logIn);

authRouter.post("/signout", signUserOut);
