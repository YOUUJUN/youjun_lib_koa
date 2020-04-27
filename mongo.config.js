// config/mongo.js
const mongoose = require('mongoose').set('debug', true);
const options = {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE, // 一直尝试重连
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize : 10,    //default 5
    keepAlive : 100
};

const url = 'mongodb://youjunla:KHIS302@localhost:27017/youjun';

module.exports = {
    connect: ()=> {
        mongoose.connect(url,options);
        let db = mongoose.connection;
        db.on('error', console.error.bind(console, '连接错误:'));
        db.once('open', ()=> {
            console.log('mongodb connect suucess');
        })
    }
};