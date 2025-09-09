
import React from 'react';
import { Tabs } from 'antd';
import Dealer_master from '../../components/auth/dealerMaster';
import Contact_dash from '../../components/auth/contact';
import Enquiry_dash from '../../components/auth/enquiry';
import Dealer from '../../components/auth/dealer';
const DealerMaster = () => {
    const onChange = key => {
        console.log(key);
    };


    const items = [
        {
            key: '1',
            label: 'Dealer Master',
            children: <Dealer_master/>,
        },
        {
            key: '2',
            label: 'Contact',
            children: <Contact_dash/>,
        },
        {
            key: '3',
            label: 'Enquiry',
            children: <Enquiry_dash/>,
        },
        {
            key: '4',
            label: 'Become Dealer',
            children: <Dealer/>,
        },
    ];

    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    )

}

export default DealerMaster