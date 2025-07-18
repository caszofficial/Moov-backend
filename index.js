import express from "express";
import dotenv from "dotenv";
import movieRouter from "./src/routes/movieRouter.js";
import connectDB from "./src/db.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
const port = 3005;
app.use(cors());
app.use(express.json());
app.use("/movies", movieRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// mongodb+srv://santiagozapata07:santiagof1@cluster0.zjjglps.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
