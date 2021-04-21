const bcrypt = require('bcrypt');
var bookride = false;
var result2 =  null;
const con = require('../functions/dbConnection')
var startLat = null ,startLng = null;
var endLat = null, endLng = null;

exports.hashPassword = async (password) => {
  try{
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }catch{
    res.status(500).send('not working');
  }
};


exports.startLatLng = (data)=>{
  console.log(data);
  startLat = data[0];
  startLng = data[1];
};

exports.endLatLng = (data)=>{
  endLat = data[0];
  endLng = data[1];
}

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

