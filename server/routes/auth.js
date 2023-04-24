const express = require('express');
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const jwt = require('jsonwebtoken');
const JWT_SECRET = "@abhi@abhi123"
//Route 1:create an user using post "./api/auth/createuser".no login reauired
router.post('/createuser', [
  body('name').isLength({ min: 3 }),
  body('password').isLength({ min: 5 }),
  body('email').isEmail(),
], async (req, res) => {
  //if there are errors,return bad request and the errors
  let success = false;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  //check whether the user exists with this email 
  try { 
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ success, error: "sorry, a user with this email already exists" });
    }
    //create a new user 
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authToken });
  }
  catch (error) {
    success = false;
    console.error(error.message);
    res.status(500).send("some error occured")
  }
})
//Route2:Authenticate an user using post "./api/auth/login".no login reauired

router.post('/login', [
  body('email', 'Enter a valid Email').isEmail(),
  body('password', 'password can not be blank').exists()
], async (req, res) => {
  //if there are errors,return bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Please try to login with correct credentials' });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    let success;
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ error: 'Please try to login with correct credentials' });
    }
    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authToken });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error")
  }
})

//Route3:get logged in user details using :POST:api/auth/getuser.No login required
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("internal server error");
  }
})
module.exports = router