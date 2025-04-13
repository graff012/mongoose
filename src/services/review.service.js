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
    const reviews = await this.reviewModel
      .find()
      .populate("movies_id")
      .populate("user_id");
    return reviews;
  }

  async getReviewById(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid review ID", 400);
    }
    const review = await this.reviewModel
      .findById(id)
      .populate("movies_id")
      .populate("user_id");
    return review;
  }

  async updateReview(id, data) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid review ID", 400);
    }
    const updatedReview = await this.reviewModel
      .findByIdAndUpdate(id, data, { new: true })
      .populate("movies_id")
      .populate("user_id");
    return updatedReview;
  }

  async deleteReview(id) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new CustomError("Invalid review ID", 400);
    }
    const deletedReview = await this.reviewModel.findByIdAndDelete(id);
    return deletedReview;
  }
}

export default ReviewService;
