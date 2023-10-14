import { Router } from "express";
import {
  createMovie,
  deleteMovie,
  updateMovie,
  getMovie,
} from "../controllers/movies.controller.js";
import { getMovies } from "../services/movieService.js";

const router = Router();

router.get("/movies", async (req, res) => {
  try {
    const result = await getMovies();
    res.json(result);
  } catch (error) {
    console.error("getMovies error: ", error.message);
    res.status(500).send();
  }
});

router.get("/movies/:id", getMovie);

router.post("/movies", createMovie);

router.put("/movies/:id", updateMovie);

router.delete("/movies/:id", deleteMovie);

export default router;
