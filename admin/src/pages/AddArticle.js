import React, { useState } from 'react'
import marked from 'marked'
import '../static/css/AddArticle.css'
import { Row, Col, Input, Button, DatePicker, message } from 'antd'
import axios from 'axios'

const { TextArea } = Input

const AddArticle = () => {
    const [articleTitle, setArticleTitle] = useState('')                  // 文章标题
    const [articleTag, setArticleTag] = useState('')                      // 文章归类
    const [articleContent, setArticleContent] = useState('')              // markdown 的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容')     // 转换成 html 的内容
    const [introduce, setIntroduce] = useState()                      // 简介内容
    const [showDate, setShowDate] = useState()                            // 发布日期

    marked.setOptions({
        renderer: marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
    })

    // 将输入的 markdown 格式的文章内容转换为 HTML 格式
    const changeContent = (e) => {
        setArticleContent(e.target.value)
        let html = marked(e.target.value)
        setMarkdownContent(html)
    }

    // 发布文章
    const postArticle = () => {
        if (!articleTitle) {
            return message.error('文章标题不能为空')
        } else if (!articleTag) {
            return message.error('文章类别不能为空')
        } else if (!articleContent) {
            return message.error('文章内容不能为空')
        } else if (!introduce) {
            return message.error('文章简介不能为空')
        } else if (!showDate) {
            return message.error('文章发布时间不能为空')
        } else {
            axios.post('http://47.107.240.98:6767/api/article', {
                "title": articleTitle,
                "content": markdownContent,
                "time": showDate,
                "tag": articleTag,
                "desc": introduce
            })
                .then(message.success('文章成功上传！'))
                .catch(err => console.log(err))
        }
    }

    return (
        <>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10} >
                        <Col span={20}>
                            <Input
                                placeholder="文章标题"
                                size="large"
                                onChange={(e) => setArticleTitle(e.target.value)}
                            />
                        </Col>
                        <Col span={4}>
                            <Input
                                placeholder="文章归类"
                                size="large"
                                onChange={(e) => setArticleTag(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={10} >
                        <Col span={12}>
                            <TextArea
                                value={articleContent}
                                className="markdown-content"
                                rows={35}
                                placeholder="文章内容"
                                onChange={changeContent}
                                onPressEnter={changeContent}
                            />
                        </Col>
                        <Col span={12}>
                            <div className="show-html" dangerouslySetInnerHTML={{ __html: markdownContent }} ></div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <div className="post-article-btn">
                                <Button type="primary" size="large" onClick={postArticle}>
                                    发布文章
                                </Button>
                            </div>
                            <br />
                        </Col>
                        <Col span={24}>
                            <TextArea
                                rows={4}
                                placeholder="文章简介"
                                value={introduce}
                                onChange={e => setIntroduce(e.target.value)}
                                onPressEnter={e => setIntroduce(e.target.value)}
                            />
                            <br /><br />
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker
                                    placeholder="发布日期"
                                    size="large"
                                    onChange={(data, dataString) => setShowDate(dataString)}
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default AddArticle
