const bcrypt = require('bcrypt');
var bookride = false;
var result2 =  null;
const con = require('../functions/dbConnection')

exports.hashPassword = async (password) => {
  try{
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }catch{
    res.status(500).send('not working');
  }
};




exports.alterFlag = (value)=>{
  bookride = value;
  console.log(bookride);
  return bookride;
};

exports.checkBookride = ()=>{
  return bookride;
};

exports.getPendingRides = async () => {
	
};
