const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  WorkoutName: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  daysDB: {
    type: Array,
    required: true,
  },
  Workoutref: {
    type: String,
    default: null,
  },
});

module.exports = Workout = mongoose.model("Workout", workoutSchema);
