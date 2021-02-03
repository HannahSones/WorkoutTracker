const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");


router.get("/api/workouts", function (req, res) {
    Workout.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
});


// add exercise to the most recent workout plan
// add exercise to a new workout plan
// view the combined weight of multiple exercises from the past seven workouts on the stats page
// view the total duration of each workout from the past seven workouts on the stats page