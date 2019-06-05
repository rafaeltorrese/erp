const express = require("express")
const router = express.Router();
const Outcome = require("../models/Outcome")

router.post("/" , (req,res) =>{
  
  Outcome.create(...req.body)
  .then(outcome =>{
    res.status(201).json({outcome})
  })
  .catch(error => {
    res.status.json({
      error,
      message:"Outcome was not created"
    })
  })
});



module.exports = router;