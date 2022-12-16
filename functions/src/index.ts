import express from "express";
import { authRouter } from "./routers/authRouter";
import { wineRouter } from "./routers/wineRouter";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/wines", wineRouter);

app.listen(3333, () => {
  console.log("Server started on port 3333!");
});
