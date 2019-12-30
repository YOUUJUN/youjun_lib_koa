const router = require('koa-router')();
const git = require("./../utils/git_function/git_tools");
const workspaces = require("./../utils/workspace_manager/workspace");

const fsPromises = require('fs').promises;

const util = require("util");
// const execFile = util.promisify(require("child_process").execFile);

const homeService = require('../service/home');
var uuid = require('uuid');

module.exports = {
    index : async (ctx,next) =>{
        // const username = ctx.cookies.get("username");
        //
        // const ifExist = await workspaces.checkWorkSpaceByUser(username);
        //
        //
        // if(!ifExist){
        //     let workName = workspaces.workspaceNameGenerator(username);
        //     let userPath = await workspaces.createWorkSpace("F:\\learn_git_koa\\public\\source",workName);
        // }
        //

        // await next();

        let requestBody = ctx.request.ip;
        let responseBody = ctx.response;
        let nodeRequestBody = ctx.req;

        ctx.url = './home.html';

        await next();
    },

    register (ctx) {
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

        homeService.register(info);
    }
};
















