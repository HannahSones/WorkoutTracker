# WorkoutTracker
A workout tracker application that allows users to keep track of their workout regime.

## Table of contents
* [About](#about-the-project)
  * [Built using](#built-using)
* [Functionality](#functionality)
* [Installation](#installation)
* [Further Development](#further-development)
* [License](#license)

----------

## About the project
This application required me to create a Mongo database with a Mongoose schema for the database creation/management and Express for handling routes. When a user logs a workout, it is saved in a Mongo database and then called to display the last workout on the homepage and a range of stats in graphs based on workouts saved in the database.   
Note: the front-end code was provided for this assignment.

The user is able to to view, create and track daily workouts and log multiple exercises in a workout on a given day. They can also track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, they can should track distance travelled.


### Built using
* Node.js
* Express
* MongoDB
* Mongoose

----------

## Functionality  

![WorkoutTracker Functionality](https://github.com/HannahSones/WorkoutTracker/blob/main/assets/WorkoutTracker.gif)

The workout tracker allows users to;
* Add exercises to the most recent workout plan.
* Add new exercises to a new workout plan.
* View the combined weight of multiple exercises from the past seven workouts on the stats page.
* View the total duration of each workout from the past seven workouts on the stats page.

-------------

## Installation
1. Clone the code from the GitHub repo
2. Open project directory, then npm install to install all required dependencies (express, Mongoose etc.)
3. Add your database to a .env file to connect to using MongoDB
4. Enter $ node server to run the application

-------------
## Further development
* Give the users the option to delete a workout
* Improve the user interface with CSS and JavaScript animations to make it more engaging for those using the app
* Streamline the CSS frameworks so it's using either Semantic UI and Bootstrap

------------
## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/). A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.   
![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)

-------------

Hannah Sones © 2020. All rights reserved.
