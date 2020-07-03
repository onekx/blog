import React, { useState } from 'react'
import { Card, Input, Button, Spin, message } from 'antd'
import { KeyOutlined, UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import '../static/css/Login.css'
import axios from 'axios'

const Login = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const checkLogin = () => {
        setIsLoading(true)
        axios.post('http://47.107.240.98:6767/api/login', {
            "name": userName,
            "password": password
        }, { withCredentials: true })
            .then(res => {
                setIsLoading(false)
                res.data.ok
                    ? props.history.push('/index')
                    : message.error('用户名或密码错误', 2)
            })
            .catch(err => {
                message.error('登录失败', 2)
                console.log(err)
                setIsLoading(false)
            })
    }

    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="Kx's Blog System" bordered={true} >
                    <Input
                        id="userName"
                        size="large"
                        placeholder="输入用户名"
                        prefix={<UserOutlined />}
                        onChange={(e) => { setUserName(e.target.value) }}
                    />
                    <br /><br />
                    <Input.Password
                        id="password"
                        size="large"
                        placeholder="输入密码"
                        prefix={<KeyOutlined />}
                        onChange={(e) => { setPassword(e.target.value) }}
                        onPressEnter={checkLogin}
                    />
                    <br /><br />
                    <Button type="primary" size="large" block onClick={checkLogin} className="login-btn" > 登录 </Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login
