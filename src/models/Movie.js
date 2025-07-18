import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: String,
    rating: Number,
    releaseDate: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
