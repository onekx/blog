import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'

const Article = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get('http://localhost:6767/admin/article')
            .then(res => {
                setArticles(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [])

    // 主页渲染文章
    const renderArticles = () => {
        const allArticles = []
        articles.forEach((val, index) => {
            allArticles.push(
                <article key={index} className="article">
                    <div className="article-body">
                        <header className="article-title">
                            <a href="/">{val.title}</a>
                        </header>
                        <div className="article-info">
                            <div className="time">
                                <time>{val.time}</time>
                            </div>
                            <div className="article-category">
                                <a href="/">{val.tag}</a>
                            </div>
                        </div>
                        <div className="article-content">
                            <p>{val.desc}</p>
                        </div>
                    </div>
                    <div className="article-footer">
                        <a href="/detail">阅读全文＞ </a>
                    </div>
                </article>
            )
        })
        return allArticles
    }

    return (
        <div className="container">
            {
                isLoading
                    ? (<div>加载中</div>)
                    : (
                        <>
                            {renderArticles()}
                        </>
                    )
            }
        </div>
    )
}

export default Article
