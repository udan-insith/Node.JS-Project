var express = require("express");
var app = express();
var db = require("./database.js");
var bodyParser = require("body-parser");
const { request, response } = require("express");
app.use(bodyParser.json());

let HTTP_PORT = 8080;

app.listen(HTTP_PORT, () => {
  console.log("Server is running on %PORT%".replace("%PORT%", HTTP_PORT));
});

app.post("/api/products", (req, res, next) => {
  const {
    productName,
    description,
    category,
    brand,
    expireDate,
    manufacturedDate,
    batchNumber,
    unitPrice,
    quantity,
    createdDate,
  } = req.body;

  var sql =
    "INSERT INTO products (productName, description, category, brand, expiredDate, manufacturedDate, batchNumber, unitPrice, quantity, createdDate) VALUES (?,?,?,?,?,?,?,?,?,?)";
});
