import { Router } from "express";
import ReviewController from "../controllers/review.controller.js";

const reviewRouter = Router();

const controller = new ReviewController();

reviewRouter.post("/review", controller.addReviewController.bind(controller));

export default reviewRouter;
