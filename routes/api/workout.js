const { json } = require("body-parser");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth=require('../../middleware/auth')
import {workoutSchema} from '../../models/workout';

router.post('/',(req,res)=>{

})