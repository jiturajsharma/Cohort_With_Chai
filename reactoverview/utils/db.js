import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

// express a function that connects to db

const db = () => {
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to Mongodb")
    })
    .catch((err) => {
        console.log("Error connecting to mongodb", err)
    })

}

export default db;