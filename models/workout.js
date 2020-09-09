const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: {
    type: Array,
    default: [],
  },
});

const Workout = mongoose.model("Workout", ExerciseSchema);

module.exports = Workout;