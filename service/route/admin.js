const express = require('express')
const admin = express.Router()

const administrator = require('../models/administrator')

admin
    .post('/admin/login', (req, res) => {
        const inputName = req.body.name
        const inputPassword = req.body.password
        administrator.find((err, doc) => {
            if (err) console.log(err)
            else {
                if (inputName != doc[0].name || inputPassword != doc[0].password)
                    res.json({ ok: false })
                else
                    res.json({ ok: true })
            }
        })
    })

module.exports = admin
