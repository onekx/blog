import React, { useState, useEffect } from 'react'
import './style.css'
import axios from 'axios'

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
                <div key={index} className="classify-btn">
                    <a href="/">{tag}</a>
                </div>
            )
        })
        return allTags
    }

    return (
        <div className="container">
            {isLoading
                ? (<div>加载中</div>)
                : (
                    <div className="classify-main">
                        {renderTags()}
                    </div>
                )
            }
        </div>
    )
}

export default Archive
