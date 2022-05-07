const express = require("express");
const { render } = require("express/lib/response");
const router = express.Router();
const Coffee = require("../models/coffee");

router.get("/", (req, res) => {
  res.render("coffees/index");
});

router.get("/new", (req, res) => {
  res.render("coffees/new", { coffee: new Coffee() });
});

router.post("/", (req, res) => {
  const coffee = new Coffee({
    name: req.body.name,
  });
  coffee.save((err, newCoffee) => {
    if (err) {
      res.render("coffees/new", {
        coffee: coffee,
        errorMessage: "Error creating coffee",
      });
    } else {
      // res.redirect(`coffees/${newCoffee.id}`);
      res.redirect("coffees");
    }
  });
});

module.exports = router;
