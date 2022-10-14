import express from "express";
import dotenv from "dotenv";

import { configStaticFolder, configViewEngine } from "./configs/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

configViewEngine(app);
configStaticFolder(app);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/test", (req, res) => {
  res.render("test/index.ejs");
});

app.get("/about", (req, res) => {
  res.send("I am Dat");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
