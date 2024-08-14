const { sequelize,TrafficCustomerData} =require('../../Models');
const dotenv =require('dotenv');
const { successResponse, errorResponse, uniqueId } =require('../../helpers');
const { Op } = require("sequelize");
const moment = require('moment');
dotenv.config();

 const updateCustomerData=async(req,res)=>{
    try{

        const data=await TrafficCustomerData.findOne({where:{id:req.query.id}});
        if(data)
        {
            await sequelize.query(
                `UPDATE TrafficCustomerData
                 SET \`CustomerName\`=:Customer,
                     \`CInfo1\`=:City1,
                     \`CInfo2\`=:City2,
                     \`CInfo3\`=:City3,
                     \`CInfo4\`=:City4,
                     \`MachineType\`=:MachineType

                 WHERE id= :ID`,
                {
                  replacements: {
                     ID:req.query.id,
                     Customer:req.body.CustomerName,
                     City1:req.body.CInfo1,
                     City2:req.body.CInfo2,
                     City3:req.body.CInfo3,
                     City4:req.body.CInfo4,
                     MachineType:req.body.MachineType
                  },
                  type: sequelize.QueryTypes.UPDATE,
                }
              );

        }
       
        res.status(200).json("Okay");

    }
    catch(err){
        console.log(err);
        res.status(505).json("Error")

    }

}

 const postCustomerData=async(req,res)=>{
    try{

        await TrafficCustomerData.create({
            CustomerName:req.body.CustomerName,
            CInfo1:req.body.CInfo1,
            CInfo2:req.body.CInfo2,
            CInfo3:req.body.CInfo3,
            CInfo4:req.body.CInfo4,
            MachineType:req.body.MachineType
            
           
         })

         res.status(200).json("Okay");

    }
    catch(err){
        res.status(505).json("Error")
    }
}




 const getAllCustomerData=async(req,res)=>{
    try{
    
      
        const obj = await TrafficCustomerData.findAll();
         res.status(200).json({data:obj})

    }
    catch(err){
        console.log(err);
        res.status(505).json({status:505})

    }

}

 const getCustomerDataByName=async(req,res)=>{
    try{
    
      
        const obj = await TrafficCustomerData.findAll({where:{CustomerName:req.body.clientName}});
         res.status(200).json({data:obj})

    }
    catch(err){
        console.log(err);
        res.status(505).json({status:505})

    }

}

const deleteById = async (req, res) => {
    try {
    
      await TrafficCustomerData.destroy({ where: { id: req.query.id } });
      return successResponse(req, res, {});
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
  };


  module.exports={updateCustomerData,postCustomerData,getAllCustomerData,getCustomerDataByName,deleteById}