import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDV Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error connection MongoDB", error);
        process.exit(1);
    }
}

export default connectDB;
