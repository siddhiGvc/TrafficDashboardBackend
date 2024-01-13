const express = require('express');


const {profile,changePassword1} =require('../Controllers/user/user.controller');

const {changePassword}=require('../Controllers/user/user.validator');

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/me', profile);
router.post(
  '/changePassword',

  changePassword1,
);

module.exports = router;
