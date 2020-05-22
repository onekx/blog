import React from 'react'
import './style.css'

const Header = () => {
    return(
        <nav className="header">
            <div className="logo">
                <a href='http://localhost:3000'>Kx's Blog</a>
            </div>
            <ul>
                <li>
                    <a href='http://localhost:3000'>首页</a>
                </li>
                <li>
                    <a href='http://localhost:3000'>归档</a>
                </li>
                <li>
                    <a href='http://localhost:3000'>标签</a>
                </li>
                <li>
                    <a href='http://localhost:3000'>关于</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header
