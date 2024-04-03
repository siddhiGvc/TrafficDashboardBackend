const express=require('express');
const {saveLogin,getLogInfo}=require('../Controllers/additions/loginLogs');
const {serachDevice,updateStatus,getAllTrafficLights,addTrafficLights,getByUID,numberPlate,deleteDevice}=require('../Controllers/additions/trafficLights')

const auth=require('../Middleware/apiAuth');
const { getLastUid, saveLastUid } = require('../Controllers/additions/lastSelecteUid');
const { getCities, getLocations, getUid, getData } = require('../Controllers/additions/trafficLights.data.controller');
const router = express.Router();






router.post('/savelogin',saveLogin);
router.post('/getloginfo',auth,getLogInfo);
router.post('/searchDevice',auth,serachDevice);
router.post('/updateStatus',auth,updateStatus);
router.post('/addDevice',auth,addTrafficLights);
router.get('/deleteDevice',auth,deleteDevice);
router.get('/getAllTrafficLights',auth,getAllTrafficLights);

router.post('/getByUid',auth,getByUID);
router.post('/getNumberPlates',auth,numberPlate);

router.get('/getLastUid',getLastUid);
router.post('/saveLastUid',auth,saveLastUid);

router.get('/getCities',getCities);
router.get('/getLocations',getLocations);
router.get('/getUid',getUid);
router.get('/getData',auth,getData);

module.exports=router;