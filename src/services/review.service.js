import { reviewModel } from "../models/review.model.js";

class ReviewService {
  constructor() {
    this.reviewModel = reviewModel;
  }

  async addReview(data) {
    const array = data.review;
    const review = await this.reviewModel.insertMany(array);

    return review;
  }

  async getAllReviews() {
    const review = await this.reviewModel.find();

    return review;
  }
}

export default ReviewService;
