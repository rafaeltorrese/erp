const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  name: {
    type: String,
  },

  code: {
    type: String,
    required: true
  },
  measurement:{
    type:String
  },
  quantity:{
    type:Number
  },
  unitPrice:{
    type:Number
  },
  total:{
    type:Number
  },
  description:{
    type:String
  } 
});

module.exports = mongoose.model("Activity", activitySchema)