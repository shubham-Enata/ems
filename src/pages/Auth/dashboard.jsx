

import React, { useState } from "react";
import { Layout, Menu, Avatar } from "antd";
import {
    HomeOutlined,
    ClockCircleOutlined,
    ArrowRightOutlined,
    RadarChartOutlined,
    UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Headers from "../../components/Header";

const { Header, Sider, Content } = Layout;

const DashboardLayout = () => {



    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sidebar />
            <Layout>
                <Headers />
                <Content style={{
                    margin: 0,
                    padding: 20,
                    background: "#f5f6fa",
                    minHeight: "calc(100vh - 64px)",
                }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardLayout;

