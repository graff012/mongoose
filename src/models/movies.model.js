import mongoose, { Schema } from "mongoose";

const movieSchema = new Schema(
  {
    title: {
      type: String,
    },
    release_year: {
      type: Number,
    },
    description: {
      type: String,
    },
    duration: {
      type: Number, // in minutes
    },
    poster_image: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const movieModel = mongoose.model("movies", movieSchema);
