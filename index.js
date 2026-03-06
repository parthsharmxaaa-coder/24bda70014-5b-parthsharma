import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import studentRoutes from "./routes/student.routes.js";
import studentViewRoutes from "./routes/student.view.routes.js";

dotenv.config();
connectDB();

const app = express();

// ES module path fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/students", studentRoutes);
app.use("/view", studentViewRoutes);

// Home redirect
app.get("/", (req, res) => {
  res.redirect("/view/students");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});