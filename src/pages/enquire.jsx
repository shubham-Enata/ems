import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setloading } from "../redux/vehicleSlice";
import { create_enquiry, getCountryList, getdistrictList, getStateList } from "../redux/vehicleAction";
import Loader from "../components/Loader";

const Enquire = () => {
    const dispatch = useDispatch()
    const { countrylist, statelist, districtList, loading } = useSelector((store) => store.vehicle);


    const onFinish = async (values) => {
        console.log("Form values:", values);

        try {
            dispatch(setloading(true))
            const payload = {
                email: values.email,
                vehicle: values.vehicle,
                state: values.state,
                city: values.city,

                mbno: values.mbno,
                name: values.name
            };

            const resp = await dispatch(create_enquiry({ payload })).unwrap()
            toast.success("Enquiry Created !")

        } catch (err) {

        } finally {
            dispatch(setloading(false))
        }
    };

    useEffect(() => {
        dispatch(getCountryList())

    }, [])
    const handlecountry = (countryId) => {
        console.log("Selected Country ID:", countryId);
        dispatch(getStateList({ id: countryId }))

    };
    const handlestate = (stateId) => {


        dispatch(getdistrictList({ id: stateId }))

    };

    if (loading) return <Loader />

    return (
        <>
            <Navbar />

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
                            Enquire Now
                        </Title>
                    </div>
                </div>




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
                        Enquire Now
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
                                    name="name"
                                    rules={[{ required: true, message: "Please enter your full name" }]}
                                >
                                    <Input placeholder="Enter Full Name *" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Form.Item
                                    name="mbno"
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
                                        <Option value="Sprint Jr">Sprint Jr</Option>
                                        <Option value="Sprint Loader Jr">Sprint Loader Jr</Option>
                                        <Option value="Commando Jr">Commando Jr</Option>

                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16} style={{ marginBottom: 24 }}>
                            <Col xs={24} sm={12}>
                                <Form.Item name="country" >
                                    <Select
                                        showSearch
                                        placeholder="Select Country"
                                        allowClear
                                        // loading={loading}
                                        filterOption={(input, option) =>
                                            option.label.toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={countrylist.map((c) => ({ value: c.id, label: c.name }))}
                                        onChange={handlecountry}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Form.Item name="state" >
                                    <Select
                                        showSearch
                                        placeholder="Select State"
                                        allowClear
                                        // loading={loading}
                                        filterOption={(input, option) =>
                                            option.label.toLowerCase().includes(input.toLowerCase())
                                        }
                                        onChange={(selected, option) => {
                                            console.log(option, "selected>>")
                                            handlestate(option?.id)
                                        }}
                                        options={statelist.map((c) => ({ value: c.name, label: c.name, id: c.id }))}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12}>
                                <Form.Item name="city" >
                                    <Select
                                        showSearch
                                        placeholder="Select City"
                                        allowClear
                                        // loading={loading}
                                        filterOption={(input, option) =>
                                            option.label.toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={districtList.map((c) => ({ value: c.name, label: c.name, id: c.id }))}
                                    />
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

                        {/* <Form.Item name="subscribeWhatsApp" valuePropName="checked">
                                           <Checkbox>Subscribe to WhatsApp</Checkbox>
                                       </Form.Item> */}

                        <Form.Item style={{ textAlign: "center", marginTop: 24 }}>
                            <Button type="primary" htmlType="submit" shape="round" icon={<RightOutlined />}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>

            <Footer />
        </>
    );
};

export default Enquire;