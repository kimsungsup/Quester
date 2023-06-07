import React, { useEffect, useState } from "react";
import "./css/index.css";
import { UserAgentType } from "../../common/common.inerface";

const Partnea = () => {
  return (
    <div className="partnea">
      <div className="content">
        {partnea.map((item, idx) => {
          return (
            <div key={idx} className="box">
              <img src={item} alt="" />
            </div>
          );
        })}
        {partnea.map((item, idx) => {
          return (
            <div key={idx} className="box">
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partnea;

const partnea = [
  "/assets/education/pc/partner1.svg",
  "/assets/education/pc/partner2.svg",
  "/assets/education/pc/partner3.svg",
  "/assets/education/pc/partner4.svg",
  "/assets/education/pc/partner5.svg",
];
