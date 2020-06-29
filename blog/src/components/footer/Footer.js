import React from 'react'
import './style.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2020 ONEKX</p>
                <p className="footer-divide"> | </p>
                <a href="http://beian.miit.gov.cn/">蜀ICP备20017413</a>
                <p className="footer-divide hidden-divider"> | </p>
                <a href="http://www.beian.gov.cn/">
                    <img src="./beian.png" alt="备案" className="beian-img" />
                    <span>川公网安备 51192302000184</span>
                </a>
            </div>
        </footer>
    )
}

export default Footer