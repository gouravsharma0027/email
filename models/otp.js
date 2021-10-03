const mongoose = require('mongoose');
const conn = require('../config/db');

var otpSchema = new mongoose.Schema({
    email:String,
    otpcode:Number,
    expireIn:Number
},{
    timestamps:true
});
let otp = conn.model('otp',otpSchema,'otp')