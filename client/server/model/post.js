const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
   
  },
  creationDate: {
    type: Date,
    required: true,
  },
  slug:{
    type:String,
    required:true,
    unique:true
  }
});

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;

