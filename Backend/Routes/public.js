const express=require('express');
// const {validate}=require('express-validation');

const userController=require('../Controllers/user/user.controller');
// const userValidator=require('../Controllers/user/user.validator');

const router = express.Router();

//= ===============================
// Public routes
//= ===============================

router.post(
  '/login',
 
  userController.login,
);
router.get(
  '/login/token',
  userController.tokenLogin,
);
router.post(
  '/register',

  userController.register,
);

module.exports = router;
