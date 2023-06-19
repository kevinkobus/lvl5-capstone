const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Golfer model/blueprint
const golferSchema = new Schema ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    handicapRange: {
        type: Number,
        required: true
    },
    golferId: {
        type: Number
    } 

})

module.exports = mongoose.model("Golfers", golferSchema)