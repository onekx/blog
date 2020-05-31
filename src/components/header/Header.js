import React, { useState } from 'react'
import './style.css'

const Header = () => {
    const [defaultClass, setClass] = useState({
        showLogo: true,
        showUl: false,
        showLine: true
    })

    const switchState = () => {
        setClass(!defaultClass)
        document.querySelector('.line').classList.toggle('hiden-line')
        document.querySelector('.menu').classList.toggle('close')
        document.querySelector('.nav-list').classList.toggle('show-nav')
    }

    const changeLogo = () => {
        return defaultClass.showLogo ? 'logo' : 'hiden-logo'
    }

    return(
        <header className="header">
            <div className="header-inner">
                <div className={changeLogo()}>
                    <span className="logo-text">
                        <a href='http://localhost:3000'>Kx's Blog</a>
                    </span>
                </div>
                <div className="menu" onClick={()=>switchState()}>
                    <div className="line"></div>
                </div>
                <nav className="nav-list">
                    <ul>
                        <li className="nav-item">
                            <a href='http://localhost:3000'>首页</a>
                        </li>
                        <li className="nav-item">
                            <a href='http://localhost:3000'>归档</a>
                        </li>
                        <li className="nav-item">
                            <a href='http://localhost:3000'>标签</a>
                        </li>
                        <li className="nav-item">
                            <a href='http://localhost:3000'>关于</a>
                        </li>
                    </ul>
                </nav>
            </div>       
        </header>
    )
}

export default Header
