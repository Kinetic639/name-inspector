import mongoose from "mongoose";

const dbConnect = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
  }

  const uri = process.env.MONGODB_URI as string;

  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.error("db connection failed: ", error);
  }
};

export default dbConnect;
