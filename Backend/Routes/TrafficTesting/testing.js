import express from "express";
import * as testing from '../../Controllers/TrafficTesting/testing';

const router = express.Router();
router.get('/getOutputs',testing.getAllCommandOutputs);


module.exports=router;