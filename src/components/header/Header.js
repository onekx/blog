import React, { Component } from 'react'
import './style.css'

class Header extends Component {
    state = {
        showLogo: true,
        showUl: false,
        showLine: true
    }

    switchState = () => {
        const { showLogo, showUl, showLine } = this.state
        this.setState({
            showLogo: !showLogo,
            showUl: !showUl,
            showLine: !showLine
        })
        document.querySelector('.line').classList.toggle('hiden-line')
        document.querySelector('.menu').classList.toggle('close')
        document.querySelector('.nav-list').classList.toggle('show-nav')
    }

    showLogo = () => {
        const { showLogo } = this.state
        return showLogo ? 'logo' : 'hiden-logo'
    }

    render() {
        return(
            <header className="header">
                <div className="header-inner">
                    <div className={this.showLogo()}>
                        <span className="logo-text">
                            <a href='http://localhost:3000'>Kx's Blog</a>
                        </span>
                    </div>
                    <div className="menu" onClick={this.switchState}>
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
}

export default Header
