const User = require('../models/users');
const Otp = require('../models/otp');

const emailSend = async (req,res)=>{
    let data = await User.findOne({email:req.body.email});
    const response = {};
    if(data){}
}