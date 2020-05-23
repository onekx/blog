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
        document.querySelector('.line').classList.toggle('hidenLine')
        document.querySelector('.menu').classList.toggle('close')
        document.querySelector('ul').classList.toggle('showUl')
    }

    showLogo = () => {
        const { showLogo } = this.state
        return showLogo ? 'logo' : 'hidenLogo'
    }

    render() {
        return(
            <nav className="header">
                <div className={this.showLogo()}>
                    <a href='http://localhost:3000'>Kx's Blog</a>
                </div>
                <div className="menu" onClick={this.switchState}>
                    <div className="line"></div>
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
}

export default Header
