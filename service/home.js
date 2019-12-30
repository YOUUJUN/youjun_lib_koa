const Users = require("../utils/models/users");

module.exports = {

    register : async (info) => {

        const msg = {
            status : 0,
            message : "注册失败! 未知错误，请联系管理员!"
        };

        const users = new Users({
            username : info.username,
            nickname : info.nickname,
            password : info.password,
            email : info.email
        });

        let result = await users.save();

        return result;
    },

    checkEmailExist : async (email) => {
        const users = Users;
        let result = await users.findOne({email:email});
        if(result === null){
            return false;
        }else{
            return true;
        }

    }

};