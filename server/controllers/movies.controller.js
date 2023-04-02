import { pool } from "../db.js";

export const getMovies = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM movie ORDER BY name ASC");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("SELECT * FROM movie WHERE id = ?", [id]);
    if (result.length === 0)
      return res.status(404).json({
        message: "Movie not found",
      });
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createMovie = async (req, res) => {
  const { title, description } = req.body;
  try {
    const [result] = await pool.query(
      "INSERT INTO movie(name, year) VALUES (?,?)",
      [name, year]
    );
    res.json({
      id: result.insertId,
      name,
      year,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const result = await pool.query("UPDATE movie SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM movie WHERE id = ?", [id]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Movie not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
