import React from 'react'
import './style.css'

const Footer = () => {
    return (
        <footer className="footer fixed-footer">
            <p>© 2020 Kx's Blog</p>
            <p className="footer-divide"> | </p>
            <a href="http://beian.miit.gov.cn/">蜀ICP备20017413</a>
            <p className="footer-divide"> | </p>
            <a href="http://www.beian.gov.cn/">
                <image src="../img/beian.png" alt="beian" className="beian-img" />
                <span>川公网安备 号码</span>
            </a>
        </footer>
    )
}

export default Footer