const express=require('express');
const {saveLogin,getLogInfo}=require('../Controllers/additions/loginLogs');
const {serachDevice,updateStatus,getAllTrafficLights,addTrafficLights,getByUID,numberPlate,deleteDevice}=require('../Controllers/additions/trafficLights')

const auth=require('../Middleware/apiAuth');
const router = express.Router();






router.post('/savelogin',saveLogin);
router.post('/getloginfo',auth,getLogInfo);
router.post('/searchDevice',auth,serachDevice);
router.post('/updateStatus',auth,updateStatus);
router.post('/addDevice',auth,addTrafficLights);
router.get('/deleteDevice',auth,deleteDevice);
router.get('/getAllTrafficLights',auth,getAllTrafficLights);

router.post('/getByUid',auth,getByUID);
router.get('/getNumber',auth,numberPlate);

module.exports=router;