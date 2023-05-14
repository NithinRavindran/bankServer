const mongoose = require('mongoose');

mongoose.connecct('mongodb://localhost:27017/bankServer',{useNewUrlParser:true})           //connection string


const User = mongoose.model('User', {      //model
    acno: Number,
    uname: String,
    psw: String,
    balance: Number,
    transaction: []
})

 

module.exports = {
    User
}