/*
*  此文件用于管理文章 发布、删除、修改
*/

const express = require('express')
const post = express.Router()

const Article = require('../models/article')
const Archive = require('../models/Archive')

post.route('/admin/article')
    .post((req, res) => {
        const article = new Article()
        const archive = new Archive()
        article.title = req.body.title
        article.content = req.body.content
        article.time = req.body.time
        article.tag = req.body.tag
        archive.tag = req.body.tag
        article.desc = req.body.desc
        archive.save(err => {
            if (err)
                console.log(err)
        })
        article.save((err) => {
            if (err)
                res.send(err)
            else res.json({ ok: true })
        })
    })
    .get((req, res) => {
        Article.find((err, doc) => {
            if (err) res.send(err)
            else res.send(doc)
        })
    })

post.route('/admin/article/:id')
    .get((req, res) => {
        Article.findById(req.params.id, (err, doc) => {
            if (err) res.send(err)
            else res.send(doc)
        })
    })
    .delete((req, res) => {
        Article.deleteOne({"_id": req.params.id}, err => {
            if (err) res.send(err)
            else res.send('文章已删除')
        })
    })

post.get('/admin/articles/:tag', (req, res) => {
    Article.find({ "tag": req.params.tag }, (err, doc) => {
        if (err) res.send(err)
        else res.send(doc)
    })
})

module.exports = post
