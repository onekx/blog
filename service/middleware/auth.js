const jwt = require('jsonwebtoken')
const Administrator = require('../models/administrator')

// 验证 token
const auth = async (req, res, next) => {
    try {
        const raw = req.headers.authorization
        const { id } = jwt.verify(raw, '签名')
        req.user = await Administrator.findById(id)
        next()
    } catch (err) {
        res.send('验证错误')
    }
}

module.exports = auth
