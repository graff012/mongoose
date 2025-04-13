import { Router } from "express";
import UserController from "../controllers/users.controller.js";

const userRouter = Router();

const controller = new UserController();

userRouter.post("/user", controller.addUserController.bind(controller));

export default userRouter;
