import express from "express";
import controller from "../controllers/movieController.js";

const { createMovie, getAll, deleteOne, getOneById, updateMovie } = controller;

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOneById);
router.patch("/:id", updateMovie);
router.post("/", createMovie);
router.delete("/:id", deleteOne);

export default router;
