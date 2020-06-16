import React, { Component } from 'react'
import './style.css'

class Footer extends Component {
    resetFooter = () => {
        setTimeout(() => {
            const allHeight = document.getElementsByClassName('container')[0].offsetHeight + 250
            const winHeight = window.innerHeight
            const footer = document.querySelector('footer')
            if (winHeight > allHeight) {
                footer.classList.add("fixed-footer")
                footer.classList.remove("hidden-footer")
            } else {
                footer.classList.remove("fixed-footer")
                footer.classList.remove("hidden-footer")
            }
        })
    }

    componentDidMount() {
        this.resetFooter()
    }

    componentWillReceiveProps() {
        this.resetFooter()
    }

    render() {
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
}

export default Footer