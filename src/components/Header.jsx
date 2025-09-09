import { useDispatch, useSelector } from "react-redux";
import { setCollapsed } from "../redux/vehicleSlice";

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

const { Header, Sider, Content } = Layout;

const Headers = () => {

    const dispatch = useDispatch();
    const { collapsed } = useSelector((store) => store.vehicle);
    const emsData = JSON.parse(localStorage.getItem("ems_data")) || {};
    console.log(emsData,"emsData")

    return (
        <Header

            style={{
                // background: "#0474BA",
                background: "#1b263b",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 20px",
                color: "#fff",

            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                {collapsed ? (
                    <MenuUnfoldOutlined
                        onClick={() => dispatch(setCollapsed(false))}
                        style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
                    />
                ) : (
                    <MenuFoldOutlined
                        onClick={() => dispatch(setCollapsed(true))}
                        style={{ fontSize: "20px", color: "#fff", cursor: "pointer" }}
                    />
                )}
                <h2 style={{ margin: 0, color: "#fff" }}>Dashboard</h2>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ color: "#fff" }}>{emsData?.first_name} {emsData?.last_name} </span>
                <Avatar icon={<UserOutlined />} />
            </div>
        </Header>
    )
}

export default Headers