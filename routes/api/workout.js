const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const Workout = require("../../models/Workout");

router.post("/", (req, res) => {
  const { name, days,description } = req.body;
 
  const newWorkout = new Workout(req.body);
  newWorkout.save((err, Workout) => {
    if (err) {
      res.send(err);
    }
    res.json(Workout);
  });
});
module.exports = router;
