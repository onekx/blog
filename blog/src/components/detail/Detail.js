import React, { useState, useEffect } from 'react'
import './style.css'
import marked from 'marked'
import hljs from "highlight.js"
import 'highlight.js/styles/atelier-forest-light.css'
import axios from 'axios'
import { useParams, Link } from "react-router-dom"


marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: (code) => {
        return hljs.highlightAuto(code).value
    }
})

const Detail = () => {
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [content, setContent] = useState('')

    const { id } = useParams()

    let html = marked(content)

    useEffect(() => {
        setIsLoading(true)
        axios.get(`http://localhost:6767/admin/article/${id}`)
            .then(res => {
                setIsLoading(false)
                setArticle(res.data)
                setContent(res.data.content)
            })
            .catch(err => {
                setIsLoading(false)
                console.log(err)
            })
    }, [id])

    return (
        <>
            {
                isLoading
                    ? (<div className="loading-text">正在加载中...</div >)
                    : (
                        <div className="container">
                            <div className="content">
                                <header>
                                    <h1 className="article-title">{article.title}</h1>
                                    <div className="article-info">
                                        <div className="time">
                                            <time>{article.time}</time>
                                        </div>
                                        <div className="article-category">
                                            <Link to="/">{article.tag}</Link>
                                        </div>
                                    </div>
                                </header>
                                <div className="article-content" dangerouslySetInnerHTML={{ __html: html }}></div>
                            </div>
                        </div>
                    )
            }
        </>

    )
}

export default Detail
