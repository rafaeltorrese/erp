const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const constructionSchema = new Schema({
  code: {
    type: String,
    required: true
  },
  outcome:{
    type:String
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
    type: Date
  },

  phoneResponsible:{
    type:String
  },


  
})


module.exports = mongoose.model("Construction", constructionSchema)
