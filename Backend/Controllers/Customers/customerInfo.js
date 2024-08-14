const { sequelize,TrafficCustomerInfo} =require('../../Models');
const dotenv =require('dotenv');
const { successResponse, errorResponse, uniqueId } =require('../../helpers');
const { Op } = require("sequelize");
const moment = require('moment');
dotenv.config();

 const updateCustomerInfo=async(req,res)=>{
    try{
        console.log(req.query.id);
        const data=await TrafficCustomerInfo.findOne({where:{id:req.query.id}});
        if(data)
        {
            await sequelize.query(
                `UPDATE TrafficCustomerInfo
                 SET \`CustomerName\`=:Customer,
                     \`City\`=:City
                    
                   

                 WHERE id= :ID`,
                {
                  replacements: {
                     ID:req.query.id,
                     Customer:req.body.CustomerName,
                     City:req.body.City,
                   
                   

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

 const postCustomerInfo=async(req,res)=>{
    try{

        await TrafficCustomerInfo.create({
            CustomerName:req.body.CustomerName,
            City:req.body.City,
           
         })

         res.status(200).json("Okay");

    }
    catch(err){
        res.status(505).json("Error")
    }
}


 const getAllCustomerInfo=async(req,res)=>{
    try{
    
      
        const obj = await TrafficCustomerInfo.findAll();
         res.status(200).json({data:obj})

    }
    catch(err){
        console.log(err);
        res.status(505).json({status:505})

    }

}

 const getCustomerInfoByName=async(req,res)=>{
    try{
    
      
        const obj = await TrafficCustomerInfo.findAll({where:{CustomerName:req.body.clientName}});
         res.status(200).json({data:obj})

    }
    catch(err){
        console.log(err);
        res.status(505).json({status:505})

    }

}

 const deleteById = async (req, res) => {
    try {
    
      await TrafficCustomerInfo.destroy({ where: { id: req.query.id } });
      return successResponse(req, res, {});
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
  };


  module.exports={updateCustomerInfo,postCustomerInfo,getAllCustomerInfo,getCustomerInfoByName,deleteById}