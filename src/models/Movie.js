import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: String,
    rating: Number,
    releaseDate: String,
    actors: Array,
    description: String,
    producedBy: String,
    boxOfficeRevenue: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
