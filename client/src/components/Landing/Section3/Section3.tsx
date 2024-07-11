import React from "react";
import "./css/index.css";
import { UserAgentType } from "../../../common/common.inerface";
type Props = {
  userAgent: UserAgentType;
};

const Section3 = ({ userAgent }: Props) => {
  return (
    <section className="section3">
      <div className="section3-text-wrapper">
        <div className="section3-tag">기술적용예시</div>
        <div className="section3-title">
          위험한 환경과 먼 거리,{userAgent === "mb" && <br />} 가상현실까지{" "}
          <br />
          <b> 손이 닿지 못한 곳에 손을 닿게 하다</b>
        </div>
        <div className="section3-sub">
          {userAgent === "mb"
            ? `교육, 게임, 의료, 군사, 제조, 로봇 등
다양한 산업 분야에서 활용될 수 있는
핵심적인 원천 기술을 만들어갑니다.
여러 산업에 걸쳐 실제와 가상을 연결하고,
사용자와 로봇 간의 상호작용을 돕는
중추적인 역할을 수행합니다.`
            : `교육, 게임, 의료, 군사, 제조, 로봇 등 다양한 산업 분야에서
활용될 수 있는 핵심적인 원천 기술을 만들어갑니다.
여러 산업에 걸쳐 실제와 가상을 연결하고,
사용자와 로봇 간의 상호작용을 돕는 중추적인 역할을 수행합니다.`}
        </div>
      </div>
      <div className="section3-box">
        <b className="section3-box-title">적용하고자 하는 분야가 있나요?</b>
        <div className="box-select-list">
          {layouts.map((item, idx) => {
            return (
              <button key={idx} className="box-select-btn">
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section3;

const layouts = [
  "의료 실습 및 과학 실험 교육",
  "항공 훈련",
  "직무 훈련",
  "VR 게임 조작",
  "버츄얼 유튜버",
  "로봇 수술 지원",
  "군사 훈련",
  "XR 콘텐츠 제작",
  "원격 협업",
  "작업자 행동 분석",
  "로봇 학습 및 제어",
  "로봇팔 경로 학습",
];
