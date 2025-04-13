import { Router } from "express";
import UserController from "../controllers/users.controller.js";

const userRouter = Router();

const controller = new UserController();

userRouter.post("/user", controller.addUserController.bind(controller));
userRouter.get("/users", controller.getAllUsersController.bind(controller));
userRouter.get("/user/:id", controller.getUserByIdController.bind(controller));
userRouter.put("/user/:id", controller.updateUserController.bind(controller));
userRouter.delete(
  "/user/:id",
  controller.deleteUserController.bind(controller)
);

export default userRouter;
