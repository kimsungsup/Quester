import React, { useEffect, useState } from "react";
import "./css/index.css";
import { UserAgentType } from "../../common/common.inerface";
import Map from "../../components/map/map";

type Props = {
  userAgent: UserAgentType;
};

const Contact = ({ userAgent }: Props) => {
  return (
    <main className="contact-page">
      <div className="background">
        <div className="title font">CONTACT US</div>
      </div>

      <div className="contact">
        <div className="left">
          <div className="content">
            <div className="title font">ADDRESS</div>
            <div className="text">
              대구광역시 달성군 현풍읍 <br className="tablet" /> 테크노중앙대로
              333, R7 (산학협력관)
            </div>
          </div>

          <div className="content">
            <div className="title font">PHONE</div>
            <div className="text">070 - 4458 -5995</div>
          </div>

          <div className="content">
            <div className="title font">E-MAIL</div>
            <div className="text">quester@quester.kr</div>
          </div>
        </div>

        <div className="right">
          <Map />
        </div>
      </div>
    </main>
  );
};

export default Contact;
