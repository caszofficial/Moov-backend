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

  getAll: async (req, res, next) => {
    try {
      const movies = await Movie.find();
      console.log("movies called");
      return res.status(200).json(movies);
    } catch (error) {
      next(error);
    }
  },
  deleteOne: async (req, res, next) => {
    const { title } = req.body;
    try {
      await Movie.findOneAndDelete({ title: title });
      res.status(200).json({ message: "Deleted" });
    } catch (error) {
      console.log("failed to delete entity", error);
      next(error);
    }
  },
};

export default controller;
