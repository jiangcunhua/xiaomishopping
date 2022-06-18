//创建express
const querystring = require('querystring')
const express = require('express')
const app = express()
    //创建服务器
app.post('/server', (req, res) => {
        // res.send('ok')
        // 跨域 
        console.log(req.body);

        res.setHeader('Access-Control-Allow-Origin', '*')

        res.send("请求成功");
        console.log("成功响应");
    })
    //监听
app.listen(80, function() {
    console.log('运行在127.0.0.1/sever端口');
})