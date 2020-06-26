import React, { useState, useEffect } from 'react'
import '../static/css/ArticleList.css'
import { List, Row, Col, Modal, message, Button, Spin } from 'antd'
import axios from 'axios'

const { confirm } = Modal

const ArticleList = (props) => {
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getArticles()
    }, [])

    // 获取所有文章
    const getArticles = () => {
        axios.get('http://localhost:6767/admin/article')
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
                axios.delete(`http://localhost:6767/admin/article/${id}`)
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
    const toModify = (id) => props.history.push(`/index/modify/${id}`)

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

}

export default ArticleList