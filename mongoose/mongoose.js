import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);

    if (!connect) {
      return console.log("Database connection failed");
    }

    console.log;
    "Database connected successfully", connect.connection.host;
    return connect;
  } catch (error) {
    return console.log("Database connection failed", error);
  }
};

export default connectDB;
