import React from "react";
import { Card, Typography, Carousel } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const testimonials = [
    {
        id: 1,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
        id: 2,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
        id: 3,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
        id: 4,
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },

];

const CustomersCarousel = () => {
    return (
        <>
            <div style={{ marginLeft:"100px" }}>
                <Title>Hear From Our Customers</Title>
            </div>

            <div
                style={{
                    textAlign: "center",
                    // padding: "40px 20px",
                    display: "flex",
                    justifyContent: "center", // centers horizontally
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",           // allow wrapping for smaller screens
                        justifyContent: "center",   // center cards inside
                        maxWidth: "1200px",         // keeps them centered instead of stretching full width
                    }}
                >
                    {testimonials.map((item) => (
                        <Card
                            key={item.id}
                            hoverable
                            style={{
                                margin: "10px",
                                borderRadius: "12px",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                width: "250px", // fixed width so all cards align nicely
                            }}
                            cover={
                                <div
                                    style={{

                                        height: 200,
                                        background: "linear-gradient(135deg, #DEDEDE 0%, #FFFFFF80 100%)",

                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <PlayCircleOutlined style={{ fontSize: "48px", color: "#333" }} />
                                </div>
                            }
                        >
                            <Paragraph style={{ fontWeight: 500, textAlign: "left" }}>
                                {item.text}
                            </Paragraph>
                        </Card>
                    ))}
                </div>
            </div>
        </>

    );
};

export default CustomersCarousel;
