const express = require("express")
const router = express.Router();
const Outcome = require("../models/Outcome")
const authUtils = require("../helpers/auth")

// Create
router.post("/" , authUtils.verifyToken,(req,res) =>{
  Outcome.create({...req.body})
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


// get all outcomes
router.get("/", authUtils.verifyToken,(req, res) => {
  //const { _id } = req.user;
  Outcome.find()
    .then(outcomes => {
      res.status(200).json(outcomes);
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "Error al buscar las obras",
      });
    });
});

// Update
router.patch("/:id" , authUtils.verifyToken,(req,res) =>{
  const { id } = req.params;
  Outcome.findOneAndUpdate({_id:id} , {$set:req.body} , {new:true})
  .then(outcome => {
    res.status(201).json({outcome})
  })
  .catch(error =>{
    res.status(200).json({
      error,
      message:"You cannot Edit"
    })
  })
});


// Delete
router.delete("/:id" ,authUtils.verifyToken, (req,res) => {
  const { id } = req.params;
  Outcome.findOneAndRemove({_id:id})
  .then(outcome =>{
    res.status(200).json(outcome)
  })
  .catch(error =>{
    res.status(500).json({
      error,
    message:"Error"
    })
  })
})


module.exports = router;