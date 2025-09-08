// import React, { useState } from "react";
// import "./VehicleDetails.css";
// import { vehiclesData } from "../redux/vehicleData";

// import SprintJr from "../assets/riksha.png";
// import { useDispatch, useSelector } from "react-redux";
// import { setSelectedColor } from "../redux/vehicleSlice";

// const VehicleDetails = () => {



//   const [color, setColor] = useState("blue");

//   const specs = {
//     structure: [
//       { label: "Model", value: "Sprint Jr" },
//       { label: "Seating Capacity", value: "D+4" },
//       { label: "Body Type", value: "Metal" },
//       { label: "Roof Type", value: "Soft Top" },
//       { label: "Chassis", value: "Sturdy Boron Steel Chassis" },
//     ],
//     dimension: [
//       { label: "Dimensions- LxWxH", value: "2760 x 995 x 1780" },
//       { label: "Wheel Base", value: "1120 mm" },
//       { label: "Ground Clearance", value: "220 mm" },
//       { label: "Kerb weight", value: "390 Kgs" },
//       { label: "GVW", value: "740 Kgs" },
//     ],
//     drivechain: [
//       { label: "Peak Speed (Watt)", value: "1950 watt" },
//       { label: "Peak Torque (Nm)", value: "19 Nm" },
//     ],
//     performance: [
//       { label: "Top Speed", value: "25 Km/hr" },
//       { label: "Certified Range", value: "120 Kms" },
//       { label: "Drive Mode", value: "Single speed" },
//     ],
//   };

//   const dispatch = useDispatch();
//   const { selectedvehicle , selectedColor} = useSelector((store) => store.vehicle)

//   console.log(vehiclesData, selectedvehicle, "vehiclesData")
//   const vehicle = vehiclesData[selectedvehicle];
//   console.log(vehicle, "vehicle>>")
//   const image = vehicle && vehicle?.images[selectedColor];

//   return (


//     <div className="vehicle-details">
//       {/* Left Section */}
//       <div className="vehicle-image-section">
//         <img src={image} alt={selectedvehicle} className="vehicle-img_" />

//         <div className="color-picker">
//           <span>COLOR</span>
//           <div className="colors">
//             {Object.keys(vehicle?.images).map((color) => (
//               <span
//                 key={color}
//                 className={`dot ${color} ${selectedColor === color ? "active" : ""}`}
//                 onClick={() => dispatch(setSelectedColor(color))}
//               ></span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="vehicle-specs">
//         <SpecCard title="STRUCTURE" data={vehicle.specs.structure} />
//         <SpecCard title="DIMENSION & WEIGHT" data={vehicle.specs.dimension} />
//         <SpecCard title="DRIVECHAIN" data={vehicle.specs.drivechain} />
//         <SpecCard title="PERFORMANCE" data={vehicle.specs.performance} />
//       </div>
//     </div>
//   );
// };

// // Reusable Spec Card
// const SpecCard = ({ title, data }) => {
//   return (
//     <div className="spec-card">
//       <h3>{title}</h3>
//       <ul>
//         {data.map((item, i) => (
//           <li key={i}>
//             <span>{item.label}</span>
//             <span>{item.value}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VehicleDetails;



import React, { useEffect, useState } from "react";
import "./VehicleDetails.css";
import { vehiclesData } from "../redux/vehicleData";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedColor } from "../redux/vehicleSlice";

const VehicleDetails = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const dispatch = useDispatch();
  const { selectedvehicle, selectedColor } = useSelector((store) => store.vehicle);

  const vehicle = vehiclesData[selectedvehicle];
  const image = vehicle && vehicle?.images[selectedColor];


  useEffect(() => {
    setCurrentSlideIndex(0)
    dispatch(setSelectedColor(Object.keys(vehicle?.images)[0]))

  }, [selectedvehicle])

  // Define slides (each slide has multiple sections)
  const slides = [
    [
      { title: "STRUCTURE", data: vehicle?.specs.structure },
      { title: "DIMENSION & WEIGHT", data: vehicle?.specs.dimension },
      { title: "DRIVECHAIN", data: vehicle?.specs.drivechain },
      { title: "PERFORMANCE", data: vehicle?.specs.performance },
    ],
    [
      { title: "COMFORT FEATURES", data: vehicle?.specs.comfort },
      { title: "SUSPENSIONS & SAFETY", data: vehicle?.specs.safety },
      { title: "BATTERY & CHARGING", data: vehicle?.specs.battery },
      { title: "WARRANTY & SERVICES", data: vehicle?.specs.warranty },
    ],
  ];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="vehicle-details">
      {/* Left Section */}
      <div className="vehicle-image-section">
        <img src={image} alt={selectedvehicle} className="vehicle-img_" />

        <div className="color-picker">
          <span>COLOR</span>
          <div className="colors">
            {Object.keys(vehicle?.images).map((color) => (
              <span
                key={color}
                className={`dot ${color} ${selectedColor === color ? "active" : ""}`}
                onClick={() => dispatch(setSelectedColor(color))}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Carousel */}
      <div className="vehicle-specs">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="spec-slide">
          {slides[currentSlideIndex].map((section, idx) => (
            <SpecCard key={idx} title={section.title} data={section.data} />
          ))}
        </div>

        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>

        {/* Dots for navigation */}
        <div className="slide-dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${currentSlideIndex === i ? "active" : ""}`}
              onClick={() => setCurrentSlideIndex(i)}
            ></span>
          ))}
        </div>
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
        {data?.map((item, i) => (
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
