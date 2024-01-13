const express=require('express');
const saveLogin=require('../Controllers/additions/loginLogs');
const serachDevice=require('../Controllers/additions/trafficLights')
const router = express.Router();







router.post('/savelogin',saveLogin.saveLogin);
router.post('/getloginfo',saveLogin.getLogInfo);
router.post('/searchDevice',serachDevice)

module.exports=router;