import dotenv from "dotenv";

import mongoose from "mongoose";
import app from "./app.js"

mongoose.set('strictQuery', false);

dotenv.config();

// define some variables
const port = process.env.PORT;
const host = process.env.HOST;


// instance to listen to our server
const startServer = () => app.listen(port);

Promise.all([startServer()])
    .then(() => {
        console.log(`MongoDB connected and server listening at http://${host}:${port}`);
    })
    .catch((err) => console.log(err))