var events = require('../../helpers/events');

const serachDevice=async(req,res)=>{
    try{

        // console.log(req.body.deviceId);
        const interval=setTimeout(()=>{ 
            res.status(200).json("Not Found");
          },60000)

     
        events.pubsub.on('searchByDeviceId', function(action,msg,serial){
            if(action=='search')
            {
                if(serial==req.body.deviceId)
                {
                    clearInterval(interval);
                    res.status(200).json("okay");

                }
              
            }
        })
       


    }
    catch(err){
        console.log(err);
        res.status(505).json("Error");

    }

}


module.exports=serachDevice