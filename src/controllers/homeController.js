import { connectionDB } from "../configs/index.js";

export const getHomePage = (req, res) => {
  let data = [];

  connectionDB.query("SELECT * FROM `users`", function (err, results, fields) {
    data = JSON.parse(JSON.stringify(results));
    res.render("index.ejs", { data: JSON.stringify(data) });
  });
};
