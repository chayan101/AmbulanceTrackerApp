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

exports.checkBookride = ()=>{
  return bookride;
};

exports.getPendingRides = async (req, res) => {
	try{
  var sql = "Select * from pendingrides limit 1";

  await con.query(sql, function (err, result)
  {
    if (err){
      throw err;
    }
    return result;
    //Query result is array of RowDataPackets instead of array of objects
    //res.render("pending", {result: JSON.parse(JSON.stringify(result))});//converting it into an array of objects
	// 	console.log(result);
	// 	if(result.length === 0){
	// 		res.status(200).render('driver', {flag:1});
	// 	}
	// 	else{
	// 	res.status(200).render("driver",{
	// 		flag:2,
	// 		fname: result[0].fname,
	// 		rollnumber: result[0].rollnumber,
	// 		hostel: result[0].hostel,
	// 		mobile: result[0].mobile
	// 	});
	// }

	});
}catch(error){
	console.log(error);
	res.sendStatus(500);
}
};
