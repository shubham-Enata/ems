import React, { useState, useRef, useEffect } from "react";
import {
    Button,
    Form,
    Input,
    Layout,
    Typography,
    Row,
    Col,
    Image,
    message,
    Space,
} from "antd";
import { NavLink, useNavigate } from "react-router-dom";


import toast, { Toaster } from "react-hot-toast";
import api from "../../redux/vehicleAction";
import { useDispatch, useSelector } from "react-redux";
import { setloading } from "../../redux/vehicleSlice";
import Loader from "../../components/Loader";
const { Title, Text } = Typography;

// import bg_image from '../../assets/Images/bg_img.png'
// import wikitek_img from '../../assets/Images/wikitek.png'
// import dash from '../../assets/Images/dash.png'
// import wikitek from '../../assets/Images/wikitek1.png'




const Login = () => {
    const { loading } = useSelector((store) => store.vehicle);
    const disptach = useDispatch()
    const [showotp, setShowOtp] = useState(false);
    const [otp, setOtp] = useState("");
    const [formvalues, setFormValues] = useState({
        username: "",
        password: "",
    });

    console.log(formvalues, "formvalues")

    const navigate = useNavigate()
    const styles = {
        leftContainer: {

            // backgroundImage: `url(${bg_image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "30px",
            overflow: "hidden",
            height: "100%", // adjust as needed
            width: "100%",
            position: "relative",
        },
        overlay: {

            backgroundColor: "var(--primary-color-opacity)",
            height: "100%",
            width: "100%",

            alignItems: "center",
            padding: "40px",
        },
        heading: {
            display: 'flex',
            // justifyContent: 'center',
            marginTop: 200,
            color: "white",
            fontSize: "32px",
            fontWeight: "bold",
            lineHeight: "1.4",
            margin: 0,
        },
    };





    const onFinish = async (values) => {
        try {

            disptach(setloading(true))

            console.log(values, "values")


            // Call your login API
            const { data } = await api.post(`/api/v1/accounts/login`, {
                username: values.username,
                password: values.password,
            });

            console.log(data, "response>>>")

            if (data.data.auth_token?.access) {
                // Save token in localStorage
                localStorage.setItem("ems_token", data.data.auth_token?.access);
                localStorage.setItem("ems_org", data.data?.org?.id)
                localStorage.setItem("ems_data", JSON.stringify(data?.data));


                // Success toast
                toast.success("Login successful!");
                navigate('/admin')


            } else {
                toast.error("Login failed! Invalid credentials.");
            }
        } catch (error) {

            console.error("Login error:", error);
            toast.error("Something went wrong. Please try again!");
        } finally {
            disptach(setloading(false))
        }
    };







    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (loading) return <Loader />

    return (


        <Layout
            style={{
                display: isMobile ? "flex" : "grid",

                // height: "100vh",
            }}
        >




            {/* Right Panel */}
            <div
                style={{
                    backgroundColor: "#fff",
                    padding: isMobile ? "20px" : "50px",
                    paddingTop: '120px',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        maxWidth: 500,
                        border: "1px solid #e8e8e8",
                        padding: isMobile ? 24 : 40,
                        borderRadius: 15,
                    }}
                >

                    <>
                        <Title level={2} style={{ textAlign: "center" }}>
                            Login
                        </Title>
                        <Text style={{ display: "block", textAlign: "center", }}>
                            Enter your credentials to login to the platform
                        </Text>

                        <Form name="login" onFinish={onFinish} layout="vertical" autoComplete="off">

                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[
                                    { required: true, message: 'Please enter your username' },
                                    // {
                                    //     pattern: /^[6-9]\d{9}$/,
                                    //     message: 'Please enter a valid 10-digit mobile number',
                                    // },
                                ]}
                            >
                                <Input />
                            </Form.Item>


                            <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                                <Input.Password />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    style={{ backgroundColor: "#0474BA" }}
                                >
                                    LOGIN
                                </Button>
                            </Form.Item>
                        </Form>

                        {/* <Form.Item style={{ textAlign: "center" }}>
                                <NavLink to="/register">Register</NavLink> |{" "}
                                <NavLink to="/forgotpass">Forgot Password?</NavLink>
                            </Form.Item>

                            <Form.Item style={{ textAlign: "center", marginTop: -10 }}>
                                <Text type="secondary">
                                    <NavLink to="/termsCondition">Terms & Conditions</NavLink> and{" "}
                                    <NavLink to="/privacyPolicy">Privacy Policy</NavLink>.
                                </Text>
                            </Form.Item> */}
                    </>

                    <div style={{ textAlign: "center", marginTop: 20 }}>
                        {/* <Text strong>Powered By</Text> */}
                        <br />
                        {/* <Image src={wikitek_img} width={200} height={30} preview={false} /> <br /> */}
                        <div style={{ marginTop: "15px" }}>
                            {/* <Text >App Version</Text> <br /> */}
                            {/* <Text>{store?.version}</Text> */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    );
};

export default Login;