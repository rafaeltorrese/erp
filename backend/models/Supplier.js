const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supplierSchema = new Schema({
  nameSupplier: {
    type: String,
    required: true
  },

  rfc: {
    type: String,
    required: true,
    unique: true
  },

  sector: {
    type: String
  }

})


module.exports = mongoose.model("Supplier", supplierSchema)