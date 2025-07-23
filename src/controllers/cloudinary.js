import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { promisify } from "util";

dotenv.config();

const removeDir = promisify(fs.rmdir);

export const uploadImage = async (req, res, next) => {
  try {
    cloudinary.config({
      cloud_name: "ddeeeqq2l",
      api_key: process.env.CLOUDINARY_APIKEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    });

    const results = await cloudinary.uploader.upload(req.file.path, {
      public_id: "elias",
    });
    console.log(results);

    const url = cloudinary.url(results.public_id, {
      transformation: [
        {
          quality: "auto",
          fetch_format: "auto",
        },
        {
          width: 1200,
          height: 1200,
          crop: "fill",
          gravity: "auto",
        },
      ],
    });

    console.log(url);

    fs.unlinkSync(req.file.path);

    const dirPath = path.dirname(new URL(import.meta.url).pathname);
    const uploadsDir = path.join(dirPath, "uploads");

    fs.readdir(uploadsDir, (err, files) => {
      if (err) {
        console.error("Error al leer la carpeta:", err);
        return;
      }

      if (files.length === 0) {
        removeDir(uploadsDir)
          .then(() => console.log("Carpeta uploads eliminada."))
          .catch((err) => console.error("Error al eliminar la carpeta:", err));
      }
    });

    return res.status(200).json({ url });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
