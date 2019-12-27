const router = require('koa-router')();
const git = require("./../utils/git_function/git_tools");
const workspaces = require("./../utils/workspace_manager/workspace");

const fsPromises = require('fs').promises;

const util = require("util");
// const execFile = util.promisify(require("child_process").execFile);

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

    // register (ctx) {
    //     console.log("body",ctx);
    //     // ctx.body = ctx;
    // }

    register : async(ctx,next) => {
        console.log("body",ctx);
        ctx.body = ctx;
    }
};