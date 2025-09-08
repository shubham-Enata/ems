import React from "react";
import { Card, Typography, Layout } from "antd";

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

const AboutUs = () => {
  return (
    <Layout style={{ padding: "24px", background: "#fff" }}>
      <Content>
        <Card bordered style={{ maxWidth: 900, margin: "0 auto" }}>
          <Typography>
            <Title level={2}>About Us - EMS</Title>

            <Paragraph>
              At EMS, we are driven by the vision of redefining mobility for both passenger and cargo segments. Built on the values of innovation, trust, and customer-first thinking, our mission is to deliver vehicles that combine safety, efficiency, and reliability to meet the diverse needs of modern transportation.
            </Paragraph>

            <Paragraph>
              With a focus on passenger comfort and cargo performance, we design and develop vehicles that bring together cutting-edge technology, durability, and affordability. Whether it’s ensuring a smooth and safe ride for families or delivering powerful solutions for businesses, we are committed to providing mobility that moves people and progresses forward.
            </Paragraph>

            <Paragraph>
              Our team of dedicated engineers, designers, and service professionals work tirelessly to uphold the highest standards of quality, performance, and sustainability. From research and development to after-sales support, every step reflects our commitment to excellence and customer satisfaction.
            </Paragraph>

            <Paragraph>
              As we continue our journey, we aim to not just manufacture vehicles, but to build long-lasting relationships with our customers, partners, and communities. Together, we are shaping a future of smarter, greener, and more connected mobility.
            </Paragraph>

            <Title level={4}>Our Core Values</Title>
            <Paragraph>
              <Text strong>• Innovation:</Text> Developing future-ready mobility solutions.
            </Paragraph>
            <Paragraph>
              <Text strong>• Safety:</Text> Prioritizing passenger and cargo protection.
            </Paragraph>
            <Paragraph>
              <Text strong>• Sustainability:</Text> Driving towards cleaner, eco-friendly transportation.
            </Paragraph>
            <Paragraph>
              <Text strong>• Customer Commitment:</Text> Ensuring trust and satisfaction at every stage.
            </Paragraph>

            <Paragraph>
              Welcome to EMS – where mobility meets reliability!
            </Paragraph>

            <Title level={4}>Contact Information</Title>
            <Paragraph>
              <Text strong>Website:</Text> <a href="https://www.emobiliti.in" target="_blank" rel="noreferrer">www.emobiliti.in</a>
            </Paragraph>
            <Paragraph>
              <Text strong>Email:</Text> <a href="mailto:support@emobiliti.in">support@emobiliti.in</a>
            </Paragraph>
            <Paragraph>
              <Text strong>Phone:</Text> +91-9028347071
            </Paragraph>
          </Typography>
        </Card>
      </Content>
    </Layout>
  );
};

export default AboutUs;
