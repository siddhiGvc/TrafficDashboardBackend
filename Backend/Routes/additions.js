const express=require('express');
const saveLogin=require('../Controllers/additions/loginLogs');
const {serachDevice,updateStatus}=require('../Controllers/additions/trafficLights')

const auth=require('../Middleware/apiAuth');
const router = express.Router();






router.post('/savelogin',auth,saveLogin.saveLogin);
router.post('/getloginfo',auth,saveLogin.getLogInfo);
router.post('/searchDevice',auth,serachDevice);
router.post('/updateStatus',auth,updateStatus);

module.exports=router;