/*
*  获取所有的文章类别
*/

const express = require('express')
const tags = express.Router()

const archive = require('../models/Archive')

tags.get('/admin/tags', (req, res) => {
    archive.find((err, doc) => {
        if (err) res.send(err)
        else {
            const tagsArr = doc.map(value => value.tag)
            res.send(tagsArr)
        }
    })
})

module.exports = tags