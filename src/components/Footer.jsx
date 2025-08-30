import React from "react";
import { Row, Col } from "antd";
import {
    FacebookOutlined,
    LinkedinOutlined,
    InstagramOutlined,
    YoutubeOutlined,
    PhoneOutlined,
    MailOutlined,
} from "@ant-design/icons";
import Logo from '../assets/eMS.png'

const Footer = () => {
    return (
        <footer
            style={{
                background: "linear-gradient(180deg, #024a86 0%, #0276d1 100%)",
                color: "#fff",
                padding: "20px",
            }}
        >
            <div
                style={{
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                    padding: "10px",
                    borderBottom: "1px solid #fff",
                }}
            >
                <img
                    src={Logo}
                    alt="EMS Logo"
                    style={{ maxHeight: "60px", objectFit: "contain" }}
                />
            </div>

            <Row gutter={[24, 24]}>
                {/* Vehicles */}
                <Col xs={24} md={6}>
                    <h4 style={{ color: "#fff" }}>VEHICLES</h4>
                    <p>Sprint Jr</p>
                    <p>Sprint Loader Jr</p>
                    <p>Cammando Jr</p>
                </Col>

                {/* Links */}
                <Col xs={24} md={6}>
                    <h4 style={{ color: "#fff" }}>Contact Us</h4>
                    <p>About Us</p>
                    <p>Media Gallery</p>
                </Col>

                {/* Pune Office */}
                <Col xs={24} md={6}>
                    <h4 style={{ color: "#fff" }}>PUNE OFFICE</h4>
                    <p>
                        306, Konark Plaza, Kesnand Road, Wagholi, Pune – 412207 India,
                        Maharashtra
                    </p>
                </Col>

                {/* Manufacturing Unit */}
                <Col xs={24} md={6}>
                    <h4 style={{ color: "#fff" }}>MANUFACTURING UNIT</h4>
                    <p>
                        Plot No. G-266 MIDC, Baramati, Dist. Pune - 413133 India,
                        Maharashtra
                    </p>
                </Col>
            </Row>


            {/* Contact Buttons */}
            <Row
                style={{ marginTop: "20px", display: "flex", justifyContent: "flex-start", gap: "20px" }}
            >
                <div
                    style={{
                        background: "#013b6c",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                    }}
                >
                    <PhoneOutlined /> +91 9657077929
                </div>

                <div
                    style={{
                        background: "#013b6c",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                    }}
                >
                    <MailOutlined /> support@emobiliti.in
                </div>
            </Row>

            {/* Bottom Footer */}
            <Row
                style={{
                    marginTop: "40px",
                    borderTop: "1px solid rgba(255,255,255,0.3)",
                    paddingTop: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                }}
            >
                <p>© Copyrights 2025 - EMS</p>

                {/* Social Icons */}
                <div style={{ display: "flex", gap: "15px", fontSize: "18px" }}>
                    <FacebookOutlined />
                    <LinkedinOutlined />
                    <InstagramOutlined />
                    <YoutubeOutlined />
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "20px" }}>
                    <a href="#" style={{ color: "#fff" }}>Privacy Policy</a>
                    <a href="#" style={{ color: "#fff" }}>Terms & Conditions</a>
                    <a href="#" style={{ color: "#fff" }}>FAQs</a>
                </div>
            </Row>
        </footer>
    );
};

export default Footer;
