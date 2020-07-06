/*
*  此文件用于管理员的注册登录和验证
*/

const express = require('express')
const admin = express.Router()
const jwt = require('jsonwebtoken')

const administrator = require('../models/administrator')

// 注册管理员
admin.post('/api/register', async (req, res) => {
    const user = await administrator.create({
        name: req.body.name,
        password: req.body.password
    })
    res.send(user)
})

// 查询所有用户
admin.get('/api/users', async (req, res) => {
    const users = await administrator.find()
    res.send(users)
})

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

    const token = jwt.sign({ id: user._id }, '密钥')

    res.send({ user, token })
})

admin.route('/api/status')
    .get((req, res) => {
        if (req.session.name) res.send({ 'ok': true })
        else res.send({ 'ok': false })
    })

admin.route('/api/logout')
    .put((req, res) => {
        req.session.name = null
        res.send({ 'ok': true })
    })

module.exports = admin
