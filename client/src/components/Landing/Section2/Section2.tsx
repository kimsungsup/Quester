import React from "react";
import "./css/index.css";
import { UserAgentType } from "../../../common/common.inerface";
type Props = {
  userAgent: UserAgentType;
};

const Section2 = ({ userAgent }: Props) => {
  return (
    <section className="section2">
      <div className="gradient-line" />
      <div className="section2-text-wrapper">
        <b className="section2-text-color font">OUR MISSION</b>
        <div className="section2-text-title">
          퀘스터는 <br /> <b>핸드트래킹 기술에 집중합니다</b>
        </div>
        <div className="section2-text-sub">
          {userAgent !== "mb" ? (
            <>
              {" "}
              우리는 다중 센서 융합 기술 기반 고성능 핸드 트래킹 글러브를
              개발하며,
              <br />
              이를 확장현실 기반의 거대한 응용 콘텐츠 시장 및 로보틱스 시장으로{" "}
              <br />
              연결하는 것에 도전하고 있습니다.
            </>
          ) : (
            `우리는 다중 센서 융합 기술 기반
고성능 핸드 트래킹 글러브를 개발하며,
이를 확장현실 기반의 거대한 응용 콘텐츠 시장 및
로보틱스 시장으로 연결하는 것에 도전하고 있습니다.`
          )}
        </div>
      </div>
      <img
        className="section2-img"
        src={`/assets/lading/${userAgent}/section2.png`}
        srcSet={`/assets/lading/${userAgent}/section2@2x.png 2x, /assets/lading/${userAgent}/section2@3x.png 3x`}
        alt=""
      />
    </section>
  );
};

export default Section2;
