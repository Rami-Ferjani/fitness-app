const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema*
const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  workout: {
    type: String,
    default: null,
  },
  workoutref: {
    type: String,
    default: null,
  },
  day: {
    type: Number,
    default: 0,
  },
  startingDate: {
    type: Date,
    default: null,
  },
  weight: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  sexe: {
    type: String,
    default: null,
  },
  imgLink: {
    type: String,
    default: null,
  },
});
module.exports = Person = mongoose.model("person", PersonSchema);
