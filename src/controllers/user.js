const usercontroller = {};

usercontroller.index  = async (req, res) =>{
  res.json("hola mundo desde node");  
};

usercontroller.create  = async (req, res) =>{
  res.json(req.body);  
};

module.exports = usercontroller;