import React from 'react'
import './style.css'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/">ONEKX.CN</a>
            </div>
            <div className="nav">
                <a href="/">首页</a>
                <a href="/classify">归类</a>
                <a href="/about">关于</a>
            </div>
        </header>
    )
}

export default Header
