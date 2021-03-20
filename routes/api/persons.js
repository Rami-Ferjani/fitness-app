const { json } = require("body-parser");
const express = require("express");
const router = express.Router();

//user Model
const person = require("../../models/Person");

//@route    POST api/persons
//@des       register new user
//@access   pubic

router.post("/", (req, res) => {
  res.send("register");
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
