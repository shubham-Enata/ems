import React, { useEffect, useState } from "react";
import { Modal, Table, Button, Form, Input, Select, Card, Row, Col, Typography, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import api, { create_dealer_geoghraphy, create_dealer_master, get_dealer_master, getCountryList, getdistrictList, getorgList, getpincodeList, getStateList, update_dealer_master } from "../../redux/vehicleAction";
const { Option } = Select;
const { Title, Text } = Typography;

import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { setloading } from "../../redux/vehicleSlice";

const Dealer_master = () => {
    const dispatch = useDispatch()
    const { countrylist, statelist, districtList, loading, orgList, pincodelist, dealer_master_list } = useSelector((store) => store.vehicle);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [geoghraphyModal, setgeoghraphyModal] = useState(false)
    const [dealer_id, setdealer_id] = useState(null)
    const [updateDealerData, setupdateDealerData] = useState({})
    const [dealer_isEdit, setdealer_isEdit] = useState(false)
    const [form] = Form.useForm();

    const openModal = () => {
        setdealer_isEdit(false)
        setupdateDealerData({})
        setIsModalOpen(true)
    };
    console.log(updateDealerData, "updateDealerData")

    useEffect(() => {
        dispatch(getCountryList())
        dispatch(getorgList())
        dispatch(get_dealer_master())

    }, [])



    const DealerFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            dealer_org: dealer_isEdit ? updateDealerData.dealer_org?.id || "" : "",
            dealer_code: dealer_isEdit ? updateDealerData.dealer_code || "" : "",
            dealer_name: dealer_isEdit ? updateDealerData.dealer_name || "" : "",

            status: dealer_isEdit ? updateDealerData.status || false : false,
        },

        validationSchema: Yup.object({
            dealer_org: Yup.string().required("Org is required"),
            dealer_code: Yup.string().required("Dealer code is required"),
            dealer_name: Yup.string().required("dealer_name is required"),

        }),

        onSubmit: async (values) => {
            const org_id = localStorage.getItem('ems_org')
            const payload = {
                org: org_id,
                dealer_code: values.dealer_code,
                dealer_org: values.dealer_org,
                dealer_name: values.dealer_name,
                status: values.status,
            };

            console.log("Final API Payload:", payload);

            try {
                if (dealer_isEdit) {
                    await dispatch(update_dealer_master({ payload, id: updateDealerData?.id })).unwrap();
                    dispatch(get_dealer_master());
                    toast.success("Dealer Master Update!")

                } else {
                    await dispatch(create_dealer_master({ payload })).unwrap();
                    dispatch(get_dealer_master());
                    toast.success("Dealer Master Created!")
                }


            } catch (err) {
                console.error("Error creating dealer:", err);
            }


            closeModal();
        },
    });

    const closeModal = () => {
        setIsModalOpen(false)
        setgeoghraphyModal(false)
        setdealer_isEdit(false)
        setupdateDealerData({})

    };

    const handleSubmit = async (values) => {
        console.log("Form Values:", values);

        try {
            dispatch(setloading(true))
            const payload = {
                dealer: dealer_id,
                country: values?.country,
                state: values?.state,
                district: values?.district,
                pincode: values?.pincode,
                is_active: true

            }

            await dispatch(create_dealer_geoghraphy({ payload })).unwrap()
            dispatch(get_dealer_master())
            toast.success("Geoghraphy Added !")

        } catch (err) {

        } finally {
            dispatch(setloading(false))
            form.resetFields()
        }
        closeModal();
    };

    const dataSource = [
        {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street",
        },
        {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street",
        },
    ];

    const columns = [
        {
            title: "Dealer Name",
            dataIndex: "dealer_name",
            key: "dealer_name",
        },
        {
            title: "Dealer Code",
            dataIndex: "dealer_code",
            key: "dealer_code",
            render: (text, record) => (
                <span
                    style={{ color: "#1890ff", cursor: "pointer" }}
                    onClick={() => {
                        setIsModalOpen(true)
                        setdealer_isEdit(true)
                        setupdateDealerData(record)
                    }}

                >
                    {text}
                </span>
            ),
        },
        {
            title: "ORG Code",
            dataIndex: "org",
            key: "org",
            render: (text, record) => (
                // <span
                //     style={{ color: "#1890ff", cursor: "pointer" }}

                // >
                text?.company_name
                // </span>
            ),
        },
        {
            title: "Geography",
            dataIndex: "dealer_geography", // make sure your data source has a 'dpg' field
            key: "dealer_geography",
            render: (text, record) => (
                <span
                    style={{ color: "#1890ff", cursor: "pointer" }}
                    onClick={() => {
                        setdealer_id(record?.id)
                        setgeoghraphyModal(true)
                    }}
                >
                    {text.length}
                </span>
            ),
        },
        // {
        //     title: "DPG",
        //     dataIndex: "address",
        //     key: "address",
        // },
        // {
        //     title: "Status",
        //     dataIndex: "address",
        //     key: "address",
        // },
    ];


    useEffect(() => {
        dispatch(getorgList())
    }, [])
    const handlecountry = (countryId) => {
        console.log("Selected Country ID:", countryId);
        dispatch(getStateList({ id: countryId }))

    };
    const handlestate = (stateId) => {


        dispatch(getdistrictList({ id: stateId }))

    };
    const handledistrict = (id) => {
        dispatch(getpincodeList({ id }))

    }


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
                    Dealer Master List
                </h2>
                <Button type="primary" style={{ backgroundColor: "var(--mute-blue)" }} onClick={openModal}>+ Add Dealer</Button>
            </div>


            <Table dataSource={dealer_master_list} columns={columns} />





            {/* Beacome dealer modal >>> */}
            <Modal
                title={dealer_isEdit ? "Edit Dealer" : "Add Dealer"}
                open={isModalOpen}
                onCancel={closeModal}
                footer={null}
            >
                <form onSubmit={DealerFormik.handleSubmit}>

                    <div className="form-item" style={{ marginBottom: "13px" }}>
                        <label>Org</label>


                        <Select
                            style={{ width: "100%" }}
                            showSearch
                            placeholder="Select org"
                            allowClear
                            value={DealerFormik.values.dealer_org}

                            filterOption={(input, option) =>
                                option.label.toLowerCase().includes(input.toLowerCase())
                            }
                            onChange={(val) => DealerFormik.setFieldValue("dealer_org", val)}
                            options={orgList && orgList?.map((c) => ({ value: c.id, label: c.company_name, id: c.id }))}
                        />
                        {DealerFormik.errors.dealer_org && DealerFormik.touched.dealer_org && (
                            <div style={{ color: "red" }}>{DealerFormik.errors.dealer_org}</div>
                        )}

                    </div>


                    <div className="form-item" style={{ marginBottom: "13px" }}>
                        <label>Dealer Code</label>
                        <Input
                            name="dealer_code"
                            placeholder="Enter dealer code"
                            value={DealerFormik.values.dealer_code}
                            onChange={DealerFormik.handleChange}
                            onBlur={DealerFormik.handleBlur}
                        />
                        {DealerFormik.errors.dealer_code && DealerFormik.touched.dealer_code && (
                            <div style={{ color: "red" }}>{DealerFormik.errors.dealer_code}</div>
                        )}
                    </div>


                    <div className="form-item" style={{ marginBottom: "13px" }}>
                        <label>Dealer Name</label>
                        <Input
                            name="dealer_name"
                            placeholder="Enter dealer name"
                            value={DealerFormik.values.dealer_name}
                            onChange={DealerFormik.handleChange}
                            onBlur={DealerFormik.handleBlur}
                        />
                        {DealerFormik.errors.dealer_name && DealerFormik.touched.dealer_name && (
                            <div style={{ color: "red" }}>{DealerFormik.errors.dealer_name}</div>
                        )}
                    </div>




                    <div className="form-item" style={{ marginBottom: "13px" }}>
                        <Checkbox
                            checked={DealerFormik.values.status}
                            onChange={(e) =>
                                DealerFormik.setFieldValue("status", e.target.checked)
                            }
                        >
                            Status
                        </Checkbox>
                    </div>


                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: "100%", backgroundColor: "var(--mute-blue)" }}
                    >
                        {dealer_isEdit ? "Update" : "Submit"}
                    </Button>
                </form>
            </Modal>


            {/* Geoghraphy modal>>> */}
            <Modal
                title="Add Geoghraphy"
                open={geoghraphyModal}
                onCancel={closeModal}
                footer={null} // remove default footer so we can use form submit button
            >
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                    {/* Input Field 1 */}
                    <Form.Item name="country" >
                        <Select
                            showSearch
                            placeholder="Select Country"
                            allowClear
                            // loading={loading}
                            filterOption={(input, option) =>
                                option.label.toLowerCase().includes(input.toLowerCase())
                            }
                            options={countrylist.map((c) => ({ value: c.id, label: c.name }))}
                            onChange={handlecountry}
                        />
                    </Form.Item>

                    <Form.Item name="state" >
                        <Select
                            showSearch
                            placeholder="Select State"
                            allowClear
                            // loading={loading}
                            filterOption={(input, option) =>
                                option.label.toLowerCase().includes(input.toLowerCase())
                            }
                            onChange={(selected, option) => {
                                console.log(option, "selected>>")
                                handlestate(option?.id)
                            }}
                            options={statelist.map((c) => ({ value: c.id, label: c.name, id: c.id }))}
                        />
                    </Form.Item>

                    <Form.Item name="district" >
                        <Select
                            showSearch
                            placeholder="Select district"
                            allowClear
                            // loading={loading}
                            filterOption={(input, option) =>
                                option.label.toLowerCase().includes(input.toLowerCase())
                            }
                            onChange={(selected, option) => {
                                handledistrict(option?.id)

                            }}
                            options={districtList.map((c) => ({ value: c.id, label: c.name, id: c.id }))}
                        />
                    </Form.Item>
                    <Form.Item name="pincode" >
                        <Select
                            showSearch
                            placeholder="Select pincode"
                            allowClear

                            filterOption={(input, option) =>
                                option.label.toLowerCase().includes(input.toLowerCase())
                            }
                            onChange={(selected, option) => {
                                handledistrict(option?.id)

                            }}
                            options={pincodelist.map((c) => ({ value: c.id, label: c.pin_code, id: c.id }))}
                        />
                    </Form.Item>




                    {/* Submit Button */}
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: "100%", backgroundColor: "var(--mute-blue)" }}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>


        </div>

    );
};

export default Dealer_master;
