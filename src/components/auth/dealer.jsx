import { Button, Table } from "antd"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_dealer, get_enquiry } from "../../redux/vehicleAction";

const dealer_dash = () => {
    const dispatch = useDispatch()
    const { dealerList } = useSelector((store) => store.vehicle);

    console.log(dealerList, 'dealerList')
    useEffect(() => {
        dispatch(get_dealer())
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
            title: "City",
            dataIndex: "city",
            key: "city",
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
                    Dealer List
                </h2>
                {/* <Button type="primary" style={{ backgroundColor: "var(--mute-blue)" }} >+ Add Dealer</Button> */}
            </div>


            <Table dataSource={dealerList} columns={columns} />
        </div>
    )
}

export default dealer_dash