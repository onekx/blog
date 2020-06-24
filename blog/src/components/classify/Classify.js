import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Classify = () => {
    const [isLoading, setIsloading] = useState(false)
    const [articles, setArticles] = useState([])

    const { tag } = useParams()

    useEffect(() => {
        setIsloading(true)
        axios.get(`http://localhost:6767/admin/articles/${tag}`)
            .then(res => {
                setArticles(res.data)
                setIsloading(false)
            })
            .catch(err => console.log(err))
    }, [tag])

    // 渲染包含该 tag 的所有文章标题
    const renderTitles = () => {
        const titles = []
        articles.forEach((val, index) => {
            titles.push(
                <a key={index} href={`/detail/${val._id}`}>{val.title}</a>
            )
        })
        return titles
    }

    return (
        <div className="container">
            <div className="classify-main">
                <div className="classify-header">
                    <p>{tag}</p>
                </div>
                <div className="classify-content">
                    {
                        isLoading
                            ? (<div className="loading-text">正在加载中...</div>)
                            : (
                                <>
                                    {renderTitles()}
                                </>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Classify
