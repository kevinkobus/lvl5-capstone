const express = require("express");
const golferRouter = express.Router();
const Golfer = require("../models/golfer.js");

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

// GET one golfer
golferRouter.get("/:itemId", (req, res, next) => {
  Golfer.findById({ _id: req.params.itemId })
    .then((foundPlayer) => {
      if (!foundPlayer) {
        return res.status(404).send("Item not found");
      }
      return res.status(200).send(foundPlayer);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// Post
golferRouter.post("/", (req, res, next) => {
  const newItem = new Golfer(req.body);
  newItem
    .save()
    .then((savedPlayer) => {
      return res.status(200).send(savedPlayer);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

module.exports = golferRouter;
