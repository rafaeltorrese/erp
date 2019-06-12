const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
const User = require("../models/User")
const authUtils = require("../helpers/auth")
const crypto = require("crypto")
const mailer = require("../helpers/mailer")


// React pone una variable de entorno para saber el entorno y en base al entorno hacer peticiones al back
const isProduction = process.env.NODE_ENV === "production";
const base_url = isProduction ? "url_de_heroku" : "http://localhost:3000/api";


router.post("/",(req,res) =>{
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body,salt);
  
  // generate token for authentication
  const randomToken = crypto.randomBytes(25).toString("hex");

  const newUser = {
    ...req.body,
    confirmationCode:randomToken,
    password:hashedPassword
  }

  User.create(newUser)
  .then(user => {
    let options ={
      email:newUser.email,
      subject:"FutureBuilding - Email Confirmation",
      user:newUser.fullname,
      message:"Verify Your Email",
      confirmationUrl:`${base_url}/auth/confirm/${randomToken} `
    };

    options.filename="confirmation";

    mailer
      .send(options)
      .then(info => {
        console.log("Mail Succesfully sended" , info);
        return res.status(200).json({
          message:"Registration Process is Completed!!, wait for Email Confirmation "
        });
      })
      .catch(error => {
        res.stauts(500).json({
          error,
          message:`Error for creating  code confirmation for user ${newUser.fullname}` 
        });
      });
  })
  .catch(error => {
    res.status(500).json({
      error,
      message:`Error for creating user ${newUser.fullname}`
    })
  })
});


router.get("/confirm/:code", (req, res) => {
  let { code } = req.params;
  User.findOne({ confirmationCode: code })
    .then(user => {
      let { _id } = user;
      User.findByIdAndUpdate(_id, { $set: { active: true } }).then(user => {
        // generacion de token
        jwt.sign(
          { id: user._id },
          process.env.SECRET,
          // valor en segundos
          { expiresIn: process.env.TOKENLIFETIME },
          (error, token) => {
            if (error)
              return res
                .status(500)
                .json({ error, message: "Error en la creación del token" });
            user = authUtils.cleanUser(user._doc);
            res.status(200).json({ user, token });
          }
        );
      });
    })
    .catch(error => {
      error.action = `Error en la creación del token ${code} para confirmación de usuario`;
      next(error);
    });
});
module.exports = router;




