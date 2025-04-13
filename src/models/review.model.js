import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    movies_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "movies",
    },
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    rating: {
      type: Number,
    },
    comment: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const reviewModel = mongoose.model("reviews", reviewSchema);
