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
  handicap: {
    type: Number,
    min: 0,
    max: 36,
  },
  username: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 16,
  },
  coursesPlayed: [
    {
      type: Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

module.exports = mongoose.model("Golfer", golferSchema);
