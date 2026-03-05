import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Connect to DB if not already connected (supports test environment)
if (mongoose.connection.readyState === 0) {
  mongoose.connect(process.env.MONGO_URI).catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
}

export default app;
