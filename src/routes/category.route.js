import { Router } from "express";
import CategoryController from "../controllers/category.controller.js";

const categoryRouter = Router();

const controller = new CategoryController();

categoryRouter.post(
  "/category",
  controller.addCategoryController.bind(controller)
);

export default categoryRouter;
