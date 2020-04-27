module.exports = {
    apps : [
        {
            name : "youjun_lib_koa",
            script : "./bin/www",
            watch: true,
            error_file : "./server/.pm2/err.log",
            out_file : "./server/.pm2/out.log",
            ignore_watch : ['node_modules','server','web'],
            env : {
                "NODE_ENV" : "development",
            },
            env_production : {
                "NODE_ENV" : "production"
            }
        }
    ]
};