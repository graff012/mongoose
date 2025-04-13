import { movieModel } from "../models/movies.model.js";

class MovieService {
  constructor() {
    this.movieModel = movieModel;
  }

  async addMovie(data) {
    const movie = await this.movieModel.create(data);

    return movie;
  }

  async getAllMovies() {
    const movies = await this.movieModel.find();
    return movies;
  }

  async getMovieById(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid movie ID", 400);
    }
    const movie = await this.movieModel.findById(id);
    return movie;
  }

  async updateMovie(id, data) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid movie ID", 400);
    }
    const updatedMovie = await this.movieModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedMovie;
  }

  async deleteMovie(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid movie ID", 400);
    }
    const deletedMovie = await this.movieModel.findByIdAndDelete(id);
    return deletedMovie;
  }
}

export default MovieService;
