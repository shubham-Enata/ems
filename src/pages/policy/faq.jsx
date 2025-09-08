import React from "react";
import { Card, Collapse, Typography, Layout } from "antd";

const { Title, Paragraph } = Typography;
const { Content } = Layout;
const { Panel } = Collapse;

const FAQs = () => {
  return (
    <Layout style={{ padding: "24px", background: "#fff" }}>
      <Content>
        <Card bordered style={{ maxWidth: 900, margin: "0 auto" }}>
          <Typography>
            <Title level={2}>Frequently Asked Questions (FAQs) - EMS</Title>

            <Collapse accordion>
              {/* 1. General */}
              <Panel header="1. General" key="1">
                <Paragraph>
                  <strong>Q1. What types of vehicles does your company offer?</strong><br />
                  Ans: We offer a wide range of electric Three wheelers in the passenger segment designed for comfort and safety, as well as cargo/commercial segment engineered for durability, load capacity, and efficiency.
                </Paragraph>
                <Paragraph>
                  <strong>Q2. Where can I find detailed specifications of your vehicles?</strong><br />
                  Ans: All product specifications, features, and brochures are available under the Products section of our website. You can also visit your nearest authorized dealership for more details.
                </Paragraph>
              </Panel>

              {/* 2. Test Rides */}
              <Panel header="2. Test Rides" key="2">
                <Paragraph>
                  <strong>Q3. Can I schedule a test drive before booking?</strong><br />
                  Ans: Yes. You can request a test drive online, and our authorized dealership will contact you to confirm availability based on your location.
                </Paragraph>
                <Paragraph>
                  <strong>Q4. Is there an age requirement for booking a vehicle?</strong><br />
                  Ans: Yes. Customers must be at least 18 years of age and possess a valid driving license to book or test-drive a vehicle.
                </Paragraph>
              </Panel>

              {/* 3. Payments & Refunds */}
              <Panel header="3. Payments & Refunds" key="3">
                <Paragraph>
                  <strong>Q5. What payment options are available?</strong><br />
                  Ans: You can make payments only at our dealerships. Our dealers accept payments through debit/credit cards, net banking, UPI, and approved financing partners.
                </Paragraph>
                <Paragraph>
                  <strong>Q6. Is my online payment secure?</strong><br />
                  Ans: Yes, all transactions are processed through secure payment gateways, and your financial details are not stored by us.
                </Paragraph>
                <Paragraph>
                  <strong>Q7. What happens if I cancel my booking?</strong><br />
                  Ans: If you cancel before the final invoice, the booking amount is refundable as per the refund policy of the selected dealership. Refunds are typically processed within 7 working days.
                </Paragraph>
              </Panel>

              {/* 4. Delivery & Registration */}
              <Panel header="4. Delivery & Registration" key="4">
                <Paragraph>
                  <strong>Q8. How long does it take to deliver a vehicle after booking?</strong><br />
                  Ans: Delivery timelines depend on model availability, color preference, RTO registration process, and location. Your dealership will confirm the tentative delivery schedule.
                </Paragraph>
                <Paragraph>
                  <strong>Q9. Where will my vehicle be registered?</strong><br />
                  Ans: Your vehicle will be registered with the RTO associated with your selected dealership. Valid ID and address proof are mandatory for registration.
                </Paragraph>
              </Panel>

              {/* 5. Warranty & Service */}
              <Panel header="5. Warranty & Service" key="5">
                <Paragraph>
                  <strong>Q10. What warranty is provided on your vehicles?</strong><br />
                  Ans: All our vehicles come with a standard manufacturer’s warranty. Details may vary by model and segment (passenger/cargo). Extended warranty packages are also available.
                </Paragraph>
                <Paragraph>
                  <strong>Q11. Where can I get my vehicle serviced?</strong><br />
                  Ans: You can avail yourself of the service at any of our authorized service centers listed on the website. Regular maintenance as per the service schedule is recommended for best performance.
                </Paragraph>
                <Paragraph>
                  <strong>Q12. Are spare parts easily available?</strong><br />
                  Ans: Yes, genuine spare parts are available across all authorized dealerships and service centers to ensure reliability and safety.
                </Paragraph>
              </Panel>

              {/* 6. Cargo/Commercial Vehicles */}
              <Panel header="6. Cargo/Commercial Vehicles" key="6">
                <Paragraph>
                  <strong>Q13. What load capacities do your cargo vehicles support?</strong><br />
                  Ans: Our cargo range is designed to support different payload requirements, from small goods transport to heavy commercial applications. Detailed specs are available in the product section.
                </Paragraph>
                <Paragraph>
                  <strong>Q14. Can businesses apply for fleet purchases?</strong><br />
                  Ans: Yes, we offer fleet solutions for businesses and logistics partners. Please contact our dealer for discounts on fleet purchases.
                </Paragraph>
              </Panel>

              {/* 7. Support */}
              <Panel header="7. Support" key="7">
                <Paragraph>
                  <strong>Q15. How can I contact customer support?</strong><br />
                  Ans: You can reach us via the Contact Us section on our website, call our customer helpline, or visit your nearest dealership.
                </Paragraph>
                <Paragraph>
                  <strong>Q16. Do you provide roadside assistance?</strong><br />
                  Ans: Yes, roadside assistance packages are available for select models. Please check with your dealership at the time of purchase.
                </Paragraph>
              </Panel>
            </Collapse>
          </Typography>
        </Card>
      </Content>
    </Layout>
  );
};

export default FAQs;
