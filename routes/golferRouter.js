const express = require("express");
const golferRouter = express.Router();
const Golfer = require("../models/golfer.js");

// POST - Add new golfer
golferRouter.post("/", (req, res, next) => {
  const newPlayer = new Golfer(req.body);
  newPlayer
    .save()
    .then((savedPlayer) => {
      return res.status(200).send(savedPlayer);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// GET - Pull up golfer by golferId
golferRouter.get("/:golferId", (req, res, next) => {
  Golfer.findById({ _id: req.params.golferId })
    .then((foundPlayer) => {
      if (!foundPlayer) {
        return res.status(404).send("Golfer not found");
      }
      return res.status(200).send(foundPlayer);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// GET all golfers
golferRouter.get("/", (req, res, next) => {
  Golfer.find({})
    .then((players) => {
      return res.status(200).send(players);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// DELETE a golfer
golferRouter.delete("/:golferId", (req, res, next) => {
  Golfer.findOneAndDelete({ _id: req.params.golferId })
    .then((deletedGolfer) => {
      if (!deletedGolfer) {
        return res.status(404).send("Golfer not found");
      }
      return res
        .status(200)
        .send(`Successfully deleted item ${deletedGolfer} from the database`);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// PUT - Edit/Update a golfer
golferRouter.put("/:golferId", (req, res, next) => {
  Golfer.findOneAndUpdate(
    { _id: req.params.golferId }, // find this one to update
    req.body, // update the object with this data
    { new: true }) // send back the updated version
    .then((updatedGolfer) => {
      if (!updatedGolfer) {
        return res.status(404).send("Golfer not found");
      }
      return res.status(200).send(updatedGolfer);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Search by username
golferRouter.get("/search/username", (req, res, next) => {
  Inventory.find({ make: req.query.username })
    .then((golfers) => {
      return res.status(200).send(golfers);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// golferRouter.post("/:courseID", (req, res, next) => {
//     req.body.course = req.params.courseID
//   const newGolfer = new Golfer(req.body);
//   newGolfer
//     .save()
//     .then((savedPlayer) => {
//       return res.status(200).send(savedPlayer);
//     })
//     .catch((err) => {
//       res.status(500);
//       return next(err);
//     });
// });

// PUT - Add a course to coursesPlayed
// golferRouter.put("/:courseID", (req, res, next) => {
//     req.body.course = req.params.courseID
//     Golfer.findOneAndUpdate(
//         { _id: req.params.golferID } //find this golfer and update
//         req.body
        
        
//         )
// })

module.exports = golferRouter;
