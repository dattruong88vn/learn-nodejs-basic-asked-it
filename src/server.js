import express from "express";
import dotenv from "dotenv";

import { configStaticFolder, configViewEngine } from "./configs/index.js";
import initWebRoute from "./routes/web.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

// config view engine
configViewEngine(app);

// config static folder
configStaticFolder(app);

// config route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
