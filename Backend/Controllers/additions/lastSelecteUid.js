
// var events = require('../../helpers/events');
const { successResponse, errorResponse, uniqueId }=require('../../helpers');
const { Master,lastSelectedUid,sequelize}=require('../../Models')
// const mqttHandler=require('../../mqtt');

// var mqttClient = new mqttHandler();



const saveLastUid=async(req,res)=>{
    try{

        console.log(req.body);

       sequelize.query(`UPDATE lastSelectedUid
        SET lastUid = ${req.body.UID}
        WHERE id = 1;`)
        res.status(200).json("Okay");
       
    }
    catch(err){
        res.status(505).json("Error");

    }
}

const getLastUid=async(req,res)=>{
    try{
        console.log(1);
        const data=await lastSelectedUid.findAll();
        // console.log(data);
        res.status(200).json(data);  
       
    }
    catch(err){
        res.status(505).json("Error");

    }
}


module.exports={getLastUid,saveLastUid}