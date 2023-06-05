import React, { useEffect, useState } from "react";
import "./css/index.css";
import { UserAgentType } from "../../common/common.inerface";

type Props = {
  userAgent: UserAgentType;
};

const Main = ({ userAgent }: Props) => {
  return (
    <main className="main-page">
      <div className="main-section">
        <div className="section-wrapper">
          <div className="title-section">
            <div className="title">
              More Realistic,
              <br /> More Meaningful{" "}
            </div>
            <div className="subtitle">
              보다 사실적인 가상 공간 구축을 위해
              <br /> 우리는 늘 고민하고, 도전합니다
            </div>
            <div className="text">
              우리는 가상현실의 무한한 가능성을 확신합니다.
              <br /> 모두가 가상 공간 속에서 실감나는 경험을 누릴 수 있도록,
              <br /> 그 새로운 미래를 퀘스터가 이끌어 나가겠습니다
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
