const router = require('koa-router')();

const fsPromises = require('fs').promises;

const util = require("util");
// const execFile = util.promisify(require("child_process").execFile);

const homeService = require('../service/home');
var uuid = require('uuid');

module.exports = {
    index : async (ctx,next) =>{
        let requestBody = ctx.request.ip;
        let responseBody = ctx.response;
        let nodeRequestBody = ctx.req;

        ctx.url = './home.html';

        await next();
    },

    register : async (ctx) => {
        let info = ctx.request.body;

        const registerInfo = {};
        const msg = {
            status : 0,
            message : "注册失败! 未知错误，请联系管理员!"
        };

        registerInfo.nickname = info.nickname;
        registerInfo.email = info.email;
        registerInfo.password = info.password;
        registerInfo.username = uuid.v1();

        if(!registerInfo.nickname){
            msg.message = "注册失败! 昵称不能为空";
            return ctx.body = msg;
        }

        if(!registerInfo.email){
            msg.message = "注册失败! 邮箱不能为空";
            return ctx.body = msg;
        }

        if(!registerInfo.password){
            msg.message = "注册失败! 密码不能为空";
            return ctx.body = msg;
        }

        //检测邮箱是否存在
        const emailIfExit = await homeService.checkEmailExist(registerInfo.email);

        if(emailIfExit === false){

            await homeService.register(info).then(value => {
                msg.status = 1;
                msg.message = "注册成功!";
            }).catch(err =>{
                msg.status = 0;
            }).finally(() => {
                return ctx.body = msg;
            })

        }else{
            msg.message = "注册失败! 该邮箱已被注册!";
            return ctx.body = msg;
        }
    },


    login : async (ctx) => {
        let info = ctx.request.body;

        const logInfo = {
            username : info.username,
            password : info.password
        }


    }
};
















