const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const constructionSchema = new Schema({
  code: {
    type: String,
    required: true
  },
  address:{
    type:String
  },
  responsible:{
    type:String
  },
  name:{
    type:String
  },
  initialDate:{
    type: String
  },

  phoneResponsible:{
    type:String
  },

  outcomes: [
    {
    outcome: { type: Schema.Types.ObjectId, ref: "Outcome" }
    }
],
  
  images:{
    type:[String]
  }
  
})


module.exports = mongoose.model("Construction", constructionSchema)
