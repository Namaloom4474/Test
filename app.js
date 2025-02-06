const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const commissionCalculator = require("./routes/commissionCalculator.js");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Allow JSON parsing

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/api/calculate", commissionCalculator.calculateSalary);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
