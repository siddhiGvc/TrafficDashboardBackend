var events = require('../../helpers/events');
const { successResponse, errorResponse, uniqueId }=require('../../helpers');
const mqttHandler=require('../../mqtt');

var mqttClient = new mqttHandler();

const serachDevice=async(req,res)=>{
    try{

        // console.log(req.body.deviceId);
        const interval=setTimeout(()=>{ 
            return errorResponse(req, res, "Device Not Found");
         
          },60000)

     
          const searchCallback = (action, serial, parts) => {
            if (action === 'search') {
                console.log(typeof serial);
                console.log(typeof req.body.deviceId);
                if (serial === req.body.deviceId) {
                    clearInterval(interval);
                    console.log("interval cleared");
                    console.log(parts);
                    events.pubsub.removeListener('searchByDeviceId', searchCallback);
                    return successResponse(req, res, parts);
                   
                }
            }
        };

        events.pubsub.on('searchByDeviceId', searchCallback);
    }
    catch(err){
        console.log(err);
        res.status(505).json("Error");

    }

}


const updateStatus=async(req,res)=>{
    try{
        console.log(req.body);
        var message="*"+req.body['status[serial]']+",TL,"+req.body['status[1]']+','+req.body['status[2]']+','+req.body['status[3]']+','+req.body['status[4]']+','+req.body['status[5]']+','+req.body['status[6]']+','+req.body['status[7]']+','+req.body['status[8]']+"#";
     
        mqttClient.sendMessage('GVC/VM/TRAFFIC' ,message);
    }
    catch(err){
        console.log("update error");
        console.log(err);
        res.status(505).json("Error");
    }
}

module.exports={serachDevice,updateStatus}