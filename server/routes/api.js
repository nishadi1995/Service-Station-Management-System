/*all database requests are managed in this file*/
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/posts');

/*db connection string*/
const db = "mongodb+srv://Nishadi:123456781@@cluster0-7dpxi.mongodb.net/test?retryWrites=true";

/*to avoid mongoose warnings*/
mongoose.Promise = global.Promise;   



/*connect to db*/
mongoose.connect(db,{useNewUrlParser:true},function(err){
    console.log("done")
   if(err){
       console.error("Error "+err);
   }
});

/*get all posts from db/ api to get data*/
router.get('/posts', function(req,res){
    console.log('get request for all posts');
    post.find({})
    .exec(function(err,po){
        if(err){
            console.log("error retriving");
        }else{
            res.json(po);   //result returns in a json object
            console.log(po);
            return res;
        }
    });
});

/*send post to db / api to send data*/
router.post('/sdpost',function(req,res){
    console.log('posting a post');
    var newpost = new post(req.body);
    console.log(newpost.content);
    /*newpost.name = "testing";
    newpost.content= "testing";*/
    newpost.save(function(err, insertedpost){       //save into mongodb
        if(err){
            console.log(err);
        }else{
            res.json(insertedpost);
        }
    });
});

/*update db api*/
router.put('/post/:id',function(req,res){
    console.log('updating a post');
    var newpost = new post(req.body);
    console.log(newpost.id);
    console.log(req.params.id);

    post.findByIdAndUpdate(req.params.id,
    {
        $set: {content:newpost.content}    //new values to get updated
    },
    {
        new:true   //to get the updated post object if false it will give the previous values
    },
    function(err,updatedpost){
      if(err){
          res.send("Error updating post");
      }else{
          res.json(updatedpost);
      }
    }
    );
});

/*delete api*/
router.delete('/delpost/:id',function(req,res){
    console.log('deleting a post');
    post.findByIdAndRemove(req.params.id, function(err,deletedpost){
        if(err){
            res.send("Error deleting post");
        }else{
            res.json(deletedpost);
        }
    });
});

module.exports=router;
