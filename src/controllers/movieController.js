import Movie from "../models/movie.js";

const controller = {
  createMovie: async (req, res, next) => {
    try {
      await Movie.create(req.body);
      return res.status(201).json({ message: "creado" });
    } catch (error) {
      console.error("Failed to create", error);
      next(error);
    }
  },
  getOneById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const movie = await Movie.findById(id);
      if (!movie) {
        res.status(400).json({ message: "Movie Not Found" });
      }
      console.log("movie called");
      return res.status(200).json(movie);
    } catch (error) {
      next(error);
    }
  },
  getAll: async (req, res, next) => {
    try {
      const movies = await Movie.find();
      console.log("movies called");
      return res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  },

  updateMovie: async (req, res, next) => {
    try {
      const { id } = req.params;
      const updateMovie = await Movie.findByIdAndUpdate(id, req.body);
      res.status(200).json(updateMovie);
    } catch (error) {
      next.error;
    }
  },
  deleteOne: async (req, res, next) => {
    const { id } = req.params;
    try {
      await Movie.findByIdAndDelete(id);
      res.status(200).json({ message: "Deleted" });
    } catch (error) {
      console.log("failed to delete entity", error);
      next(error);
    }
  },
};

export default controller;
