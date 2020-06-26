import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Archive = () => {
    const [tags, setTags] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        axios.get('http://localhost:6767/admin/tags')
            .then(res => {
                setTags(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }, [])

    // 渲染已有的所有标签
    const renderTags = () => {
        const allTags = []
        tags.forEach((tag, index) => {
            allTags.push(
                <div key={index} className="archive-btn">
                    <Link to={`/archive/${tag}`}>{tag}</Link>
                </div>
            )
        })
        return allTags
    }

    return (
        <>
            {
                isLoading
                    ? (<div className="loading-text"> 正在加载中...</div >)
                    : (
                        <div className="container">
                            <div className="archive-main">
                                {renderTags()}
                            </div>
                        </div>
                    )
            }
        </>

    )
}

export default Archive
