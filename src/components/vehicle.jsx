import React, { useState } from "react";
import "./Vehicles.css";

import SprintJr from "../assets/sprint.png";
import SprintLoaderJr from "../assets/sprint_loader.png";
import CommandoJr from "../assets/commando.png";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedvehicle } from "../redux/vehicleSlice";

const Vehicles = () => {
  const dispatch = useDispatch()
  const [selected, setSelected] = useState("Sprint Jr");
  const { selectedvehicle } = useSelector((store) => store.vehicle)


  const vehicles = [
    { name: "Sprint Jr", image: SprintJr },
    { name: "Sprint Loader Jr", image: SprintLoaderJr },
    { name: "Commando Jr", image: CommandoJr },
  ];

  return (
    <section className="vehicles-section">
      <h2>Drive further, spend less with our Electric Vehicles</h2>

      <div className="vehicles-container">
        {vehicles.map((v) => (
          <div
            key={v.name}
            className={`vehicle-card ${selectedvehicle === v.name ? "active" : ""}`}
            onClick={() => dispatch(setSelectedvehicle(v?.name))}
          >
            <div className="vehicle-img">
              <img src={v.image} alt={v.name} height={210} />
            </div>
            <p>{v.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vehicles;
