const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tagsSchema = new Schema({
    tag: {
        type: String,
        required: true,
        unique: true,
        sparse: true
    }
})

module.exports = mongoose.model('TagsSchema', tagsSchema, 'tags')