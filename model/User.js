import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  googleId: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
