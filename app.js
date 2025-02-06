const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));

const commissionCalculator = require("./routes/commissionCalculator");

const PORT = process.env.PORT || 3000;




app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/api/calculate", commissionCalculator.calculateSalary);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
module.exports = app;
