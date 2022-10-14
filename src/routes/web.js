import express from "express";
import * as homeController from "../controllers/homeController.js";

let route = express.Router();

const initWebRoute = (app) => {
  route.get("/", homeController.getHomePage);

  route.get("/test", (req, res) => {
    res.render("test/index.ejs");
  });

  route.get("/about", (req, res) => {
    res.send("I am Dat");
  });

  return app.use("/", route);
};

export default initWebRoute;
