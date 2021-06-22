const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const Workout = require("../../models/Workout");
router.get("/", (req, res) => {
  Workout.find({}, (err, Workout) => {
    if (err) {
      res.send(err);
    }
    res.json(Workout);
  });
});
router.get("/:workoutref", (req, res) => {
  const ref = req.params.workoutref;

  Workout.findOne({ Workoutref: ref }, (err, workout) => {
    if (err) {
      res.send(err);
    }
    res.json(workout);
  });
});

router.post("/", (req, res) => {
  const { name, days, Description } = req.body;

  const newWorkout = new Workout(req.body);
  newWorkout.save((err, Workout) => {
    if (err) {
      res.send(err);
    }
    res.json(Workout);
  });
});

router.delete("/:workoutId", (req, res) => {
  Workout.remove({ _id: req.params.workoutId }, (err, person) => {
    if (err) {
      res.send(err);
    }
    res.json({ msg: "successufly deleted workout" });
  });
});
module.exports = router;
