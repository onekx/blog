import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">ONEKX.CN</Link>
            </div>
            <div className="nav">
                <Link to="/">首页</Link>
                <Link to="/archive">归类</Link>
                <Link to="/about">关于</Link>
            </div>
        </header>
    )
}

export default Header
