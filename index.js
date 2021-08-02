const express = require("express");
require("dotenv").config();
require("./src/utils/db");

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", "./views");

// 404
app.use(function (req, res, next) {
  return res.status(404).send({ message: "Route" + req.url + " Not found. Error 404" });
});

// 500 - Any server error
app.use(function (err, req, res, next) {
  return res.status(500).send({ error: err });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
