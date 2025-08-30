import React, { useState } from "react";
import "./VehicleDetails.css";

import SprintJr from "../assets/riksha.png";

const VehicleDetails = () => {
  const [color, setColor] = useState("blue");

  const specs = {
    structure: [
      { label: "Model", value: "Sprint Jr" },
      { label: "Seating Capacity", value: "D+4" },
      { label: "Body Type", value: "Metal" },
      { label: "Roof Type", value: "Soft Top" },
      { label: "Chassis", value: "Sturdy Boron Steel Chassis" },
    ],
    dimension: [
      { label: "Dimensions- LxWxH", value: "2760 x 995 x 1780" },
      { label: "Wheel Base", value: "1120 mm" },
      { label: "Ground Clearance", value: "220 mm" },
      { label: "Kerb weight", value: "390 Kgs" },
      { label: "GVW", value: "740 Kgs" },
    ],
    drivechain: [
      { label: "Peak Speed (Watt)", value: "1950 watt" },
      { label: "Peak Torque (Nm)", value: "19 Nm" },
    ],
    performance: [
      { label: "Top Speed", value: "25 Km/hr" },
      { label: "Certified Range", value: "120 Kms" },
      { label: "Drive Mode", value: "Single speed" },
    ],
  };

  return (
    <div className="vehicle-details">
      {/* Left Section */}
      <div className="vehicle-image-section">
     
        <img src={SprintJr} alt="Sprint Jr" className="vehicle-img_"  />
      

        <div className="color-picker">
          <span>COLOR</span>
          <div className="colors">
            <span
              className={`dot gray ${color === "gray" ? "active" : ""}`}
              onClick={() => setColor("gray")}
            ></span>
            <span
              className={`dot orange ${color === "orange" ? "active" : ""}`}
              onClick={() => setColor("orange")}
            ></span>
            <span
              className={`dot blue ${color === "blue" ? "active" : ""}`}
              onClick={() => setColor("blue")}
            ></span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="vehicle-specs">
        <SpecCard title="STRUCTURE" data={specs.structure} />
        <SpecCard title="DIMENSION & WEIGHT" data={specs.dimension} />
        <SpecCard title="DRIVECHAIN" data={specs.drivechain} />
        <SpecCard title="PERFORMANCE" data={specs.performance} />
      </div>
    </div>
  );
};

// Reusable Spec Card
const SpecCard = ({ title, data }) => {
  return (
    <div className="spec-card">
      <h3>{title}</h3>
      <ul>
        {data.map((item, i) => (
          <li key={i}>
            <span>{item.label}</span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VehicleDetails;
