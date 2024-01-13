const express = require("express");
const emoji = require('node-emoji');
const router = express.Router();

// Routes
router.get("/", (req, res) => {

    const locals ={
        title: "Nadav KT Blog",
        description: "trying to undestand how full pproject works"
    };

  res.render("index", {locals});
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
