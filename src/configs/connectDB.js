import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "nodejs_basic",
});

connection.connect((err) => {
  if (err) {
    console.log("connect failed");
  } else {
    console.log("connect success");
  }
});

export default connection;
