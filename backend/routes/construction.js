const express = require("express")
const router = express.Router();
const Construction = require("../models/Construction")
const authUtils = require("../helpers/auth")
const uploader = require("../helpers/multer");

// Create
router.post("/" ,authUtils.verifyToken, 
uploader.array("images"),
(req,res) =>{
  const images = req.files.map(file => file.secure_url)

  Construction.create({...req.body, images})
  .then(construction =>{
    res.status(201).json({construction})
  })
  .catch(error => {
    res.status(200).json({
      error,
      message:"Construction was not created"
    })
  })
});


// get all construction
router.get("/", authUtils.verifyToken,(req, res) => {
  //const { _id } = req.user;
  Construction.find()
    .then(constructions => {
      res.status(200).json(constructions);
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
  Construction.findOneAndUpdate({_id:id} , {$set:req.body} , {new:true})
  .then(construction => {
    res.status(201).json({construction})
  })
  .catch(error =>{
    res.status(200).json({
      error,
      message:"You cannot Edit"
    })
  })
});


// Delete
router.delete("/:id" , authUtils.verifyToken,(req,res) => {
  const { id } = req.params;
  Construction.findOneAndRemove({_id:id})
  .then(construction =>{
    res.status(200).json(construction)
  })
  .catch(error =>{
    res.status(500).json({
      error,
    message:"Error"
    })
  })
})


module.exports = router;