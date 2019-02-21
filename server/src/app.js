import express from "express";
import { json } from "bodyParser";
import cors from "cors";
import morgan from "morgan";

const app = express();
app.use(morgan("combine"));
app.use(json());
app.use(cors());

app.get("/status",(req, res) => {
    res.send({
        message : "hello World !!"
    })
})

app.listen( 8081)