/*
*  此文件用于登录后台管理系统
*/

const express = require('express')
const admin = express.Router()

const administrator = require('../models/administrator')

admin.post('/api/login', (req, res) => {
    const inputName = req.body.name
    const inputPassword = req.body.password
    administrator.find((err, doc) => {
        if (err) console.log(err)
        else {
            if (inputName != doc[0].name || inputPassword != doc[0].password)
                res.json({ ok: false })
            else {
                req.session.name = inputName
                res.json({ ok: true })
            }
        }
    })
})

admin.route('/api/status')
    .get((req, res) => {
        if (req.session.name) res.send({ 'ok': true })
        else res.send({ 'ok': false })
    })

module.exports = admin
