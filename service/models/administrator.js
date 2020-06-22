const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdministratorSchema = new Schema({
    name: String,
    password: String
})

module.exports = mongoose.model('Administrator', AdministratorSchema, 'administrator')