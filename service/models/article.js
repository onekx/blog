const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title: String,
    content: String,
    time: String,
    tag: String,
    desc: String
})

module.exports = mongoose.model('Article', ArticleSchema, 'article')