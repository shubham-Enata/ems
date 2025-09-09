import { Button, Table } from "antd"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_enquiry } from "../../redux/vehicleAction";

const enquiry_dash = () => {
    const dispatch = useDispatch()
    const { enquiryList } = useSelector((store) => store.vehicle);

    console.log(enquiryList, 'enquiryList')
    useEffect(() => {
        dispatch(get_enquiry())
    }, [])



    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Mobile ",
            dataIndex: "mbno",
            key: "mbno",
        },
        {
            title: "Vehicle",
            dataIndex: "vehicle",
            key: "vehicle",
        },
        {
            title: "State",
            dataIndex: "state",
            key: "state",
        },
    ];
    return (
        <div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 16,
                }}
            >
                <h2 style={{ margin: 0, textAlign: "center", flex: 1 }}>
                    Enquiry List
                </h2>
                {/* <Button type="primary" style={{ backgroundColor: "var(--mute-blue)" }} >+ Add Dealer</Button> */}
            </div>


            <Table dataSource={enquiryList} columns={columns} />
        </div>
    )
}

export default enquiry_dash