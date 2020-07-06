/*
*  此文件用于管理文章 发布、删除、修改
*/

const express = require('express')
const post = express.Router()

const Article = require('../models/article')
const Archive = require('../models/Archive')
const auth = require('../middleware/auth')

post.route('/api/article')
    .post(auth, (req, res) => {
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
                res.send(err)
        })
        article.save((err) => {
            if (err)
                res.send(err)
            else res.json({ ok: true })
        })
    })
    .get(auth, (req, res) => {
        Article.find((err, doc) => {
            if (err) res.send(err)
            else res.send(doc)
        }).sort({ time: -1 })
    })

post.route('/api/article/:id')
    .get(auth, (req, res) => {
        Article.findById(req.params.id, (err, doc) => {
            if (err) res.send(err)
            else res.send(doc)
        })
    })
    .delete(auth, (req, res) => {
        Article.deleteOne({ "_id": req.params.id }, err => {
            if (err) res.send(err)
            else res.send('文章已删除')
        })
    })
    .put(auth, (req, res) => {
        Article.updateOne({ "_id": req.params.id }, {
            $set: {
                "title": req.body.title,
                "time": req.body.time,
                "content": req.body.content,
                "desc": req.body.desc,
                "tag": req.body.tag
            }
        }, err => {
            if (err) res.send(err)
            else res.send('文章已更新')
        })
    })

post.get('/api/articles/:tag', auth, (req, res) => {
    Article.find({ "tag": req.params.tag }, (err, doc) => {
        if (err) res.send(err)
        else res.send(doc)
    })
})

module.exports = post
