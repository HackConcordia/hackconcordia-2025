import mongoose from "mongoose";

// Extend the global type to include mongoose cache
declare global {
  var mongoose: {
    conn: typeof import("mongoose") | null;
    promise: Promise<typeof import("mongoose")> | null;
  };
}

// Cache the connection promise to prevent multiple connection attempts
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectMongoDB = async () => {
  const connectionStatus = mongoose.connection.readyState;
  
  // If already connected, return immediately
  if (connectionStatus === 1) {
    return mongoose.connection;
  }
  
  // If connection is in progress, wait for it
  if (connectionStatus === 2 && cached.promise) {
    cached.conn = await cached.promise;
    return cached.conn;
  }

  // If no connection exists, create a new one
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    cached.promise = mongoose
      .connect(process.env.MONGODB_URI as string, opts)
      .then((mongoose) => {
        console.log("Connected to MongoDB");
        return mongoose;
      })
      .catch((error) => {
        cached.promise = null;
        console.error("MongoDB connection error:", error);
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
};

export default connectMongoDB;
