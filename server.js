const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));


// Creating database connection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workoutTracker",
    { useNewUrlParser: true }
  );


app.listen(PORT,function(){ 
    console.log(`App listening on port ${PORT}`);
});