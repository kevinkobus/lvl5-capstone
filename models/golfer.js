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
});

module.exports = mongoose.model("Golfer", golferSchema);

//   coursesPlayed: [
//     {
//       name: String,
//       location: String,
//       datePlayed: Date,
//       par: Number,
//       score: Number,
//     },
//   ],
//   coursesToPlay: [
//     {
//         name: String,
//         location: String,
//         par: String
//     }
// ]
