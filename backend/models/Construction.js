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
    type:[String],
    default:"https://res.cloudinary.com/ironhackwebdevpt2/image/upload/v1561790334/erp/san2ng1avdxcicnhjapx.png"
  },
  
  address:{
    type:String
  }
},{timestamps:true})

constructionSchema.index({location:"2dsphere"})
module.exports = mongoose.model("Construction", constructionSchema)
