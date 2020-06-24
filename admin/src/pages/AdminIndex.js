import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { FileAddOutlined } from '@ant-design/icons'
import '../static/css/AdminIndex.css'
import { Route } from "react-router-dom"
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'

const { Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const AdminIndex = (props) => {

    const handleClickArticle = e => {
        console.log(e.item.props)
        if (e.key === 'addArticle')
            props.history.push('/index/add')
        else
            props.history.push('/index/list')
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider>
                <div className="logo">
                    <span>Kx's Blog</span>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <FileAddOutlined />
                        <span>添加文章</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        onClick={handleClickArticle}
                        title={
                            <span>
                                <FileAddOutlined />
                                <span>文章管理</span>
                            </span>
                        }
                    >
                        <Menu.Item key="addArticle">添加文章</Menu.Item>
                        <Menu.Item key="articleList">文章列表</Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '11px 0' }}>
                        <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>添加文章</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                        <div>
                            <Route path="/index/" exact component={AddArticle} />
                            <Route path="/index/add/" exact component={AddArticle} />
                            <Route path="/index/add/:id" exact component={AddArticle} />
                            <Route path="/index/list/" component={ArticleList} />
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>ONEKX.CN</Footer>
            </Layout>
        </Layout>
    )
}

export default AdminIndex
