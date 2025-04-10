import express from "express";
import dotenv from "dotenv";

import connectDB from "./mongoose/mongoose.js";
import router from "./routes/authRoutes.js";
import "./config/passport.js";

dotenv.config({ path: "./.dev.env" });

const app = express();

app.use(express.json());
app.use("/auth", router);

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
