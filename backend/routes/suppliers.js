const express = require("express");
const router = express.Router();
const Supplier = require("../models/Supplier")



router.post(
  "/",
  //authUtils.verifyToken,
  (req, res) => {
    Supplier.create({ ...req.body })
      .then(supplier => {
        res.status(201).json({ supplier });
      })
      .catch(error => {
        res.status(500).json({
          error,
          message: "Supplier was not created",
        });
      });
  }
);

// get all outcomes
router.get("/", (req, res) => {
  //const { _id } = req.user;
  Supplier.find()
    .then(supplier => {
      res.status(200).json(supplier);
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "Error for getting Suppliers",
      });
    });
});

// Update
router.patch("/:id" , (req,res) =>{
  const { id } = req.params;
  Supplier.findOneAndUpdate({_id:id} , {$set:req.body} , {new:true})
  .then(supplier => {
    res.status(201).json({supplier})
  })
  .catch(error =>{
    res.status(200).json({
      error,
      message:"You cannot Edit"
    })
  })
});


// Delete
router.delete("/:id" , (req,res) => {
  const { id } = req.params;
  Supplier.findOneAndRemove({_id:id})
  .then(supplier =>{
    res.status(200).json(supplier)
  })
  .catch(error =>{
    res.status(500).json({
      error,
    message:"Error"
    })
  })
})


module.exports = router;
