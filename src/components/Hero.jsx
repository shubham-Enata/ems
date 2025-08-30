import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Riksha from "../assets/riksha.png";
import Test_png from '../assets/test.png'
import "./Hero.css";

const Hero = () => {
    return (
       
        <div className="full-bleed">
          <Carousel
            autoplay
            arrows
            dots={false}
            prevArrow={<LeftOutlined className="arrow-btn left" />}
            nextArrow={<RightOutlined className="arrow-btn right" />}
          >
            <div className="hero-slide">
              {/* Text block (sits over the dark band) */}
              <div className="hero-text">
                <h1>MEET THE FUTURE OF URBAN MOBILITY</h1>
                <p>ELECTRIC. EFFICIENT. AFFORDABLE.</p>
              </div>

              {/* Rickshaw image anchored bottom-right */}
              <img className="hero-riksha" src={Riksha} alt="Rickshaw" />
            </div>
          </Carousel>
        </div>
        // <img src={Test_png} height={700} width={1200} ></img>
    );
};

export default Hero;
