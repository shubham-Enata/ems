import React, { useEffect } from 'react';
import { Input, Button, List, Typography, Divider } from 'antd';
import { SearchOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const { Text, Title } = Typography;
import bg_img from "../assets/contac_bg.png"
import { get_dealer_master } from '../redux/vehicleAction';
import { useDispatch, useSelector } from 'react-redux';


const dealers = [
    {
        name: 'SILVER JUBILEE MOTORS LTD.',
        address: 'SURVEY NO. 131/3, HADAPSAR INDUSTRIAL ESTATE, HADAPSAR, PUNE, Maharastra',
        mapLink: 'https://maps.google.com/?q=SILVER+JUBILEE+MOTORS+PUNE',
    },
    {
        name: 'SILVER JUBILEE MOTORS LTD.',
        address: '12, MOLEDINA ROAD, CAMP, PUNE, Maharastra',
        mapLink: 'https://maps.google.com/?q=12,+MOLEDINA+ROAD,+CAMP,+PUNE',
    },
    {
        name: 'UNNATI MOTORS, A DIVISION OF MICROPARK LOGISTICS PRIVATE LIMITED',
        address: 'CITY SPACE PROJECT, OPP. IN ORBIT MALL, VIMAN NAGAR, AHAMADNAGAR',
        mapLink: 'https://maps.google.com/?q=UNNATI+MOTORS+AHAMADNAGAR',
    },
];

const DealerLocator = () => {
    const dispatch = useDispatch()
    const { dealer_master_list } = useSelector((store) => store.vehicle);

    console.log(dealer_master_list,"dealer_master_list")
    useEffect(() => {
        dispatch(get_dealer_master())
    }, [])
    return (
        <>
            <Navbar />


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
                        Dealer Locator
                    </Title>
                </div>
            </div>

            <div style={{ maxWidth: 1000, margin: '40px auto', padding: '0 16px' }}>
                {/* Search Input */}
                <div style={{ textAlign: 'center', marginBottom: 40 }}>
                    <Input
                        size="large"
                        placeholder="Search by Pin code , Dealer Name , City"
                        prefix={<SearchOutlined />}
                        style={{ width: 450, borderRadius: 40 }}
                        allowClear
                    />
                </div>

                {/* Main Content: Map and Dealer List */}
                <div
                    style={{
                        display: 'flex',
                        boxShadow: '0 3px 12px rgb(0 0 0 / 0.1)',
                        borderRadius: 4,
                        overflow: 'hidden',
                        height: 480,
                    }}
                >
                    {/* Left: Map */}
                    <div style={{ flex: 1 }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48668673.781237185!2d60.885361974999996!3d19.164795843180493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff6c52e0f2d%3A0x34e3f4b317aaf4b6!2sIndia!5e0!3m2!1sen!2sin!4v1695656458473!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="India Map"
                        />


                    </div>

                    {/* Right: Dealer List */}
                    <div
                        style={{
                            flex: 1,
                            background: '#fff',
                            padding: '24px 32px',
                            overflowY: 'auto',
                            borderLeft: '1px solid #eee',
                        }}
                    >
                        <List
                            itemLayout="vertical"
                            dataSource={dealer_master_list}
                            renderItem={(item, idx) => (
                                <div key={idx}>
                                    <List.Item
                                        actions={[
                                            <Button
                                                key="view"
                                                icon={<EnvironmentOutlined />}
                                                onClick={() => window.open(item.mapLink, '_blank')}
                                                style={{ borderRadius: 8 }}
                                            >
                                                View In Maps
                                            </Button>,
                                        ]}
                                    >
                                        <List.Item.Meta
                                            title={<Text strong>{item.dealer_name}</Text>}
                                            description={<Text>{item.dealer_geography[0]?.country?.name}</Text>}
                                        />
                                    </List.Item>
                                    {idx < dealer_master_list.length - 1 && <Divider style={{ margin: '12px 0' }} />}
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default DealerLocator;