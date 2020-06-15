import React from 'react'
import './style.css'

const About = () => {
    return (
        <div className="container">
            <div className="about-content">
                <div className="about-text">
                    <strong>关于博客：</strong>
                    <p>为了整理笔记，记录一些学习过程中遇到的问题。</p>
                </div>
                <div className="about-text">
                    <strong>关于我：</strong>
                    <p>一名爱好前端的在校大学生。</p>
                </div>
                <div className="about-text">
                    <strong>联系：</strong>
                    <p>kongxinone@163.com</p>
                </div>
            </div>
        </div>
    )
}

export default About
