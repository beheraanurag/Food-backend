import mongoose from "mongoose";

const connectDB = async () => {
    const mongoUrl = process.env.MONGODB_URL || process.env.MONODB_URL;

    if (!mongoUrl) {
        throw new Error("Missing MongoDB connection string. Set MONGODB_URL in .env.");
    }

    try {
        await mongoose.connect(mongoUrl, {
            serverSelectionTimeoutMS: 30000,
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        throw error;
    }
};

export default connectDB;