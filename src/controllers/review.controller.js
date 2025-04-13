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

  async getReviewByIdController(req, res, next) {
    const { id } = req.params;
    try {
      const review = await this.reviewService.getReviewById(id);
      if (!review) {
        return res.status(404).json({ message: "Review not found" });
      }
      res.status(200).json(review);
    } catch (err) {
      next(err);
    }
  }

  async updateReviewController(req, res, next) {
    const { id } = req.params;
    const body = req.body;
    try {
      const updatedReview = await this.reviewService.updateReview(id, body);
      if (!updatedReview) {
        return res.status(404).json({ message: "Review not found" });
      }
      res.status(200).json(updatedReview);
    } catch (err) {
      next(err);
    }
  }

  async deleteReviewController(req, res, next) {
    const { id } = req.params;
    try {
      const deletedReview = await this.reviewService.deleteReview(id);
      if (!deletedReview) {
        return res.status(404).json({ message: "Review not found" });
      }
      res.status(200).json({ message: "Review deleted successfully" });
    } catch (err) {
      next(err);
    }
  }
}

export default ReviewController;
