const { Master, CurrentStatus, sequelize,numberPlate}=require('../Models')
var events = require('./events');
//a
const num = a => {
    if (['BST', 'BEN', 'BER'].indexOf(a) > -1) return a == 'BST' ? 1 : a == 'BEN' ? 0 : 2;
    if (isNaN(parseInt(a))) return null;
    else return parseInt(a);
}
//q
module.exports.parse = (payload, mqttClient,topic) => {
    if (!/.*?(\*[0-9A-Za-z\,]*\#)+?.*?/gm.test(payload)) return;
    var commands = [...payload.toString().matchAll(/.*?(\*[0-9A-Za-z\,]*\#)+?.*?/gm)].map(q => q[0]);
    commands.forEach(cmd => {
        try {
            parseInternal(cmd, mqttClient,topic);
        } catch (ex) {
            console.log('Exception in MQTT:', ex);
        }
    })
}

const parseInternal = (payload, mqttClient,topic) => {
    // 'Parsing message - ' + payload
    try {
        var cleaned = /^\**(.*?)\#*$/.exec(payload)[1];
        var parts = cleaned.split(',');
        // 211023 - ignore test with numeric number, allow commands in parts[0] 
        //if (!/^\d+$/.test(parts[0])) return;

        // 211023 added code for detecting machine packets ie *SSN,12345# sent to GVC/VM/#
        if (parts[0] == 'SSN'){
            var from = topic.replace('GVC/VM/','');
            console.log('From -',from,'  To -',parts[1]); 
            // Transaction.create({
            //     machine: from,
            //     command: parts[0],
            //     p1: parts[1],
            // }) 
            return;
            }  
            // console.log(payload);
            if(parts[1]=="TL")
            {


                reset_statusOfTrafficLights(parts,parts[0]);
                // events.pubsub.emit('searchByDeviceId','search',parts[0],parts);
            }
            if(parts[1]=="PL")
            {
                reset_statusOfNumberPlate(parts[0])
                // events.pubsub.emit('numberPlate',parts[0]);
            }

            if (parts[1] == 'STA')
            {
                console.log(parts);
             //   events.pubsub.emit('paytm_success',parts[3],parts[2]) ;
            }   
    
        

        
            
        
    } catch (ex) {
        console.log('Failed to parse message', ex);
        // 'Failed to parse message'
    }
}


async function reset_statusOfTrafficLights(status, serial) {
   try{
     console.log("started function");
    const Device=await Master.findOne({where:{UID:serial}});
    const recordToUpdate = await CurrentStatus.findOne({ where: {UID:serial } });
    
    if (recordToUpdate) {
      // Update the properties of the record

      var Roads=Device.Roads;
      for (var i = 0; i < Roads; i++) {
        await sequelize.query(
          `UPDATE CurrentStatus
           SET  R${i + 1}PRI = :status,
                isOnline=1
           WHERE UID = :serial`,
          {
            replacements: {
        
              status: status[i + 2],
              serial: serial,
            },
            type: sequelize.QueryTypes.UPDATE,
          }
        );
      }
   
     
    }

   }
   catch(err){
       console.log("Error updaing record :"+err)
   }
}


async function reset_statusOfNumberPlate(number) {
    try{
   
         await sequelize.query(
           `UPDATE NumberPlates
            SET  number = :serial,
                 isOnline=1
            WHERE id= 1`,
           {
             replacements: {
         
              
               serial: number,
             },
             type: sequelize.QueryTypes.UPDATE,
           }
         );
       
    
      
     
 
    }
    catch(err){
        console.log("Error updaing record :"+err)
    }
 }