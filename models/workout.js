const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                name: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise name"
                },
                type: {
                    type: String,
                    trim: true,
                    required: "Enter an exercise type"
                },
                weight: {
                    type: Number
                },
                reps: {
                    type: Number
                },
                sets: {
                    type: Number
                },
                duration: {
                    type: Number,
                    required: "Enter an exercise duration in minutes"
                },
                distance: {
                    type: String
                }
            }
        ]
    },
);


// Need to add function to...
// - View the combined weight of multiple exercises from the past seven workouts on the stats page.
// - View the total duration of each workout from the past seven workouts on the stats page.

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;