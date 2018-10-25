
const mongoose = require('mongoose');

const user_reg = new mongoose.Schema({
    id:Number,
    userName:String,
    password:String
})

const user_login = new mongoose.Schema({
    userName:String,
    password:String
})

module.exports = mongoose.model("UserReg",user_reg);
module.exports = mongoose.model("UserLogin",user_login);