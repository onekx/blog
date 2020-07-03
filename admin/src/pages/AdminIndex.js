import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { FileAddOutlined, ProfileOutlined, TagOutlined } from '@ant-design/icons'
import '../static/css/AdminIndex.css'
import { Route } from "react-router-dom"
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'
import ModifyArticle from './ModifyArticle'
import DeleteTag from './DeleteTag'

const { Content, Footer, Sider } = Layout

const AdminIndex = (props) => {

    const handleClickArticle = e => {
        if (e.key === 'articleList')
            props.history.push('/index')
        else if (e.key === 'addArticle')
            props.history.push('/index/post')
        else
            props.history.push('/index/tag')
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider>
                <div className="logo">
                    <span>Kx's Blog</span>
                </div>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={['articleList']}
                    mode="inline"
                    onClick={handleClickArticle}
                >
                    <Menu.Item key="articleList">
                        <ProfileOutlined />
                        <span>文章管理</span>
                    </Menu.Item>
                    <Menu.Item key="addArticle">
                        <FileAddOutlined />
                        <span>添加文章</span>
                    </Menu.Item>
                    <Menu.Item key="deleteTag">
                        <TagOutlined />
                        <span>标签管理</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '11px 0' }}>
                        <Breadcrumb.Item>后台管理</Breadcrumb.Item>
                        <Breadcrumb.Item>添加文章</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="operate-desktop">
                        <div>
                            <Route path="/" exact component={ArticleList} />
                            <Route path="/index" exact component={ArticleList} />
                            <Route path="/index/post/" exact component={AddArticle} />
                            <Route path="/index/modify/:id" component={ModifyArticle} />
                            <Route path="/index/tag" component={DeleteTag} />
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>ONEKX.CN</Footer>
            </Layout>
        </Layout>
    )
}

export default AdminIndex
