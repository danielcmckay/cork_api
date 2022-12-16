import express from "express";
import { authRouter } from "./routers/authRouter";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.listen(3333, () => {
  console.log("Server started on port 3333!");
});
