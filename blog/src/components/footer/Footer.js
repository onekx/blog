import React from 'react'
import './style.css'

const Footer = () => {
    const hasScrollBar = () => {
        const a = window.innerHeight || document.documentElement.clientHeight
        return document.body.scrollHeight > a
    }

    const whetherToFixFooter = () => {
        const footer = document.querySelector('footer')
        if (hasScrollBar()) {
            footer.classList.remove("fixed-footer")
            footer.classList.remove("hidden-footer")
        }
        else {
            footer.classList.add("fixed-footer")
            footer.classList.remove("hidden-footer")
        }
    }

    window.onload = whetherToFixFooter
    window.onresize = whetherToFixFooter
    
    return (
        <footer className="footer hidden-footer">
            <p>© 2020 Kx's Blog</p>
            <p className="footer-divide"> | </p>
            <a href="http://beian.miit.gov.cn/">蜀ICP备20017413</a>
            <p className="footer-divide hidden-divider"> | </p>
            <a href="http://www.beian.gov.cn/">
                <span>川公网安备 51192302000184</span>
            </a>
        </footer>
    )

}

export default Footer