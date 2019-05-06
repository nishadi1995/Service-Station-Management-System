const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a new schema for posts data in mongodb 
const appointmentSchema = new Schema({
    username :String,
    date: Date,
    time:String,
    package:String
});

//(name of the model, a appointment model is going to have username,date,time and package, collection name in db)
//if we use this model elsewhere we need to export the model
module.exports = mongoose.model('appointment',appointmentSchema,'appointments');