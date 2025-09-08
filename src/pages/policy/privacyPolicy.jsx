import React from "react";
import { Card, Typography, Layout } from "antd";

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

const PrivacyPolicy = () => {
  return (
    <Layout style={{ padding: "24px", background: "#fff" }}>
      <Content>
        <Card bordered style={{ maxWidth: 900, margin: "0 auto" }}>
          <Typography>
            <Title level={2}>Privacy Policy</Title>

            <Paragraph>
              EMS (“Company”, “we”, “our”, or “us”) is committed to protecting your privacy and safeguarding your personal data. By accessing and using our website, you agree to the terms of this Privacy Policy and voluntarily consent to the collection, use, and processing of your personal data as described here.
            </Paragraph>

            <Title level={4}>1. Personal Data We Collect</Title>
            <Paragraph>
              We may collect the following categories of personal data:
              <ul>
                <li>Basic identification data: name, age, gender, mailing address, email, and phone number.</li>
                <li>Vehicle-related details: model, year, color, registration number, purchase/booking details, warranty info, dealer name, invoice details.</li>
                <li>Financial and payment information via authorized payment gateways.</li>
                <li>Digital interaction data: IP address, browser type, device details, location, pages viewed, referral URLs, cookies.</li>
                <li>Employment and partnership data if you apply for a job, dealership, or distributorship.</li>
                <li>Customer support records: communications or information you provide.</li>
                <li>Third-party data from partners, service providers, publicly available sources, or dealerships.</li>
              </ul>
            </Paragraph>

            <Title level={4}>2. How We Use Your Personal Data</Title>
            <Paragraph>
              We process personal data when we have a lawful basis, including:
              <ul>
                <li>Fulfilling contracts (bookings, sales, services, warranties).</li>
                <li>Meeting legal or regulatory obligations.</li>
                <li>With your consent.</li>
                <li>For legitimate business interests, without overriding your rights.</li>
              </ul>
              Typical purposes:
              <ul>
                <li>Processing bookings, purchases, test ride requests, and service inquiries.</li>
                <li>Providing customer support and responding to requests.</li>
                <li>Sending service updates, policy changes, or important notifications.</li>
                <li>Marketing communications (with opt-out options).</li>
                <li>Conducting surveys, promotions, and engagement initiatives.</li>
                <li>Enhancing website performance, analytics, and security.</li>
                <li>Complying with legal, tax, and audit requirements.</li>
              </ul>
            </Paragraph>

            <Title level={4}>3. Sharing of Personal Data</Title>
            <Paragraph>
              We do not sell or rent personal data. We may share it with:
              <ul>
                <li>Within the Company: for sales, marketing, service, and technical support.</li>
                <li>Authorized dealers/distributors: to process bookings, deliveries, services, and warranties.</li>
                <li>Service providers: payment gateways, IT/cloud providers, marketing agencies, logistics partners.</li>
                <li>Business partners: for co-branded events, promotions, or services.</li>
                <li>Legal and regulatory authorities: when required by law.</li>
                <li>Corporate transactions: merger, acquisition, restructuring, or sale of business assets.</li>
              </ul>
            </Paragraph>

            <Title level={4}>4. International Data Transfers</Title>
            <Paragraph>
              Personal data transferred outside your country will be handled securely in accordance with this Privacy Policy.
            </Paragraph>

            <Title level={4}>5. Data Security</Title>
            <Paragraph>
              We use industry-standard measures to protect personal data, including restricted access, secure storage, audits, and employee training. However, no system is fully secure.
            </Paragraph>

            <Title level={4}>6. Cookies and Tracking Technologies</Title>
            <Paragraph>
              Our website may use cookies and similar technologies. You can control cookie preferences through your browser settings.
            </Paragraph>

            <Title level={4}>7. Children’s Privacy</Title>
            <Paragraph>
              We do not knowingly collect personal data from children under 18. Contact us to delete any such data.
            </Paragraph>

            <Title level={4}>8. Your Rights</Title>
            <Paragraph>
              Depending on law, you may have rights to:
              <ul>
                <li>Access your data</li>
                <li>Correct inaccuracies</li>
                <li>Request deletion</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
                <li>Opt-out of marketing</li>
              </ul>
              Contact: <a href="mailto:support@emobiliti.in">support@emobiliti.in</a>
            </Paragraph>

            <Title level={4}>9. Data Retention</Title>
            <Paragraph>
              Personal data is retained only as long as necessary to fulfill purposes, unless longer retention is required by law. Data is securely deleted or anonymized afterward.
            </Paragraph>

            <Title level={4}>10. Changes to this Policy</Title>
            <Paragraph>
              Updates to the Privacy Policy will be posted on the website with a revised effective date. Review regularly for changes.
            </Paragraph>

            <Title level={4}>11. Governing Law and Jurisdiction</Title>
            <Paragraph>
              This Privacy Policy is governed by the laws of India. Disputes are subject to the exclusive jurisdiction of courts in Pune, MH.
            </Paragraph>

            <Title level={4}>12. Contact Information</Title>
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

export default PrivacyPolicy;
