const express = require("express");
const mongoose = require("mongoose");

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);


// Creating database connection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workoutTracker",
    { useNewUrlParser: true },
    { useUnifiedTopology: true }
);


app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});