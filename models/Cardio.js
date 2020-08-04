const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardioSchema = new Schema({
  exercise: String,
  minutes: Number
});

const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;