import express from "express";

const configStaticFolder = (app) => {
  app.use(express.static("src/public"));
};

export default configStaticFolder;
