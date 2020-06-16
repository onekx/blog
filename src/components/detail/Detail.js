import React, { Component } from 'react'
import './style.css'
import marked from 'marked'
import hljs from "highlight.js"
import 'highlight.js/styles/atelier-forest-light.css'

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: function (code) {
        return hljs.highlightAuto(code).value
    }
})

let html = marked("### 对Promise的理解:\n" +
    "js中使用回调函数进行事件处理，如果嵌套多层回调函数，将会陷入 callback hell（回调地狱），使代码难以理解以及维护，例如：\n" +
    "```javascript\n" +
    "method1(function(err, result) {\n    if (err) {\n        throw err;\n    }" +
    "    method2(function(err, result) {\n        if (err) {\n            throw err;\n" +
    "        } \n        method3(function(err, result) {\n            if (err) {\n                throw err;\n" +
    "            } \n            method4(function(err, result) {\n                if (err) {\n" +
    "                    throw err;\n                }\n                method5(result);\n            });\n        });\n" +
    "    });\n});\n```\n" +
    "**then的用法：**\n" +
    "> 引用内容\n" +
    "*倾斜文字*\n" +
    ""
)

class Detail extends Component {
    render() {
        return (
            <div className="container">
                <div className="content">
                    <header>
                        <h1 className="article-title">react-native 软件反馈收集系统</h1>
                        <div className="article-info">
                            <div className="time">
                                <time>2020-6-15</time>
                            </div>
                            <div className="article-category">
                                <a href="/">React-Native</a>
                            </div>
                        </div>
                    </header>
                    <div className="article-content" dangerouslySetInnerHTML={{ __html: html }}></div>
                </div>
            </div>
        )
    }
}

export default Detail
