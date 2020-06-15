import React from 'react'
import './style.css'

const Detail = () => {
    return (
        <div className="container">
            <div className="content">
                <header>
                    <h1 className="article-title">react-native 软件反馈收集系统</h1>
                    <div className="article-info">
                        <div className="time">
                            <time>2020-6-15</time>
                        </div>
                        <div className="article-category">
                            <a href="/">React-Native</a>
                        </div>
                    </div>
                </header>
                <div>
                    <p>文章内容</p>
                </div>
            </div>
        </div>
    )
}

export default Detail
