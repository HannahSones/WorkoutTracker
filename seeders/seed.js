let mongoose = require("mongoose");
let db = require("../models/workout");

mongoose.connect("mongodb://localhost/workoutTracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "cardio",
        name: "running",
        duration: 30,
        distance: "5k",
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "resistance",
        name: "press ups",
        reps: 10,
        sets: 4,
        duration: 20,
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "resistance",
        name: "bench press",
        weight: 185,
        reps: 8,
        sets: 4,
        duration: 25,
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {
        type: "cardio",
        name: "cycling",
        duration: 35,
        distance: "10k"
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        type: "cardio",
        name: "running",
        duration: 45,
        distance: "8k"
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercises: [
      {
        type: "resistance",
        name: "bench press",
        weight: 285,
        reps: 10,
        sets: 4,
        duration: 20,
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-4),
    exercises: [
      {
        type: "resistance",
        name: "squats",
        weight: 15,
        reps: 12,
        sets: 4,
        duration: 20,
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-3),
    exercises: [
      {
        type: "resistance",
        name: "bicep curls",
        weight: 10,
        reps: 10,
        sets: 4,
        duration: 30,
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-2),
    exercises: [
      {
        type: "cardio",
        name: "cycling",
        duration: 35,
        distance: "10k"
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-1),
    exercises: [
      {
        type: "resistance",
        name: "tricep dips",
        reps: 10,
        sets: 3,
        duration: 20,
      }
    ]
  }
];

db.deleteMany({})
  .then(() => db.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records added!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
