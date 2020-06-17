var express = require('express')
var app = express()
var bodyParser = require('body-parser')

// 添加bodyParse配置
// 这个设置方便我们在处理Post请求时获取body里面的内容
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 8080

// api中需要的Route
// =============================================================================
var router = express.Router()

// 测试服务是否正常运行
router.use(function (req, res, next) {
    console.log('请求成功')
    next() //make sure we go to the next routes and don`t stop here
})

var Member = require('./models/member')

router.get('/', function (req, res) {
    res.json({ message: '服务器已经启动' })
})

// 这里创建更多的路由

router.route('/members')
    .post(function (req, res) {
        var member = new Member()
        member.name = req.body.name
        member.save(function (err) {
            if (err)
                res.sned(err)
            res.json({ message: 'Member created!' })
        })
    })
    .get(function (req, res) {
        Member.find(function (err, members) {
            if (err)
                res.send(err)
            res.json(members)
        })
    })

router.route('/members/:member_id')
    .get(function (req, res) {
        Member.findById(req.params.member_id, function (err, member) {
            if (err)
                res.send(err)
            res.json(member)
        })
    })
    .put(function (req, res) {
        Member.findById(req.params.member_id, function (err, member) {
            if (err)
                res.send(err)
            member.name = req.body.name
            member.save(function (err) {
                if (err)
                    res.send(err)
                res.json({ message: 'Member updated!' })
            })
        })
    })
    .delete(function (req, res) {
        Member.remove({
            _id: req.params.member_id
        }, function (err, member) {
            if (err)
                res.send(err)
            res.json({ message: 'Successfully deleted! ' })
        })
    })




// 注册路由 -------------------------------
// 所有的接口将以 /api 开头
app.use('/api', router)

// 启动服务
// =============================================================================
var mongoose = require('mongoose')
const member = require('./models/member')
mongoose.connect('mongodb://localhost:27017/bear', function (err) {
    if (err) {
        console.log(err, "数据库连接失败")
        return
    }
    console.log('数据库连接成功')

    app.listen(port, function (err) {
        if (err) {
            console.error('err:', err)
        } else {
            console.info(`===> api server is running at localhost:27017`)
        }
    })
})