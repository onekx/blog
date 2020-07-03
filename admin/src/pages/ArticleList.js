import React, { useState, useEffect } from 'react'
import '../static/css/ArticleList.css'
import { List, Row, Col, Modal, message, Button, Spin } from 'antd'
import axios from 'axios'

const { confirm } = Modal

const ArticleList = (props) => {
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const st = await axios.get('http://47.107.240.98:6767/api/status', { withCredentials: true })
                if(st.data.ok) {
                    setIsLoading(true)
                    getArticles()
                } else props.history.push('/login')
            } catch(err) {
                throw err
            }
        })() 
    }, [])

    // 获取所有文章
    const getArticles = () => {
        axios.get('http://47.107.240.98:6767/api/article', { withCredentials: true })
            .then(res => {
                setIsLoading(false)
                setList(res.data)
            })
            .catch(err => console.log(err))
    }

    // 删除文章
    const deleteArticle = (id) => {
        confirm({
            content: '确定删除文章？',
            onOk() {
                axios.delete(`http://47.107.240.98:6767/api/article/${id}`)
                    .then(res => {
                        message.success(res.data)
                        getArticles()
                    })
                    .catch(err => console.log(err))
            },
            onCancel() { }
        })
    }

    // 跳转到修改文章界面
    const toModify = (id) => props.history.push(`/modify/${id}`)

    // if (status) {
    //     setIsLoading(true)
    //     getArticles()
    return (
        <>
            {
                isLoading
                    ? (
                        <div className="loading">
                            <Spin />
                        </div>
                    )
                    : (
                        <List
                            header={
                                <Row className="list-div">
                                    <Col span={9}>
                                        <b>标题</b>
                                    </Col>
                                    <Col span={5}>
                                        <b>类别</b>
                                    </Col>
                                    <Col span={5}>
                                        <b>发布时间</b>
                                    </Col>
                                    <Col span={5}>
                                        <b className="operating">操作</b>
                                    </Col>
                                </Row>
                            }
                            bordered
                            dataSource={list}
                            renderItem={item => (
                                <List.Item>
                                    <Row className="list-div">
                                        <Col span={9}>
                                            <b>{item.title}</b>
                                        </Col>
                                        <Col span={5}>
                                            <b>{item.tag}</b>
                                        </Col>
                                        <Col span={5}>
                                            <b>{item.time}</b>
                                        </Col>
                                        <Col span={5}>
                                            <Button type="primary" onClick={() => toModify(item._id)}>修改</Button>&nbsp;
                                                <Button type="primary" onClick={() => deleteArticle(item._id)}>删除 </Button>
                                        </Col>
                                    </Row>
                                </List.Item>
                            )}
                        />
                    )
            }
        </>
    )
    // } else {
    //     return <Redirect to="/login" />
    // }
}

export default ArticleList