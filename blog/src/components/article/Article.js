import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                            <Link to={`/detail/${val._id}`}>{val.title}</Link>
                        </header>
                        <div className="article-info">
                            <div className="time">
                                <time>{val.time}</time>
                            </div>
                            <div className="article-category">
                                <Link to={`/archive/${val.tag}`}>{val.tag}</Link>
                            </div>
                        </div>
                        <div className="article-content">
                            <p>{val.desc}</p>
                        </div>
                    </div>
                    <div className="article-footer">
                        <Link to={`/detail/${val._id}`}>阅读全文＞ </Link>
                    </div>
                </article>
            )
        })
        return allArticles
    }

    return (
        <>
            {
                isLoading
                    ? (<div className="loading-text">正在加载中...</div>)
                    : (
                        <div className="container">
                            {renderArticles()}
                        </div>
                    )
            }
        </>
    )
}

export default Article
