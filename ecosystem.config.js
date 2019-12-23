module.exports = {
    apps : [
        {
            name : "youjun_lib_koa",
            script : "./bin/www",
            watch: true,
            error_file : "./public/.pm2/err.log",
            out_file : "./public/.pm2/out.log",
            ignore_watch : ['node_modules','public','web'],
            env : {
                "NODE_ENV" : "development",
            },
            env_production : {
                "NODE_ENV" : "production"
            }
        }
    ]
};