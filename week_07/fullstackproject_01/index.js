import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import db from './utils/db.js'
import userRoute from './routes/user.router.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();

app.use(
    cors({
        origin: process.env.BASE_URL,
        credential: true,
        method: ["GET", "POST", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
)

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.send("Hello from Chai");
});

app.get("/chai", (req, res) =>{
    res.send("Which tea would you prefer..?")
})

app.get("/Cohort", (req, res) =>{
    res.send("This cohort is so coooll")
});

// connect to db
db()

// user routes
app.use("/api/v1/users", userRoute)

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})