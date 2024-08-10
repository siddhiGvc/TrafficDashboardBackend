const { successResponse, errorResponse, uniqueId }=require('../../helpers');
const { Master, CurrentStatus, sequelize,numberPlate}=require('../../Models')



 const getData = async (req, res) => {
  try {
    // console.log(req.query.status)
    var replObjG = {};
    if (req.query.city) replObjG['City'] = req.query.city.split(',');
    if (req.query.location) replObjG['Location'] = req.query.location.split(',');
    if (req.query.uid) replObjG['UID'] = req.query.uid.split(',');
    if (req.query.status) replObjG['machine_status'] = req.query.status.split(',');
    if (req.query.status) replObjG['inverter_status'] = req.query.inverter_status.split(',');
    // if (req.query.beat) replObjG['beat'] = req.query.beat.split(',');

    // if (!req.user.isAdmin && replObjG['city'] && req.user.city)
    //   replObjG['city'] = replObjG['city'].filter(q => req.user.city.split(',').indexOf(q) >= 0);
    // else if (!req.user.isAdmin && !replObjG['city'] && req.user.city)
    //   replObjG['city'] = req.user.city.split(',');
    // if (!req.user.isAdmin && replObjG['zone'] && req.user.zone)
    //   replObjG['zone'] = replObjG['zone'].filter(q => req.user.zone.split(',').indexOf(q) >= 0);
    // else if (!req.user.isAdmin && !replObjG['zone'] && req.user.zone)
    //   replObjG['zone'] = req.user.zone.split(',');
    // if (!req.user.isAdmin && replObjG['ward'] && req.user.ward)
    //   replObjG['ward'] = replObjG['ward'].filter(q => req.user.ward.split(',').indexOf(q) >= 0);
    // else if (!req.user.isAdmin && !replObjG['ward'] && req.user.ward)
    //   replObjG['ward'] = req.user.ward.split(',');
    // if (!req.user.isAdmin && replObjG['beat'] && req.user.beat)
    //   replObjG['beat'] = replObjG['beat'].filter(q => req.user.beat.split(',').indexOf(q) >= 0);
    // else if (!req.user.isAdmin && !replObjG['beat'] && req.user.beat)
    //   replObjG['beat'] = req.user.beat.split(',');

    // var replObj = { machine_status: req.query.status.split(',') };
    // if (req.query.stock_status) replObj['stock_status'] = req.query.stock_status.split(',');
    // if (req.query.burn_status) replObj['burn_status'] = req.query.burn_status.split(',');
    const [objAll, _metadata] = await sequelize.query(`
      select a.*, b.* from TrafficLightColors a
      left join TrafficLight_summary b on a.Junction = b.Junction
      where 1=1
      ${replObjG.City ? ` and b.City in (:city)` : ''}
      ${replObjG.Location ? ` and b.zone in (:location)` : ''}
      ${replObjG.UID ? ` and b.ward in (:uid)` : ''}
   
    `, { replacements:{
      city: req.query.city.split(','),
      location:req.query.location.split(','),
      uid:req.query.uid.split(','),
    } });
    const [obj, metadata] = await sequelize.query(`
      select a.*, b.* from TrafficLightColors a
      left join TrafficLight_summary b on a.Junction = b.Junction
      where 1=1
 
      ${replObjG.City ? ` and b.City in (:city)` : ''}
      ${replObjG.Location ? ` and b.zone in (:location)` : ''}
      ${replObjG.UID ? ` and b.ward in (:uid)` : ''}
      ${replObjG.machine_status ? ` and b.light_status in (:machine_status)` : ''}
      ${replObjG.inverter_status ? ` and b.inverter_status in (:inverter_status)` : ''}
   
  `, {
    replacements:{
      city: req.query.city.split(','),
      location:req.query.location.split(','),
      uid:req.query.uid.split(','),
      machine_status:req.query.status.split(','),
      inverter_status:req.query.inverter_status.split(',')
    }
  });
    // console.log(obj,objAll)
    return successResponse(req, res, { data: obj || [], dataAll: objAll || [] });
  } catch (error) {
    console.log(error)
    return errorResponse(req, res, error.message);
  }
};



 const getCities = async (req, res) => {
    try {
      const [obj, metadata] = await sequelize.query(`
        select distinct City from TrafficLightDevices order by City;
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
        select distinct zone from TrafficLightDevices where City in (:city) order by zone;
      `, {
        replacements: {
          city: req.query.city.split(','),
       
        },
      });
      var respObj = obj.map(q => q.zone);
    //   if (!req.user.isAdmin && req.user.ward)
    //     respObj = respObj.filter(q => req.user.ward.split(',').indexOf(q) >= 0)
      return successResponse(req, res, respObj);
    } catch (error) {
      return errorResponse(req, res, error.message);
    }
  };

   const getUid = async (req, res) => {
    try {
      // console.log(req.query.city)
      // console.log(req.query.location);
      const [obj, metadata] = await sequelize.query(`
        select distinct ward from TrafficLightDevices where City in (:city) and zone in (:location) order by ward;
      `, {
        replacements: {
          city: req.query.city.split(','),
          location:req.query.location.split(',')
        
        },
      });

      return successResponse(req, res, obj.map(q => q.ward));
    } catch (error) {
      // console.log(error)
      return errorResponse(req, res, error.message);
    }
  };

  const getBeats = async (req, res) => {
    try {
      // console.log(req.query.city)
      // console.log(req.query.location);
      const [obj, metadata] = await sequelize.query(`
        select distinct beat from TrafficLightDevices where City in (:city) and zone in (:location) and ward in (:uid) order by beat;
      `, {
        replacements: {
          city: req.query.city.split(','),
          location:req.query.location.split(','),
          uid:req.query.uid.split(',')
        
        },
      });

      return successResponse(req, res, obj.map(q => q.beat));
    } catch (error) {
      // console.log(error)
      return errorResponse(req, res, error.message);
    }
  };
  
  module.exports={getData,getCities,getLocations,getUid,getBeats}