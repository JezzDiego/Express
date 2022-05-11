const express = require("express");
const { render } = require("express/lib/response");
const router = express.Router();
const Coffee = require("../models/coffee");

//All coffees route
router.get("/", async (req, res) => {
  try {
    const coffees = await Coffee.find();
    res.render("coffees/index", { coffees: coffees });
  } catch (error) {
    res.redirect("/");
  }
});

// New coffee route
router.get("/new", (req, res) => {
  res.render("coffees/new", { coffee: new Coffee() });
});

// Create coffee route
router.post("/", async (req, res) => {
  const coffee = new Coffee({
    name: req.body.name,
  });
  try {
    const newCoffee = await coffee.save();
    //res.redirect(`coffees/${newCoffee.id}`);
    res.redirect("coffees");
  } catch (error) {
    res.render("coffees/new", {
      coffee: coffee,
      errorMessage: "Error creating coffee",
    });
  }
});
module.exports = router;
