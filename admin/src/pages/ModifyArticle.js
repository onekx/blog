import React, { useState, useEffect } from 'react'
import turndown from 'turndown'
import { useParams } from 'react-router-dom'
import marked from 'marked'
import '../static/css/AddArticle.css'
import { Row, Col, Input, Button, DatePicker, message, Spin } from 'antd'
import request from '../api/Api'

const { TextArea } = Input

const ModifyArticle = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [articleTitle, setArticleTitle] = useState('')                  // 文章标题
    const [articleTag, setArticleTag] = useState('')                      // 文章归类
    const [articleContent, setArticleContent] = useState('')              // markdown 的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容')     // 转换成 html 的内容
    const [introduce, setIntroduce] = useState('')                        // 简介内容
    const [showDate, setShowDate] = useState('')                          // 发布日期

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

    const { id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        request({ url: `/article/${id}` })
            .then(res => {
                const turndownService = new turndown()
                const markdown = turndownService.turndown(res.data.content)
                setArticleTitle(res.data.title)
                setArticleTag(res.data.tag)
                setArticleContent(markdown)
                setIntroduce(res.data.desc)
                setShowDate(res.data.time)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [id])

    // 将输入的 markdown 格式的文章内容转换为 HTML 格式
    const changeContent = (e) => {
        setArticleContent(e.target.value)
        let html = marked(e.target.value)
        setMarkdownContent(html)
    }

    // 确认修改文章
    const confirmModify = async () => {
        const data = {
            "title": articleTitle,
            "content": markdownContent,
            "time": showDate,
            "tag": articleTag,
            "desc": introduce
        }
        try {
            const res = await request({ method: 'put', url: `/article/${id}`, data })
            message.success('修改成功')
        } catch (err) {
            message.error('出错了')
            throw err
        }
    }

    return (
        <>
            {
                isLoading
                    ? (<><Spin /></>)
                    : (
                        <Row gutter={5}>
                            <Col span={18}>
                                <Row gutter={10} >
                                    <Col span={20}>
                                        <Input
                                            value={articleTitle}
                                            placeholder="文章标题"
                                            size="large"
                                            onChange={e => setArticleTitle(e.target.value)}
                                        />
                                    </Col>
                                    <Col span={4}>
                                        <Input
                                            value={articleTag}
                                            placeholder="文章类别"
                                            size="large"
                                            onChange={e => setArticleTag(e.target.value)}
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
                                            <Button type="primary" size="large" onClick={confirmModify}>
                                                修改文章
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
                                                placeholder={showDate}
                                                size="large"
                                                onChange={(data, dataString) => setShowDate(dataString)}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    )
            }

        </>
    )
}

export default ModifyArticle
