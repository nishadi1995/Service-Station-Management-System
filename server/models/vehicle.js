const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a new schema for posts data in mongodb 
const vehicleSchema = new Schema({
    number: String,
    regTo:String,
    brand:String,
    services:Array,
    date:String,
    date0:String,
    servicetype:String,
    itemsadded:String,
    totalcharge:String,
    specialnotes0:String,
    specialnotes1:String,
    specialnotes2:String,
    specialnotes3:String
});

//(name of the model, a vehicle model is going to have model,number and regTo, collection name in db)
//if we use this model elsewhere we need to export the model here
module.exports = mongoose.model('vehicle',vehicleSchema,'vehicles');