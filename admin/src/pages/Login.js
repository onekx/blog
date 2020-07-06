import React, { useState } from 'react'
import { Card, Input, Button, Spin, message } from 'antd'
import { KeyOutlined, UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import '../static/css/Login.css'
import request from '../api/Api'

const Login = (props) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const checkLogin = async () => {
        setIsLoading(true)
        try {
            const res = await request({
                method: 'post',
                url: '/login',
                data: {
                    "name": userName,
                    "password": password
                }
            })
            setIsLoading(false)
            window.sessionStorage.setItem("token", res.data.token)
            props.history.push('/index')
        } catch (err) {
            message.error('登录失败', 2)
            setIsLoading(false)
            throw err
        }
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
