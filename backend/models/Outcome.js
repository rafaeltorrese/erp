const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const outcomeSchema = new Schema({

  name: {
    type: String,
    required:true
  },

  code: {
    type: String
  },

  activities: [{
    activity: { type: Schema.Types.ObjectId, ref: "Activity" }
  }],
  
  description:{
    type:String
  },
  total:{
    type:Number,
    default:0
  },

  active:{
    type:Boolean,
    defaul:false
  },
  usage:{
    enum:["Specific", "General"],
    type:String
  }

})


module.exports = mongoose.model("Outcome", outcomeSchema);

