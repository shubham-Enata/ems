import { Spin } from "antd";

const Loader = () => {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                // background: "rgba(33, 81, 203, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 9999,
            }}
        >
            <Spin size="large" />
        </div>
    )
};

export default Loader;
