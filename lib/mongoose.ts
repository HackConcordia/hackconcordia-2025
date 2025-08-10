import mongoose from "mongoose";

const connectMongoDB = async () => {
  const connectionStatus = mongoose.connection.readyState;
  if (connectionStatus === 1) {
    console.log("Already connected");
    return;
  }
  if (connectionStatus === 2) {
    console.log("Connecting...");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to MongoDB");
  } catch (error: unknown) {
    console.log("Error: ", error);
    throw new Error("Error: " + String(error));
  }
};
export default connectMongoDB;
