import React from "react";
import { UserAgentType } from "../../common/common.inerface";
import "./css/index.css";

type Props = {
  userAgent: UserAgentType;
};

const Tech = ({ userAgent }: Props) => {
  return (
    <main className="tech-page">
      <div className="tech-section1">
        <div className="section1-title font">
          INNOVATIVE {userAgent === "mb" && <br />} QUESTER <br /> MOTION GLOVE
        </div>
        <div className="section1-sub">
          외란에도 강한 성능과 뛰어난 {userAgent !== "mb" && <br />} 추적 속도를
          {userAgent === "mb" && <br />}
          자랑하는 혁신적인 핸드 트래킹 컨트롤러
        </div>
        <div className="white-line" />
      </div>
      <div className="tech-section2">
        <div className="point-circle">
          <div className="circle font">POINT</div>
          <div className="circle-back" />
        </div>
        <div className="section2-title">
          개발 영상-관성 센서 융합 {userAgent === "mb" && <br />} 알고리즘을
          활용해 {userAgent !== "mb" && <br />} 기존 핸드 트래킹{" "}
          {userAgent === "mb" && <br />} 컨트롤러의 문제점을 해결하고,{" "}
          {userAgent === "mb" && <br />} 고성능 · 저비용 퍼포먼스
        </div>
        <div className="section2-sub">
          VR 및 XR 시장의 급격한 성장과 HMD(Head Mounted{" "}
          {userAgent === "mb" && <br />} Display)의 대중화로, 기존 핸드 그립
          형태의 컨트롤러는 <br /> 사용 시에 콘텐츠 몰입감 및 현실감 저하 문제가
          {userAgent === "mb" && <br />}
          발생하고 있습니다. 이러한 문제를 해결하기 위해{" "}
          {userAgent !== "pc" && <br />}
          최근에는 손가락의 {userAgent === "pc" && <br />} 움직임까지 인식하는
          {userAgent === "mb" && <br />}
          핸드 트래킹 컨트롤러가 연구 · 개발되고 있습니다.
        </div>
        <div className="section2-img-section">
          <div className="main-img">
            <img
              src={`/assets/tech/${userAgent}/section2-main.png`}
              srcSet={`/assets/tech/${userAgent}/section2-main@2x.png 2x, /assets/tech/${userAgent}/section2-main@3x.png 3x`}
              alt=""
            />
          </div>
          <div className="back-img">
            <img
              src={`/assets/tech/${userAgent}/section2-back.png`}
              srcSet={`/assets/tech/${userAgent}/section2-back@2x.png 2x, /assets/tech/${userAgent}/section2-back@3x.png 3x`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="tech-section3">
        <div className="section3-title font">
          ABOUT <br />
          SERVICE
        </div>
        <div className="section3-sub">
          기존 핸드 그립 형태의 컨트롤러를 {userAgent === "mb" && <br />} 대체할
          목적으로{" "}
          <b>
            정확도와 <br /> 가격 경쟁력을 향상
          </b>
          시킨 {userAgent === "mb" && <br />} 혁신적인 핸드 트래킹 컨트롤러를
          개발
        </div>
        <div className="section3-content">
          <div className="section3-back" />
          <div className="section3-lst">
            {layouts.map((item, idx) => {
              return (
                <div key={idx} className="section3-circle">
                  <div className="circle">{item}</div>
                  <div className="circle-back" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Tech;

const layouts = [
  `높은
정확도`,
  `강건함`,
  `빠른 
추적 속도`,
  `낮은 가격`,
];
