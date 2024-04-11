const express = require('express');


const router = express.Router();
const { createUser, userSignIn } = require('../controllers/user');
const { validateUserSignUp, userVlidation, validateUserSign } = require('../middlewares/validation/user');
const { isAuth } = require('../middlewares/auth');

// Import User model
const User = require('../models/user');

// Create a POST route for user signup
router.post('/create-user', validateUserSignUp, userVlidation, async (req, res) => {
  try {
    // Extract signup data from request body
    const { fullname, email, password } = req.body;

    // Check if the email is already in use
    const isNewUser = await User.isThisEmailInUse(email);
    if (!isNewUser) {
      return res.json({
        success: false,
        message: 'This email is already in use, try signing in instead.',
      });
    }

    // Create a new user instance
    const user = await User({
      fullname,
      email,
      password,
    });

    // Save the new user to the database
    await user.save();

    // Return the newly created user
    res.json({
      success: true,
      user,
      message: 'User created successfully.',
    });
  } catch (error) {
    // Handle any errors
    console.error('Error creating user:', error.message);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
});

router.post('/create-user', validateUserSignUp, userVlidation, createUser);
router.post('/sign-in',validateUserSign, userVlidation, userSignIn);
router.post('/create-post',isAuth, (req, res) => {
    // create our post
    res.send('welcome you are in secret route');
});



module.exports = router;