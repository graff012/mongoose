import MovieService from "../services/movies.service.js";

class MovieController {
  constructor() {
    this.movieService = new MovieService();
  }

  async addMovieController(req, res, next) {
    const body = req.body;

    try {
      const addedMovie = await this.movieService.addMovie(body);

      res.status(201).json(addedMovie);
    } catch (err) {
      next(err);
    }
  }

  async getAllMoviesController(req, res, next) {
    try {
      const movies = await this.movieService.getAllMovies();
      res.status(200).json(movies);
    } catch (err) {
      next(err);
    }
  }

  async getMovieByIdController(req, res, next) {
    const { id } = req.params;
    try {
      const movie = await this.movieService.getMovieById(id);
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json(movie);
    } catch (err) {
      next(err);
    }
  }

  async updateMovieController(req, res, next) {
    const { id } = req.params;
    const body = req.body;
    try {
      const updatedMovie = await this.movieService.updateMovie(id, body);
      if (!updatedMovie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json(updatedMovie);
    } catch (err) {
      next(err);
    }
  }

  async deleteMovieController(req, res, next) {
    const { id } = req.params;
    try {
      const deletedMovie = await this.movieService.deleteMovie(id);
      if (!deletedMovie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json({ message: "Movie deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
}

export default MovieController;
