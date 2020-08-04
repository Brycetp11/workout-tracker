const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    unique: true
  },
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: "Strength"
    },
    {
        type: Schema.Types.ObjectId,
        ref: "Cardio"
      }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;