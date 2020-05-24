import React, { Component } from 'react'
import './style.css'

export default class ArticleList extends Component {
    render() {
        return(
            <div className="article-list">
                <ul>
                    <li>
                        <div className="article">
                            <h2><a href="localhost:3000">react生命周期</a></h2>
                            <p>关于react的生命周期关于react的生命周期关于react的生命周期</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
