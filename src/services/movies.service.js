import { movieModel } from "../models/movie_category.model.js";

class MovieService {
  constructor() {
    this.movieModel = movieModel;
  }

  async addMovie(data) {
    const movie = await this.movieModel.create(data);

    return movie;
  }
}

export default MovieService;
