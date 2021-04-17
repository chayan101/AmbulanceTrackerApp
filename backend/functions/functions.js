const bcrypt = require('bcrypt');
<<<<<<< HEAD

=======
>>>>>>> 8ff32a21bd1a6cb30ce07eb1524d1c67cd08dd19

exports.hashPassword = async (password) => {
  try{
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  }catch{
    res.status(500).send('not working');
  }
};
