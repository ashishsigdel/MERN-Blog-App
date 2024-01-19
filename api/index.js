import express from "express";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRoutes from "./routes/user.route.js";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to mongoDB.");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use("/api/user", userRoutes);

app.listen(3000, () => {
  console.log("Server is running at port 3000!!!");
});
