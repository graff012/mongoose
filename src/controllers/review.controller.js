import ReviewService from "../services/review.service.js";

class ReviewController {
  constructor() {
    this.reviewService = new ReviewService();
  }

  async addReviewController(req, res, next) {
    const body = req.body;

    try {
      const addedReview = await this.reviewService.addReview(body);

      res.status(201).json(addedReview);
    } catch (err) {
      next(err);
    }
  }

  async getAllReviewsController(req, res, next) {
    try {
      const reviews = this.reviewService.getAllReviews();

      res.status(201).json(reviews);
    } catch (err) {
      next(err);
    }
  }
}

export default ReviewController;
