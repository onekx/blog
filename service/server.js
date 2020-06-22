const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// 解决跨域问题
app.use(require('cors')())

// 添加bodyParse配置，方便处理Post请求中body的内容
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// 引入后台路由
const admin = require('./route/admin')
app.use(admin)

// 连接数据库并监听端口
const port = 6767
mongoose.connect('mongodb://localhost:27017/blog', (err) => {
    if (err) console.log('数据库连接失败')
    else console.log('数据库连接成功')

    app.listen(port, (err) => {
        if (err) console.log(err)
        else console.log('服务运行在 6767 端口')
    })
})
