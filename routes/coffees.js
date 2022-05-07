const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("coffees/index");
});

router.get("/new", (req, res) => {
  res.render("coffees/new");
});

router.post("/", (req, res) => {
  res.send("Create");
});

module.exports = router;
