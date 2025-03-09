import mongoose from 'mongoose'

import dotenv from 'dotenv';
dotenv.config();

const db = () =>{
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(() =>{
        console.log(`mongodb connected successfully`);
    })
    .catch((err) =>{
        console.log(`mongodb connected failed:-(`)
    })
}

export default db;
