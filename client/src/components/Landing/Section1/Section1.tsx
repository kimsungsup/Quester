import React from "react";
import "./css/index.css";
import { UserAgentType } from "../../../common/common.inerface";
type Props = {
  userAgent: UserAgentType;
};

const Section1 = ({ userAgent }: Props) => {
  return (
    <section className="section1">
      <img
        className="section1-img"
        src={`/assets/lading/${userAgent}/section1.png`}
        srcSet={`/assets/lading/${userAgent}/section1@2x.png 2x ,/assets/lading/${userAgent}/section1@3x.png 3x`}
        alt=""
      />
      <div className="section1-title-wrapper">
        <div className="section1-title font">
          UNLOCK <br /> THE POWER OF MOTION
        </div>
        <div className="section1-sub">
          정밀한 손동작 추적으로 <br /> 무한한 가능성을 열어갑니다
        </div>
      </div>
    </section>
  );
};

export default Section1;
