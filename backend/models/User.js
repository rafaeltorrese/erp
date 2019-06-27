const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName:{
    type:String
  },

  lastName:{
    type:String
  },
  email:{
    type:String,
    required:true,
    unique:true

  },
  password:{
    required:true,
    type:String
  },
  photo:{
    type:String,
    default:"https://res.cloudinary.com/ironhackwebdevpt2/image/upload/v1559693618/erp/h38kdpxruadqxefi9tmx.jpg"
  }
},{timestamps:true});


module.exports = mongoose.model("User" , userSchema );

