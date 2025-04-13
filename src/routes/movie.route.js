import { Router } from "express";
import MovieController from "../controllers/movie.controller.js";

const movieRouter = Router();

const controller = new MovieController();

movieRouter.post("/movie", controller.addMovieController.bind(controller));

export default movieRouter;
