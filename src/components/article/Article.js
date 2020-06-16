import React from 'react'
import './style.css'

const Article = () => {
    return (
        <div className="container">
            <article className="article">
                <div className="article-body">
                    <header className="article-title">
                        <a href="/">React 生命周期函数</a>
                    </header>
                    <div className="article-info">
                        <div className="time">
                            <time>2020-6-12</time>
                        </div>
                        <div className="article-category">
                            <a href="/">React</a>
                        </div>
                    </div>
                    <div className="article-content">
                        <p>属性用于设置多行元素的空间量，如多行文本的间距。
                        对于块级元素，它指定元素行盒的最小高度。
                        对于非替代的inline元素，它用于计算行盒的高度
                        </p>
                    </div>
                </div>
                <div className="article-footer">
                    <a href="/detail">阅读全文＞ </a>
                </div>
            </article>
        </div>
    )
}

export default Article
