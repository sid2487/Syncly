import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import chatRoutes from "./routes/chat.route.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

// app.use(
//     cors({
//         origin: process.env.FRONTEND_URL,
//         credentials: true, // allow frontend to send cookies
//     })
//   );

const allowedOrigins = [
    "http://localhost:5173",
    "https://syncly-git-main-siddharths-projects-a91d5754.vercel.app",
    "https://syncly.vercel.app", // (optional: your custom domain if you add one later)
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS: " + origin));
            }
        },
        credentials: true,
    })
);
  

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);



const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
})

