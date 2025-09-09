// import React, { useState } from "react";
// import { Layout, Menu } from "antd";
// import {
//     HomeOutlined,
//     UserOutlined,
//     SettingOutlined,
//     LogoutOutlined,
// } from "@ant-design/icons";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { setCollapsed } from "../redux/vehicleSlice";

// const { Sider } = Layout;

// const Sidebar = () => {
//     const dispatch = useDispatch();
//     const { collapsed } = useSelector((store) => store.vehicle);
//     const navigate = useNavigate();

//     const menuItems = [
//         { key: "1", icon: <HomeOutlined />, label: <Link to="/admin">Dealer Master</Link> },


//     ];



//     return (
//         <Sider
//             trigger={null}
//             collapsible
//             collapsed={collapsed}
//             onCollapse={(value) => dispatch(setCollapsed(value))}

//             style={{
//                 //   background: "#000",
//                  background:"#0d1b2a",
//                 margin: 0,   // ✅ remove extra space
//                 padding: 0,  // ✅ remove extra padding
//             }}
//         >
//             <div
//                 style={{
//                     height: 64,
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     color: "#fff",
//                     fontWeight: "bold",
//                     fontSize: "18px",
//                     // background: "#0474BA",
//                     background:"#1b263b"
//                 }}
//             >
//                 {collapsed ? "A" : "Admin"}
//             </div>

//             <Menu
//                 theme="dark"
//                 mode="inline"
//                 items={menuItems}
//                 defaultSelectedKeys={["1"]}
//                 style={{
//                     padding: "15px",
//                     background:"#0d1b2a"
//                 }}

//             />
//         </Sider>
//     );
// };

// export default Sidebar;


import React from "react";
import { Layout, Menu } from "antd";
import {
    HomeOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCollapsed, setloading } from "../redux/vehicleSlice";

const { Sider } = Layout;

const Sidebar = () => {
    const dispatch = useDispatch();
    const { collapsed } = useSelector((store) => store.vehicle);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("ems_token"); // ✅ clear token
        navigate("/login"); // ✅ redirect to login
        dispatch(setloading(false))
    };

    const menuItems = [
        { key: "1", icon: <HomeOutlined />, label: <Link to="/admin">Dealer Master</Link> },
    ];

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => dispatch(setCollapsed(value))}
            style={{
                background: "#0d1b2a",
                display: "flex",
                flexDirection: "column",
                height: "100vh", // full page height
            }}
        >
            {/* Top section (logo + menu) */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Logo */}
                <div
                    style={{
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: "18px",
                        background: "#1b263b",
                    }}
                >
                    {collapsed ? "A" : "Admin"}
                </div>

                {/* Menu grows and pushes logout down */}
                <Menu
                    theme="dark"
                    mode="inline"
                    items={menuItems}
                    defaultSelectedKeys={["1"]}
                    style={{
                        padding: "15px",
                        background: "#0d1b2a",
                        flex: 1, // ✅ pushes logout down
                        overflowY: "auto", // scroll menu if content is long
                    }}
                />
            </div>

            {/* Logout button (always bottom) */}
            <div
                style={{
                    padding: "15px",
                    background: "#1b263b",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop:"77vh"
                }}
                onClick={handleLogout}
            >
                <LogoutOutlined />
                {!collapsed && "Logout"}
            </div>
        </Sider>


    );
};

export default Sidebar;
