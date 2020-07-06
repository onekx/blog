const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdministratorSchema = new Schema({
    name: { type: String, unique: true },
    password: {
        type: String,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        }
    }
})

module.exports = mongoose.model('Administrator', AdministratorSchema, 'administrator')