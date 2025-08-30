import React from "react";
import { Menu, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";
import "./Navbar.css";
import Logo from '../assets/ems_logo.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="navbar-container">
      {/* Left Logo */}
      <div className="logo" onClick={() => navigate("/")} style={{cursor:"pointer"}}>
        <img src={Logo} alt="EMS Logo" />
      </div>

      {/* Right Menu */}
      <div className="menu-container">
        <Menu
          mode="horizontal"
          selectable={false}
          overflowedIndicator={null}
          className="menu"
        >
          <Menu.Item key="dealer-locator" onClick={() => navigate("/dealerLocator")}>Dealer Locator</Menu.Item>
          <Menu.Item key="become-dealer" onClick={() => navigate("/dealer")}>Become a Dealer</Menu.Item>

          <Menu.Item key="contact-us" onClick={() => navigate("/contact")}>Contact Us</Menu.Item>

        </Menu>

        <Button
          type="primary"
          shape="round"
          icon={<RightOutlined />}
          className="enquire-btn"
          onClick={() => navigate("/enquire")}
        >
          Enquire Now
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
