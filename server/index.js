import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import indexRoutes from "./routes/index.routes.js";
import moviesRoutes from "./routes/movies.routes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

// Routes

// test mysql connection /ping
app.use(indexRoutes);
app.use(moviesRoutes);

app.listen(process.env.PORT);

console.log(`Server running on port ${process.env.PORT}`);
