const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title: String,
    content: String,
    time: String,
    tags: Array,
    desc: String
})

module.exports = mongoose.model('Article', ArticleSchema, 'article')