const Users = require("../utils/models/users");

module.exports = {

    register : (info) => {

        const users = new Users({
            username : info.username,
            nickname : info.nickname,
            password : info.password,
            email : info.email
        });

        users.save().then(value => {
            console.log("value",value);
        }).catch(err => {
            console.log("err",err);
        })
    },

    checkEmail (email) {

    }

};