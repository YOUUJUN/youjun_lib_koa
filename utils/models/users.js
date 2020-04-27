const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username :{
        type : String,
        require : true
    },
    nickname: {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
    registerDate : {
        type : Date
    },
    lastLoginDate : {
        type : Date
    }
});


const users = mongoose.model("users",userSchema,"users");

module.exports = users;
