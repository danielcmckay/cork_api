import express from "express";
import { authRouter } from "./routers/authRouter";
import { wineRouter } from "./routers/wineRouter";
import * as functions from "firebase-functions";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/wines", wineRouter);

exports.server = functions.https.onRequest(app);
