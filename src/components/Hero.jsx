import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Riksha from "../assets/riksha.png";
import Riksha1 from "../assets/riksha1.png";
import Riksha2 from "../assets/risksha2.png";
import Riksha3 from "../assets/risksha3.png";

import Test_png from '../assets/test.png'
import "./Hero.css";

const Hero = () => {
  return (


    <div className="full-bleed">
      <Carousel
        autoplay
        arrows
        dots={false}
    
      >
        {/* Slide 1 */}
        <div className="hero-slide">
          <div className="hero-content">
            <div className="hero-text">
              <h1>MEET THE FUTURE OF URBAN MOBILITY</h1>
              <p>ELECTRIC. EFFICIENT. AFFORDABLE.</p>
            </div>
            <div className="hero-middle">
              <h2 className="sprint-text">SPRINT JR</h2>
            </div>
            <div className="hero-image">
              <img className="hero-riksha" src={Riksha1} alt="Rickshaw 1" />
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="hero-slide">
          <div className="hero-content">
            <div className="hero-text">
              <h1>MEET THE FUTURE OF URBAN MOBILITY</h1>
              <p>ELECTRIC. EFFICIENT. AFFORDABLE.</p>
            </div>
            <div className="hero-middle">
              <h2 className="sprint-text">SPRINT LOADER JR</h2>
            
            </div>

            <div className="hero-image">
              <img className="hero-riksha" src={Riksha2} alt="Rickshaw 2" />
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="hero-slide">
          <div className="hero-content">
            <div className="hero-text">
              <h1>MEET THE FUTURE OF URBAN MOBILITY</h1>
              <p>ELECTRIC. EFFICIENT. AFFORDABLE.</p>
            </div>
            <div className="hero-middle">
              <h2 className="sprint-text">Commando Jr</h2>
            </div>
            <div className="hero-image">
              <img className="hero-riksha" src={Riksha3} alt="Rickshaw 3" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>



  );
};

export default Hero;


// import React from "react";
// import { Carousel } from "antd";
// import { LeftOutlined, RightOutlined } from "@ant-design/icons";
// import Riksha from "../assets/riksha.png";
// import Test_png from '../assets/test.png'
// import "./Hero.css";

// const Hero = () => {
//     return (
       
//         <div className="full-bleed">
//           <Carousel
//             autoplay
//             arrows
//             dots={false}
//             prevArrow={<LeftOutlined className="arrow-btn left" />}
//             nextArrow={<RightOutlined className="arrow-btn right" />}
//           >
//             <div className="hero-slide">
//               {/* Text block (sits over the dark band) */}
//               <div className="hero-text">
//                 <h1>MEET THE FUTURE OF URBAN MOBILITY</h1>
//                 <p>ELECTRIC. EFFICIENT. AFFORDABLE.</p>
//               </div>

//               {/* Rickshaw image anchored bottom-right */}
//               <img className="hero-riksha" src={Riksha} alt="Rickshaw" />
//             </div>
//           </Carousel>
//         </div>
//         // <img src={Test_png} height={700} width={1200} ></img>
//     );
// };

// export default Hero;
