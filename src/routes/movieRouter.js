import express from "express";
import controller from "../controllers/movieController.js";

const { createMovie, getAll, deleteOne } = controller;

const router = express.Router();

router.get("/", getAll);
router.post("/", createMovie);
router.delete("/", deleteOne);

export default router;
