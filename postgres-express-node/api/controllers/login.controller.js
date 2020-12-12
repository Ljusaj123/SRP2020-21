//provjerava da li za dani username i password postoji u bazi i
// da li je password tocan te daje token
const winston = require("winston");
const { loginServiceInstance } = require("../../services"); 

const Logger = winston.loggers.get("logger");

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    //ako je sve tocno, vrati usera i token
    const {user, token} = await loginServiceInstance.login({ 
      username, 
      password
    });

    //vracamo krajnjem korisniku
    return res.json({user,token}); 
    
  } catch (err) {
    Logger.error(err);
    return res.status(400).json({ error: { message: err.message } });
  }
};
