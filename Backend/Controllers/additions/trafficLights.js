var events = require('../../helpers/events');
const { successResponse, errorResponse, uniqueId }=require('../../helpers');
const { Master,CurrentStatus,NumberPlate}=require('../../Models')
const mqttHandler=require('../../mqtt');

var mqttClient = new mqttHandler();



const addTrafficLights=async(req,res)=>{
    try{

        console.log(req.body);
        const data=await Master.create({
            UID:req.body.Uid,
            City:req.body.City,
            Location:req.body.Location,
            Lat:req.body.Lat,
            Long:req.body.Long,
            Roads:req.body.Roads
        })
        await CurrentStatus.create({
            UID:req.body.Uid,
           
        })
        res.status(200).json("Okay");
       
    }
    catch(err){
        res.status(505).json("Error");

    }
}

const getAllTrafficLights=async(req,res)=>{
    try{

        const data=await Master.findAll();
        // console.log(data);
        return successResponse(req, res, { data });   
       
    }
    catch(err){
        res.status(505).json("Error");

    }
}

const getByUID=async(req,res)=>{
    try{
        // console.log(req.body);
        const data=await Master.findOne({where:{UID:req.body.Uid}});
        res.status(200).json(data);
       
    }
    catch(err){
        res.status(505).json("Error");

    }
}



const serachDevice = async (req, res) => {
    try {


        // const interval = setTimeout(() => {
        //     // Device Not Found after 30 seconds
        //     res.status(404).json({ message: "Device Not Found" });
        //     clearInterval(interval); // Clear the timeout
        //     events.pubsub.removeListener('searchByDeviceId', searchCallback);
        // }, 30000);

        // const searchCallback = (action, serial, parts) => {
        //     if (action === 'search') {
              
        //         if (serial === req.body.deviceId) {
        //             clearInterval(interval);
                 
        //             events.pubsub.removeListener('searchByDeviceId', searchCallback);
        //             res.status(200).json(parts);
        //         }
        //     }
        // };

        // events.pubsub.on('searchByDeviceId', searchCallback);
        const data=await CurrentStatus.findOne({where:{UID:req.body.deviceId}});
        res.status(200).json(data);


    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};



const updateStatus=async(req,res)=>{
    try{
        // console.log(req.body);
        var message="*"+req.body['status[serial]']+",TL,"+req.body['status[1]']+','+req.body['status[2]']+','+req.body['status[3]']+','+req.body['status[4]']+','+req.body['status[5]']+','+req.body['status[6]']+','+req.body['status[7]']+','+req.body['status[8]']+"#";
     
        mqttClient.sendMessage('GVC/VM/TRAFFIC' ,message);
    }
    catch(err){
        console.log("update error");
        console.log(err);
        res.status(505).json("Error");
    }
}

const numberPlate=async(req,res)=>{
    try{
        const data=await NumberPlate.findOne();
        res.status(200).json(data);
       
    }
    catch(err){
        res.status(505).json("Error");

    }
}

module.exports={serachDevice,updateStatus,addTrafficLights,getAllTrafficLights,getByUID,numberPlate}