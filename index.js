const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const chefs = require("./data/chef.json");

app.get("/", (req, res) => {
  res.send("Culinary Canvas Server");
});

app.listen(port, () => {
  console.log(`Culinary Canvas is running on ${port} port`);
});
