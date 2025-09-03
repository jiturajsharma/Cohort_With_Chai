import express from "express";
import db from "./utils/db.js"
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";



dotenv.config()

const app = express();

app.use(cookieParser());

app.use(
    cors({
    origin: "http://localhost:5173", // Match your frontend URL exactly
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    exposedHeaders: ["Set-Cookie", "*"],
    })
);


// 3. Other middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// Test route to check cookie handling
app.get("/", (req, res) => {
    console.log("=== Cookie Debug ===");
    console.log("Request cookies:", req.cookies);
    console.log("Request headers:", {
    cookie: req.headers.cookie,
    origin: req.headers.origin,
    });

    res.json({
    message: "Hello World",
    cookies: req.cookies,
    });
});

// User routes
// app.use("/api/v1/users", userRoutes);

// Database connection
db();

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

