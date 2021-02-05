const express = require("express");
const router = express.Router();
const Workout = require("../models/workout");


router.get('/workouts', async function (req, res) {

  await Workout.aggregate([{
    $addFields: {
      totalDuration: { $sum: "$exercises.duration" },
    }
  },
  ]).then((result) => {
    res.json(result);

  }).catch((err) => {
    console.log({ err });
  });
});


router.post('/workouts', async function (req, res) {

  Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


router.get('/workouts/range', async function (req, res) {

  await Workout.aggregate([{
    $addFields: {
      totalDuration: { $sum: "$exercises.duration" },
    }
  }])
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.json(err);
    });
});


router.put('/workouts/:id', async function (req, res) {

  Workout.findByIdAndUpdate(req.params.id, {
    $push: {
      exercises: req.body,
    },
  }, { new: true }).then((workout) => {
    res.json(workout);
  })
    .catch((err) => {
      res.json(err);
    });
});


module.exports = router;