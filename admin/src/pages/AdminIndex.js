import React, { useState } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { FileAddOutlined, FileExcelOutlined, FileSyncOutlined } from '@ant-design/icons'
import '../static/css/AdminIndex.css'
import { Route } from "react-router-dom"
import AddArticle from './AddArticle'

const { Content, Footer, Sider } = Layout

const AdminIndex = () => {
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
                    <Menu.Item key="2">
                        <FileSyncOutlined />
                        <span>修改文章</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <FileExcelOutlined />
                        <span>删除文章</span>
                    </Menu.Item>
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
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>ONEKX.CN</Footer>
            </Layout>
        </Layout>
    )
}

export default AdminIndex
