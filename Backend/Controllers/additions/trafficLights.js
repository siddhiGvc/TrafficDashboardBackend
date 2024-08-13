var events = require('../../helpers/events');
const { successResponse, errorResponse, uniqueId }=require('../../helpers');
const { TrafficLightDevices,CurrentStatus,NumberPlates,TrafficLightColors,InverterStaus}=require('../../Models')
const mqttHandler=require('../../mqtt');

var mqttClient = new mqttHandler();



const addTrafficLights=async(req,res)=>{
    try{

        console.log(req.body);
        const data=await TrafficLightDevices.create({
            Junction:req.body.Uid,
            City:req.body.City,
            zone:req.body.Location,
            ward:req.body.ward,
            beat:req.body.beat,
            Lat:req.body.Lat,
            Long:req.body.Long,
            Address:req.body.address
            
        })

        console.log(data);
        await TrafficLightColors.create({
            Junction:req.body.Uid,
            lastHeartbeatTime:'2024-04-02 19:41:32'
           
        })
        await InverterStaus.create({
            Junction:req.body.Uid,
            lastHeartbeatTime:'2024-04-02 19:41:32'
           
        })
        res.status(200).json("Okay");
       
    }
    catch(err){
        console.log(err);
        res.status(505).json("Error");

    }
}

const getAllTrafficLights=async(req,res)=>{
    try{

        const data=await TrafficLightDevices.findAll();
        // console.log(data);
        return successResponse(req, res, { data });   
       
    }
    catch(err){
        console.log(err);
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
        const data=await NumberPlates.findOne({where:{UID:req.body.deviceId}});
        res.status(200).json(data);
    }
    catch(err){
        res.status(505).json("Error");

    }
}

const deleteDevice= async (req, res) => {
    try {
      
      const device = await Master.findOne({
        where: { id: req.query.id },
      });
      const device1 = await CurrentStatus.findOne({
        where: { id: req.query.id },
      });
      if (!device || !device1) {
        throw new Error(`Device doesn't exist`);
      }
  
      await device.destroy({ where: { id: req.query.id } });
      await device1.destroy({ where: { id: req.query.id } });
      return successResponse(req, res, {});
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
  };

  const pressButton=async(req,res)=>{
    try {
        var UserName=req.body.UserName;
        var ButtonName=req.body.ButtonName;
        console.log(UserName,ButtonName);
        var message="*"+"MAN"+","+UserName+","+ButtonName+"#";
        mqttClient.sendMessage('GVC/VM/#' + message);
        return successResponse(req, res, {});
      } catch (error) {
        return errorResponse(req, res, error.message);
      }

  }
  

module.exports={serachDevice,updateStatus,addTrafficLights,getAllTrafficLights,getByUID,numberPlate,deleteDevice,pressButton}