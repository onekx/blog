import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Article = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)

    useEffect(() => {
        setIsLoading(true)
        pageCount()
        axios.get(`http://47.107.240.98:6767/api/article?page=${page}`)
            .then(res => {
                setArticles(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [page])

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

    // 设置最大页码数
    const pageCount = async () => {
        const { data } = await axios.get('http://47.107.240.98:6767/api/post/pagecount')
        setMaxPage(data.maxPage)
    }

    const prePage = () => {
        if (page === 1) return
        else setPage(page - 1)
    }

    const lastPage = () => {
        if (page === maxPage) return
        else setPage(page + 1)
    }

    return (
        <>
            {
                isLoading
                    ? (<div className="loading-text">正在加载中...</div>)
                    : (
                        <div className="container">
                            {renderArticles()}
                            <div className="page-count">
                                <div className="page-btn" onClick={() => prePage()}>
                                    上一页
                                </div>
                                <div className="page-num">{page} / {maxPage}</div>
                                <div className="page-btn" onClick={() => lastPage()}>
                                    下一页
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default Article
