import React, { useState, useEffect } from 'react'
import { List, Row, Col, message, Button, Spin } from 'antd'
import request from '../api/Api'

const DeleteTag = () => {
    const [tags, setTags] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getTags()
    }, [])

    // 获取所有标签
    const getTags = async () => {
        try {
            const res = await request({ url: '/tags' })
            setTags(res.data)
            setIsLoading(false)
        } catch (err) {
            throw err
        }
    }

    // 删除标签
    const deleteTag = async (tag) => {
        try {
            const res = await request({
                method: 'delete',
                url: `/tag/${tag}`
            })
            message.success(res.data)
            getTags()
        } catch (err) {
            message.error('删除失败')
            throw err
        }
    }

    return (
        <>
            {
                isLoading
                    ? (
                        <>
                            <Spin />
                        </>
                    )
                    : (
                        <List
                            header={
                                <Row className="list-div">
                                    <Col span={12}>
                                        <b>标签</b>
                                    </Col>
                                    <Col span={12}>
                                        <b>操作</b>
                                    </Col>
                                </Row>
                            }
                            bordered
                            dataSource={tags}
                            renderItem={item => (
                                <List.Item>
                                    <Row className="list-div">
                                        <Col span={12}>
                                            <b>{item}</b>
                                        </Col>
                                        <Col span={12}>
                                            <Button type="primary" onClick={() => deleteTag(item)}>删除 </Button>
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

export default DeleteTag
