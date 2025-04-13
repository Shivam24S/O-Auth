import express from "express";
import dotenv from "dotenv";
import connectDB from "./mongoose/mongoose.js";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import session from "express-session";
import passport from "passport";

// Load environment variables
dotenv.config({ path: "./.dev.env" });

const app = express();

// Middleware Setup
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

// Session Configuration (MUST come before passport)
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Passport Initialization (AFTER session)
app.use(passport.initialize());
app.use(passport.session());

// Import passport config AFTER initialization
import "./config/passport.js";

// Routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// Home Route
app.get("/", (req, res) => {
  res.render("home", { user: req.user });
});

// Server Startup
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup error:", error);
    process.exit(1);
  }
};

startServer();
