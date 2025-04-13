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
}

export default MovieController;
