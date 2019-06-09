const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a new schema for posts data in mongodb 
const revenueSchema = new Schema({
    profit :String,
    expense: String,
    year:String
});

//(name of the model, a appointment model is going to have username,date,time and package, collection name in db)
//if we use this model elsewhere we need to export the model
module.exports = mongoose.model('revenue',revenueSchema,'revenue');