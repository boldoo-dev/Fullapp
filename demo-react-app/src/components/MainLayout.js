import React, { useState } from 'react';
import {
    DesktopOutlined,
    PieChartOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { DemoPage1 } from './DemoPage1';
import { DemoPage2 } from './DemoPage2';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Demo page 1', 'demoPage1', <PieChartOutlined />),
    getItem('Demo Page 2', 'demoPage2', <DesktopOutlined />),
];
export const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate();

    const getContent = () => {
        return <Routes>
            <Route path='/demoPage1' element={<DemoPage1 />} />
            <Route path='/demoPage2' element={<DemoPage2 />} />
        </Routes>
    }

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['demoPage1']} mode="inline" items={items} 
                onClick={(event) => navigate(event.key)}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                />
                <Content
                    style={{
                        margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    {getContent()}
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};