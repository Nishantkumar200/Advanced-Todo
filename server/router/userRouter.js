import expressAsyncHandler from "express-async-handler";
import express from "express";
import { loginUser } from "../UserAction/userAction.js";

const userRouter = express.Router();

userRouter.post("/login", expressAsyncHandler(loginUser));

export default userRouter;
