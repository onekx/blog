/*
*  此文件用于管理文章 发布、删除、修改
*/

const express = require('express')
const post = express.Router()

const Article = require('../models/article')

post.route('/admin/article')
    .post((req, res) => {
        const article = new Article()
        article.title = req.body.title
        article.content = req.body.content
        article.time = req.body.time
        article.tags = req.body.tags
        article.desc = req.body.desc
        article.save((err) => {
            if (err)
                res.send(err)
            else res.json({ ok: true })
        })
    })

module.exports = post
