const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StrengthSchema = new Schema({
  exercise: String,
  reps: Number,
  sets: Number
});

const Strength = mongoose.model("Strength", StrengthSchema);

module.exports = Strength;