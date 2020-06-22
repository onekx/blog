var mongoose = require('mongoose')
var Schema = mongoose.Schema

var AdministratorSchema = new Schema({
    name: String,
    password: String
})

module.exports = mongoose.model('Administrator', AdministratorSchema, 'administrator')