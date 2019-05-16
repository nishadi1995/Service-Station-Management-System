const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a new schema for posts data in mongodb 
const vehicleSchema = new Schema({
    model :String,
    number: String,
    regTo:String
});

//(name of the model, a vehicle model is going to have model,number and regTo, collection name in db)
//if we use this model elsewhere we need to export the model here
module.exports = mongoose.model('vehicle',vehicleSchema,'vehicles');