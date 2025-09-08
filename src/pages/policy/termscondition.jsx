import React from "react";
import { Card, Typography, Layout } from "antd";

const { Title, Paragraph, Text } = Typography;
const { Content } = Layout;

const TermsAndConditions = () => {
  return (
    <Layout style={{ padding: "24px", background: "#fff" }}>
      <Content>
        <Card bordered style={{ maxWidth: 900, margin: "0 auto" }}>
          <Typography>
            <Title level={2}>Terms & Conditions</Title>

            <Title level={4}>For Website</Title>

            <Paragraph>
              <Text strong>1. Acceptance of Terms:</Text> By accessing and using this website (“Website”), you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use immediately.
            </Paragraph>

            <Paragraph>
              <Text strong>2. General Information:</Text> The information contained on this Website is provided in good faith for general purposes only. While every effort is made to ensure accuracy, no warranty or guarantee is provided regarding completeness, reliability, or suitability for any specific purpose.
            </Paragraph>

            <Paragraph>
              <Text strong>3. Registration & Membership:</Text> Certain features of the Website may require you to register as a member (“Member”). You agree to provide accurate information during registration and are responsible for maintaining confidentiality of login details.
            </Paragraph>

            <Paragraph>
              <Text strong>4. Products & Services:</Text> If you apply for or purchase any product or service listed on this Website, additional terms and conditions may apply. In the event of conflict, the specific terms applicable to that product or service shall prevail.
            </Paragraph>

            <Paragraph>
              <Text strong>5. Modifications to Website & Services:</Text> EMS reserves the right to modify, suspend, or discontinue any part of the Website without prior notice; update, amend, or withdraw any product, service, or promotional content; and revise these Terms & Conditions at any time, with continued use deemed as acceptance of changes.
            </Paragraph>

            <Paragraph>
              <Text strong>6. Use of Website:</Text> This Website is intended for personal and lawful use only. You agree not to misuse the Website, post or transmit illegal content, or attempt unauthorized access to systems or data.
            </Paragraph>

            <Paragraph>
              <Text strong>7. Intellectual Property Rights:</Text> All trademarks, logos, designs, content, and intellectual property displayed on this website belong to EMS or its licensors. You may not reproduce, distribute, or commercially exploit any content without prior written consent.
            </Paragraph>

            <Paragraph>
              <Text strong>8. Disclaimers:</Text> The Website is provided “AS IS” and “AS AVAILABLE.” No warranties are made regarding accuracy, reliability, availability, or security. EMS is not liable for any direct, indirect, or consequential losses arising from use.
            </Paragraph>

            <Paragraph>
              <Text strong>9. Third-Party Links:</Text> The Website may contain links to third-party websites. EMS does not endorse or accept responsibility for their content or availability.
            </Paragraph>

            <Paragraph>
              <Text strong>10. Indemnification:</Text> You agree to indemnify and hold harmless EMS, its employees, and affiliates against any claims, losses, damages, liabilities, costs, or expenses arising from misuse of the Website or violation of Terms.
            </Paragraph>

            <Paragraph>
              <Text strong>11. User Submissions:</Text> Any material, information, or communication submitted by you shall be treated as non-confidential and may be used by EMS for any purpose, unless agreed otherwise in writing.
            </Paragraph>

            <Paragraph>
              <Text strong>12. Limitation of Liability:</Text> EMS shall not be liable for any damages, including indirect, incidental, or consequential damages, arising out of your use or inability to use the Website.
            </Paragraph>

            <Paragraph>
              <Text strong>13. Governing Law & Jurisdiction:</Text> These Terms shall be governed by the laws of India. Disputes are subject to the exclusive jurisdiction of courts in Pune, MH.
            </Paragraph>

            <Paragraph>
              <Text strong>14. Compliance with Local Laws:</Text> Users accessing the Website from outside India are responsible for compliance with applicable local laws.
            </Paragraph>

            <Paragraph>
              <Text strong>15. Changes to Terms:</Text> EMS may update these Terms & Conditions at any time by posting the revised version. Continued use constitutes acceptance of changes.
            </Paragraph>

            <Title level={4}>For Vehicle Booking & Test Ride</Title>

            <Paragraph>
              <Text strong>1. Consent of Age:</Text> By using this Website and availing booking, test ride, or purchase services, you confirm that you are at least 18 years of age and hold a valid driving license. The Company is not liable for any misrepresentation of age or eligibility.
            </Paragraph>

            <Paragraph>
              <Text strong>2. Fair Usage Policy:</Text> Users agree to use the Website solely for lawful purposes such as browsing products, booking a vehicle, scheduling a test ride, completing e-KYC, purchasing insurance, or availing finance. Malicious code, misuse, or false information is prohibited.
            </Paragraph>

            <Paragraph>
              <Text strong>3. User Responsibility:</Text> You are responsible for the accuracy of all information submitted. The Company will forward your data to relevant parties but is not responsible for verification. Losses from incorrect or fraudulent data are borne by you.
            </Paragraph>

            <Paragraph>
              <Text strong>4. Privacy & Data Protection:</Text> Your personal information will be treated in accordance with our Privacy Policy and applicable laws. Consent is given to share data with authorized partners for transaction purposes.
            </Paragraph>

            <Paragraph>
              <Text strong>7. Vehicle Delivery & Registration:</Text> Registration will be carried out at the RTO linked to the selected dealership. Delivery will occur at dealership premises. Delays due to regulatory, logistical, or unforeseen reasons are not the Company’s liability.
            </Paragraph>

            <Paragraph>
              <Text strong>8. Product Information:</Text> Efforts are made to keep product details accurate, but the Website does not warrant error-free descriptions, images, prices, or specifications. Users should validate details with the dealership.
            </Paragraph>

            <Paragraph>
              <Text strong>10. Limitation of Liability:</Text> The Website and services are provided “AS IS” and “AS AVAILABLE.” The maximum liability of the Company shall not exceed the booking amount paid.
            </Paragraph>

            <Paragraph>
              <Text strong>11. Indemnity:</Text> You agree to indemnify and hold harmless the Company, its dealerships, affiliates, employees, and partners against any claims, damages, or liabilities arising out of your breach of these Terms or misuse of the Website/services.
            </Paragraph>

            <Paragraph>
              <Text strong>12. Intellectual Property:</Text> All content including text, images, logos, trademarks, and software is the property of the Company or its licensors. No copying, reproduction, distribution, or commercial use is allowed without consent.
            </Paragraph>

            <Paragraph>
              <Text strong>13. Force Majeure:</Text> The Company shall not be liable for delays or failure in performance caused by events beyond its reasonable control, including natural disasters, strikes, epidemics, government restrictions, or technical failures.
            </Paragraph>
          </Typography>
        </Card>
      </Content>
    </Layout>
  );
};

export default TermsAndConditions;
