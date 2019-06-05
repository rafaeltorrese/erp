const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const serviceSchema = new Schema({

  supplier:{
    type:Schema.Types.ObjectId
  }

  name:{
    type:String
    required:true
  }

});

