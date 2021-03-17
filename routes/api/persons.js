const { json } = require('body-parser');
const express=require('express');
const router=express.Router();

//Item Model
const person=require('../../models/Person');


//@route    Get api/persons
//@des Get  all persons
//@access   pubic

router.get('/',(req,res)=>{
    Person.find().then(items=>res.json(items));
});

//@route  POST api/persons
//@des    Get  all persons
//@access pubic

router.post('/',(req,res)=>{
   const newPerson=new person({
       name:req.body.name,
       lastName:req.body.lastName,
       email:req.body.email
   });
   newPerson.save().then(person=res.json(person));
});






module.exports=router;