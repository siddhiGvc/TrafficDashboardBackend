const customerRouter=require("express").Router();
const CustomeDataController =require("../Controllers/Customers/customerData");
const CustomeInfoController =require("../Controllers/Customers/customerInfo");




customerRouter.get("/getAllCustomerInfo",CustomeInfoController.getAllCustomerInfo);
customerRouter.get("/getAllCustomerData",CustomeDataController.getAllCustomerData);
customerRouter.post("/updateCustomerData",CustomeDataController.updateCustomerData);
customerRouter.post("/updateCustomerInfo",CustomeInfoController.updateCustomerInfo);
customerRouter.get("/deleteCustomerInfo",CustomeInfoController.deleteById);
customerRouter.get("/deleteCustomerData",CustomeDataController.deleteById);
customerRouter.post("/postCustomerInfo",CustomeInfoController.postCustomerInfo);
customerRouter.post("/postCustomerData",CustomeDataController.postCustomerData);

customerRouter.post("/getCustomerDataByName",CustomeDataController.getCustomerDataByName);
customerRouter.post("/getCustomerInfoByName",CustomeInfoController.getCustomerInfoByName);

module.exports=customerRouter;