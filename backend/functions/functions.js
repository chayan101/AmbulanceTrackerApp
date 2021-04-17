const bcrypt = require('bcrypt');
var bookride = false;


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

exports.checkAvailibilty = ()=>{
  return !bookride;
};
