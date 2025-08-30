import React from "react";
import {
    Row,
    Col,
    Form,
    Input,
    Select,
    Checkbox,
    Button,
    Typography,
    Card,
} from "antd";
import { RightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;
import bg_img from "../assets/contac_bg.png"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
    const onFinish = (values) => {
        console.log("Form values:", values);
    };

    return (
        <>
        <Navbar/>

            <div>
                {/* Image with overlay text */}
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: 500,
                        backgroundImage: `url(${bg_img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            // left: "10%",
                            transform: "translateY(-50%)",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            padding: "20px 40px",
                            borderRadius: 4,
                            width: "94%"
                            // maxWidth: 400,
                        }}
                    >
                        <Title
                            level={2}
                            style={{ color: "#fff", margin: 0, fontWeight: "bold", textAlign: "center" }}
                        >
                            GET IN TOUCH WITH US
                        </Title>
                    </div>
                </div>

                {/* Offices info */}
                <Row
                    gutter={[32, 24]}
                    style={{ maxWidth: 900, margin: "40px auto", padding: "0 15px" }}
                >
                    <Col xs={24} md={12}>
                        <Title level={4}>Pune Office</Title>
                        <Text>
                            306, Konark Plaza, Kesnand Road,
                            <br />
                            Wagholi, Pune – 412207 India,
                            <br />
                            Maharashtra
                        </Text>
                    </Col>
                    <Col xs={24} md={12}>
                        <Title level={4}>Manufacturing Unit</Title>
                        <Text>
                            Plot No. G-266 MIDC, Baramati, Dist.
                            <br />
                            Pune - 413133 India, Maharashtra
                        </Text>
                    </Col>
                </Row>

                {/* Contact form */}
                <Card
                    style={{
                        maxWidth: 900, margin: "0 auto 60px", padding: 24,

                        borderRadius: 8, // optional rounded corners
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)", // ✅ shadow here
                    }}
                    bordered={false}
                >
                    <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>
                        Get in touch
                    </Title>
                    <Text strong>Please Share Your Details</Text>

                    <Form
                        name="contactForm"
                        layout="vertical"
                        onFinish={onFinish}
                        style={{ marginTop: 12 }}
                    >
                        <Row gutter={16}>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    name="fullName"
                                    rules={[{ required: true, message: "Please enter your full name" }]}
                                >
                                    <Input placeholder="Enter Full Name *" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    name="mobileNumber"
                                    rules={[
                                        { required: true, message: "Please enter your mobile number" },
                                        { pattern: /^[0-9]{10}$/, message: "Enter valid 10-digit mobile number" },
                                    ]}
                                >
                                    <Input placeholder="Enter Mobile Number *" maxLength={10} />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    name="email"
                                    rules={[
                                        { type: "email", message: "Please enter a valid email" },
                                    ]}
                                >
                                    <Input placeholder="Enter Email ID" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    name="vehicle"
                                    rules={[{ required: true, message: "Please select vehicle" }]}
                                >
                                    <Select placeholder="Select Vehicle *" allowClear>
                                        <Option value="car">Car</Option>
                                        <Option value="suv">SUV</Option>
                                        <Option value="bike">Bike</Option>
                                        <Option value="truck">Truck</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16} style={{ marginBottom: 24 }}>
                            <Col xs={24} sm={12}>
                                <Form.Item name="state">
                                    <Select placeholder="Select State" allowClear>
                                        <Option value="maharashtra">Maharashtra</Option>
                                        <Option value="gujarat">Gujarat</Option>
                                        <Option value="karnataka">Karnataka</Option>
                                        <Option value="tamilnadu">Tamil Nadu</Option>
                                        <Option value="delhi">Delhi</Option>
                                        {/* Add more options as needed */}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item
                            name="agreeTerms"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value
                                            ? Promise.resolve()
                                            : Promise.reject(
                                                new Error("You must agree to the terms and conditions")
                                            ),
                                },
                            ]}
                        >
                            <Checkbox>
                                I agree to receive a call back from EMS and associated agencies and
                                organizations regarding my interest in EMS brands, as per the calling
                                guidelines available also agree to website’s Terms and conditions and
                                Privacy Policy.
                            </Checkbox>
                        </Form.Item>

                        <Form.Item name="subscribeWhatsApp" valuePropName="checked">
                            <Checkbox>Subscribe to WhatsApp</Checkbox>
                        </Form.Item>

                        <Form.Item style={{ textAlign: "center", marginTop: 24 }}>
                            <Button type="primary" htmlType="submit" shape="round" icon={<RightOutlined />}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>

            <Footer/>
        </>
    );
};

export default ContactUs;