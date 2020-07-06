/*
*  获取所有的文章类别
*/

const express = require('express')
const tags = express.Router()

const Archive = require('../models/Archive')
const auth = require('../middleware/auth')

tags.get('/api/tags', (req, res) => {
    Archive.find((err, doc) => {
        if (err) res.send(err)
        else {
            const tagsArr = doc.map(value => value.tag)
            res.send(tagsArr)
        }
    })
})

tags.delete('/api/tag/:tag', auth, (req, res) => {
    Archive.deleteOne({ "tag": req.params.tag }, err => {
        if (err) res.send(err)
        else res.send('删除成功')
    })
})

module.exports = tags