import React from "react";
import devImg from "../assets/dev.gif";
const HomePage = () => {
  return (
    <>
      <div className="parent-container">
        <div className="row h-100 align-items-center gx-0">
          <div className="col-md-6">
            <img src={devImg} alt="loading..." height={600} />
          </div>
          <div className="col-md-6">
            <div className="brand-container">
            <h1 data-aos="slide-right">
                <b>SWATHI VEERAMREDDY</b>
              </h1>
              <h1 data-aos="slide-left">
              <b>Java Developer</b>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;