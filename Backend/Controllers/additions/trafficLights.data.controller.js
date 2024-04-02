const { successResponse, errorResponse, uniqueId }=require('../../helpers');
const { Master, CurrentStatus, sequelize,numberPlate}=require('../../Models')
 const getCities = async (req, res) => {
    try {
      const [obj, metadata] = await sequelize.query(`
        select distinct City from Master order by City;
      `
      );
      var respObj = obj.map(q => q.City);
    //   if (!req.user.isAdmin && req.user.City)
    //     respObj = respObj.filter(q => req.user.City.split(',').indexOf(q) >= 0)
      return successResponse(req, res, respObj);
    } catch (error) {
      // console.log(error)
      return errorResponse(req, res, error.message);
    }
  };
   const getLocations = async (req, res) => {
    try {
      const [obj, metadata] = await sequelize.query(`
        select distinct Location from Master where City in (:city)  order by Location;
      `, {
        replacements: {
          city: req.query.city.split(','),
       
        },
      });
      var respObj = obj.map(q => q.Location);
    //   if (!req.user.isAdmin && req.user.ward)
    //     respObj = respObj.filter(q => req.user.ward.split(',').indexOf(q) >= 0)
      return successResponse(req, res, respObj);
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
  };
   const getUid = async (req, res) => {
    try {
      const [obj, metadata] = await sequelize.query(`
        select distinct UID from Master where City in (:city) and Location in (:location) order by UID;
      `, {
        replacements: {
          city: req.query.city.split(','),
          location:req.query.location.split(',')
        
        },
      });
      console.log(obj)
      return successResponse(req, res, obj.map(q => q.UID));
    } catch (error) {
      console.log(error)
      return errorResponse(req, res, error.message);
    }
  };
  
  module.exports={getCities,getLocations,getUid}