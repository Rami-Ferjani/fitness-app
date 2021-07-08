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

//@route    POST api/persons
//@des       register new user
//@access   pubic

router.post("/", (req, res) => {
  const { name, lastname, email, password, workoutref } = req.body;

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
      lastname,
      email,
      password,
      admin: false,
      workoutref,
    });

    //Create salt n hash to has passwors
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newPerson.password, salt, (err, hash) => {
        if (err) throw err;
        newPerson.password = hash;
        newPerson.save().then((person) => {
          new ChatModel({ user: newPerson._id, chats: [] }).save();
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
                  lastname: person.lastname,
                  email: person.email,
                  admin: person.admin,
                  workoutref: person.workoutref,
                },
              });
            }
          );
        });
      });
    });
  });
});

//@route GET api/persons
//des     Get all persons
//@access public
router.get("/search1/:name", (req, res) => {
  let userPattern = new RegExp("^" + req.params.name);
  person
    .find({ name: /*{ $regex: userPattern }*/ req.params.name })
    .select("-password")
    .then((user) => {
      res.json(user);
    });
});

//@route  GET api/persons
//@des    Get one persons
//@access pubic

router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  person
    .findById(userId)
    .select("-password")
    .then((person) => res.json(person))
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;

router.put("/:userId", (req, res) => {
  person.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, person) => {
      if (err) {
        res.send(err);
      }
      res.json(person);
    }
  );
});

router.get("/", (req, res) => {
  person.find({}, (err, person) => {
    if (err) {
      res.send(err);
    }
    res.json(person);
  });
});

/*router.delete("/:userId", (req, res) => {
  person.remove({ _id: req.params.userId }, (err, person) => {
    if (err) {
      res.send(err);
    }
    res.json({ msg: "successufly deleted user" });
  });
});*/
