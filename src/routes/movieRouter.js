import express from "express";
import controller from "../controllers/movieController.js";
import { uploadImage } from "../controllers/cloudinary.js";
import multer from "multer";

const { createMovie, getAll, deleteOne, getOneById, updateMovie } = controller;

const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOneById);
router.patch("/:id", updateMovie);
router.post("/", createMovie);
router.delete("/:id", deleteOne);
router.post("/uploadImage", upload.single("file"), uploadImage);

export default router;
