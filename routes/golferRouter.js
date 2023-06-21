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
golferRouter.get("/:golferID", (req, res, next) => {
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

module.exports = golferRouter;
