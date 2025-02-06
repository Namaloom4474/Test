const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const serverless = require("serverless-http"); // Add this

const app = express();
const commissionCalculator = require("./routes/commissionCalculator.js");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post("/api/calculate", commissionCalculator.calculateSalary);

module.exports.handler = serverless(app); // Replace `module.exports = app`
