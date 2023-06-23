const express = require("express");
const courseRouter = express.Router();
const Course = require("../models/course.js");

// POST - Add new course to the DB
courseRouter.post("/", (req, res, next) => { 
  const newCourse = new Course(req.body);
  newCourse
    .save()
    .then((savedCourse) => {
      return res.status(200).send(savedCourse);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// GET - Pull up one course
courseRouter.get("/:courseID", (req, res, next) => {
  Course.findById({ _id: req.params.courseId })
    .then((foundCourse) => {
      if (!foundCourse) {
        return res.status(404).send("Course not found");
      }
      return res.status(200).send(foundCourse);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// GET all courses
courseRouter.get("/", (req, res, next) => {
  Course.find({})
    .then((courses) => {
      return res.status(200).send(courses);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

module.exports = courseRouter;
