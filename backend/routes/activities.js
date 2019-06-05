const express = require("express")
const router = express.Router();
const Activity = require("../models/Activity")



router.post(
  "/",
  //authUtils.verifyToken,
  (req, res) => {
    const { unitPrice, quantity } = req.body;;
    req.body["total"] = quantity * unitPrice;

    Activity.create({ ...req.body })
      .then(activity => {
        res.status(201).json({ activity });
      })
      .catch(error => {
        res.status(500).json({
          error,
          message: "Activity did not create",
        });
      });
  }
);



// get all activities
router.get("/", (req, res) => {
  //const { _id } = req.user;
  Activity.find()
    .then(activities => {
      res.status(200).json(activities);
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "Error al buscar las actividades",
      });
    });
});


// delete activity

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  //const { _id: author } = req.user;

  Activity.findOneAndRemove({ _id: id })
    .then(activity => {
      res.status(200).json({ activity });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "Cannot Delete Activity",
      });
    });
});


// update 
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { unitPrice, quantity } = req.body;;
  let newTotal = quantity * unitPrice;
  req.body["total"] = newTotal
  Activity.findOneAndUpdate({ _id: id }, { $set: req.body }, { new: true })
    .then(activity => {
      res.status(200).json({ activity });
    })
    .catch(error => {
      res.status(500).json({
        error,
        message: "You cannot edit",
      });
    });
});






module.exports = router;