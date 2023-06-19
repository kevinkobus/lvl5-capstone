const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Golfer model/blueprint
const golferSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  handicapRange: {
    type: Number,
    required: true,
  },
  golferId: {
    type: Number,
    required: true,
  },
  coursesPlayed: [
    {
      name: String,
      location: String,
      datePlayed: Date,
      par: Number,
      score: Number,
    },
  ],
  coursesToPlay: [{ name: String, location: String, par: String }],
});

module.exports = mongoose.model("Golfer", golferSchema);
