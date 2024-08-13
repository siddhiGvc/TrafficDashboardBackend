const express=require('express');
const auth=require('../Middleware/apiAuth');

const {SetLights,SetDate,getQueryPowerBackup,QueryPowreBackup,getLights,GetAllJunctions,GetAllInverters,GetAllDevices} = require('../Controllers/additions/trafficLights.controller');
const router = express.Router();


router.post('/setLights', SetLights);
router.post('/setDate', SetDate);
router.post('/queryPowerBackup', QueryPowreBackup);
router.post('/getInverterStatus', getQueryPowerBackup);
router.post('/getLights',getLights);
router.get('/getAllJunstion',GetAllJunctions);
router.get('/getAllInverters',GetAllInverters);
router.get('/getAllDevices',GetAllDevices);

module.exports = router;
