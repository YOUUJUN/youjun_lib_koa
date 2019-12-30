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
        require : false
    }
});

const user = mongoose.model("user",userSchema);

module.exports = user;
