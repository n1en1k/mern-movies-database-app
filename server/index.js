import express from "express";
import cors from "cors";
import { PORT } from "./config.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.listen(PORT);

console.log(`Server running on port ${PORT}`);
