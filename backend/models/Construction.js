const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const constructionSchema = new Schema({
  code: {
    type: String,
    required: true
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
  
  quantity:{
    type:String
  },

  images:{
    type:[String]
  }   
},{timestamps:true})

constructionSchema.index({location:"2dsphere"})
module.exports = mongoose.model("Construction", constructionSchema)
