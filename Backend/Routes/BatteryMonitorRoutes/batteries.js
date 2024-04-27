const express=require("express")
// import validate from 'express-validation';

const {getAllBatteries,getData,getMachines,getBeats,getWards,getZones,getAllTransaction} =require("../../Controllers/BatteryMonitor/batteries-data-controller")


const router = express.Router();

router.get('/getAllTransactions',getAllTransaction);
router.get('/getAllBatteries',getAllBatteries);
router.get('/data',getData);
router.get('/master/zone', getZones);
router.get('/master/ward', getWards);
router.get('/master/beat', getBeats);
router.get('/master/device', getMachines);

module.exports=router;