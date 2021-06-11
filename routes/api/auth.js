const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

//user Model
const person = require("../../models/Person");
const ChatModel = require("../../models/ChatModel");

//@route    POST api/auth
//@des       Authenticatite  the user
//@access   pubic

router.post("/", (req, res) => {
  const { email, password } = req.body;

  //simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "please enter all fields" });
  }

  //check for existing user
  person.findOne({ email }).then((person) => {
    if (!person) {
      return res.status(400).json({ msg: "user does not exist" });
    }
    //validate password
    bcrypt.compare(password, person.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });
      /*const chatModel = ChatModel.findOne({ user: person.id });
      if (!chatModel) {
        new ChatModel({ user: person._id, chats: [] }).save();
      }*/

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
              admin: person.admin,
              workout: person.workout,
              day: person.day,
              workoutref: person.workoutref,
            },
          });
        }
      );
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

//@route  GET api/auth/persons
//@des    Get  user data
//@access private

router.get("/person", auth, (req, res) => {
  console.log(req.header("x-auth-token"));
  person
    .findById(req.person.id)
    .select("-password")
    .then((person) => res.json(person));
});
//-select("-password") tna7i el passwrod mel retour
module.exports = router;
