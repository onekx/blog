/*
*  此文件用于管理员的登录和验证
*/

const express = require('express')
const admin = express.Router()
const jwt = require('jsonwebtoken')

const administrator = require('../models/administrator')

// 登录管理员
admin.post('/api/login', async (req, res) => {
    const user = await administrator.findOne({
        name: req.body.name
    })
    if (!user) res.send('用户不存在')
    const valid = require('bcrypt').compareSync(
        req.body.password,
        user.password
    )
    if (!valid) res.send('密码错误')

    const token = jwt.sign({ id: user._id }, "签名")

    res.send({ user, token })
})

module.exports = admin
