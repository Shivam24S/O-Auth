import express from "express";
import dotenv from "dotenv";

import connectDB from "./mongoose/mongoose.js";

const app = express();

dotenv.config({ path: "./.dev.env" });

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

console.log("getting started");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error starting server:", error);
  }
};

startServer();
