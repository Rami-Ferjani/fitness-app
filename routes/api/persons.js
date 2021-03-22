const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth=require('../../middleware/auth')

//user Model
const person = require("../../models/Person");

//@route    POST api/persons
//@des       register new user
//@access   pubic

router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  //simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }

  //check for existing user
  person.findOne({ email }).then((user) => {
    if (user) {
      return res.status(400).json({ msg: "user already exists" });
    }
    //if user doesn't exists
    const newPerson = new person({
      name,
      email,
      password,
    });

    //Create salt n hash to has passwors
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newPerson.password, salt, (err, hash) => {
        if (err) throw err;
        newPerson.password = hash;
        newPerson.save().then((person) => {
          jwt.sign(
            { id: person.id },
            config.get("jwtSecret"),
            {
              expiresIn: 3600,
            },
            (err, token) => {
              if (err) throw err;
              //lhna el reponse mta3 el authentithication
              
              res.json({
                token,
                person: {
                  id: person.id,
                  name: person.name,
                  email: person.email,
                },
              });
            }
          );
         
        });
      });
    });
  });
});

//@route  POST api/persons
//@des    Get  all persons
//@access pubic

/*router.post('/',(req,res)=>{
   const newPerson=new person({
       name:req.body.name,
       lastName:req.body.lastName,
       email:req.body.email
   });
   newPerson.save().then(person=res.json(person));
});*/

module.exports = router;
