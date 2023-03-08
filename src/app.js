import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import allRoutes from "./routes/allRoutes.js";






mongoose.set('strictQuery', false);

dotenv.config();

const app = express();


app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).send(`<h1 style=  style="text-align: center; color: #green;">welcome to my backend-api<h1>`)
})

let con = null;
if (process.env.NODE_ENV === "test") {
    con = mongoose.connect(process.env.MONGODB_URL_TEST, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} else {
    con = mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

if (con) {
    console.log('Database has been connected')
};
app.use("/api/v1", allRoutes);



export default app