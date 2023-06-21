const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Course model/blueprint
const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  par: {
    type: Number,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  golfer: [
    {
      type: Schema.Types.ObjectId,
      ref: "Golfer",
    },
  ],
});

module.exports = mongoose.model("Course", courseSchema);
