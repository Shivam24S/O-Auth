import dotenv from "dotenv";
dotenv.config({ path: "./.dev.env" });
import passport from "passport";
import passportGoogle from "passport-google-oauth20";
const GoogleStrategy = passportGoogle.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.G_CLIENT_ID,
      clientSecret: process.env.G_CLIENT_SECRET,
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      // get profile details
      // save profile details in db
    }
  )
);
