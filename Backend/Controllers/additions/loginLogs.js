const { sequelize, trafficloginLogs }= require('../../Models');
const dotenv=require('dotenv');
const { successResponse, errorResponse, uniqueId }=require('../../helpers');
const { Op } = require("sequelize");
const moment = require('moment');


dotenv.config()
var currentDateTime = Date();


 const getLogInfo = async(req,res) => {
    try{

        const startDate = req.body.startDate;
        const endDate = req.body.endDate;
        console.log(startDate,endDate);
 
        const obj = await trafficloginLogs.findAll({
            where: {
                createdAt: { [Op.between]: [req.body.startDate, moment(req.body.endDate).add(1, 'day')] }
              },
              order: [['createdAt', 'ASC'], ['id', 'ASC']],
            });
          return successResponse(req, res, { obj });    
//          res.status(200).json("okay"); 
    }  

    catch(err){
        console.log("error in getting login info");
    
    }

}
 const saveLogin=async(req,res)=>{
    try{
        console.log("Saving Login Info")
        // console.log(req.body.userName);
        // console.log(req.body.lat);
        // console.log(req.body.long);
        // console.log(currentDateTime);
        trafficloginLogs.create({
            userName: req.body.userName,
            loginLat: req.body.lat || "99.99",
            loginLong: req.body.long || "99.99",
            LoggedInTill: currentDateTime,
            deviceModel: req.body.deviceModel,
            Remark:req.body.Remark,
            MachineNumber:req.body.MachineNumber
        }) 
        res.status(200).json("okay");
    }
    catch(err){
        console.log("error in saving login info");
    }
}


module.exports={getLogInfo,saveLogin}