const bcrypt = require('bcrypt');
var bookride = false;
var result2 =  null;
const con = require('../functions/dbConnection')
var Lat = null ,Lng = null;

exports.hashPassword = async (password) => {
  try{
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }catch{
    res.status(500).send('not working');
  }
};


exports.LatLng = (data)=>{
  console.log(data);
  // Lat = data[0];
  // Lng = data[0];
};

exports.getLocation = ()=>{
  return [Lat,Lng];
}

exports.alterFlag = (value)=>{
  bookride = value;
  console.log(bookride);
  return bookride;
};

exports.checkBookride = ()=>{
  return bookride;
};

