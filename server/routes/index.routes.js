import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

/*
router.get("/ping", async (req, res) => {
  const [rows] = await pool.query("SELECT 1 + 1 AS result");
  console.log(rows);
  res.json(rows[0]);
});
*/

router.get("/ping", async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM director");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default router;
