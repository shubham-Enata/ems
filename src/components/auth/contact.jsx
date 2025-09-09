import { Button, Table } from "antd"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_contact_us } from "../../redux/vehicleAction";

const contact_dash = () => {
    const dispatch = useDispatch()
    const { contactuslist } = useSelector((store) => store.vehicle);

    console.log(contactuslist, 'contactuslist')
    useEffect(() => {
        dispatch(get_contact_us())
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
                    Contact List
                </h2>
                {/* <Button type="primary" style={{ backgroundColor: "var(--mute-blue)" }} >+ Add Dealer</Button> */}
            </div>


            <Table dataSource={contactuslist} columns={columns} />
        </div>
    )
}

export default contact_dash