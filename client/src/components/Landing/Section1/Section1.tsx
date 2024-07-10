import React from "react";
import "./css/index.css";
import { UserAgentType } from "../../../common/common.inerface";
type Props = {
  userAgent: UserAgentType;
};

const Section1 = ({ userAgent }: Props) => {
  return (
    <section className="section1">
      <div className="section1-title-wrapper">
        <div className="font">
          UNLOCK <br /> THE POWER OF MOTION
        </div>
        <div>
          정밀한 손동작 추적으로 <br /> 무한한 가능성을 열어갑니다
        </div>
      </div>
    </section>
  );
};

export default Section1;
