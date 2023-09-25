const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const chefsData = require("./data/chef.json");

app.get("/", (req, res) => {
  res.send("Culinary Canvas Server is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefsData);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefsData.find((chef) => chef._id === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Culinary Canvas is running on ${port} port`);
});
