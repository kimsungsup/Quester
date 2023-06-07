import React, { useEffect, useState } from "react";
import "./css/index.css";
import { UserAgentType } from "../../common/common.inerface";
import Partnea from "../../components/Partner/Partner";

type Props = {
  userAgent: UserAgentType;
};

const Education = ({ userAgent }: Props) => {
  return (
    <main className="education-page">
      <div className="section">
        <div className="background">
          <div className="title font">
            PLAY THE LAB,
            <br /> PLAB
          </div>
          <div className="text">
            이공계 융복합 인재 양성을 위한 <br /> 최선의 실험 교육 플랫폼
          </div>

          <div className="line"></div>
        </div>
      </div>

      <div className="section1">
        <div className="wrapper">
          <div className="character">
            <img src="/assets/education/pc/character.svg" alt="character" />
          </div>
          <div className="plab">
            <img src="/assets/education/pc/plab.svg" alt="icon" />
          </div>
          <div className="title">
            PLAB은 현실적인 가상 실험
            <br className="mb" />
            (Realistic Virtual Experiment) <br />
            소프트웨어로, <br className="mb" />
            높은 자유도의 가상 실험 콘텐츠를 구현하여 <br />
            기존 실험 교육의 매커니즘을 혁신합니다
          </div>

          <div className="text">
            퀘스터의 가상 실험 소프트웨어는 <br className="mb" /> LMS 시스템이
            탑재된 교육 플랫폼 내 <br />
            가상 실험 교육 콘텐츠를 제공하며 전용 컨트롤러도{" "}
            <br className="mb" /> 기존 실험 수업을 효과적으로 대체할 수
            있습니다.
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="title font">
          ABOUT <br />
          SERVICE
        </div>

        <div className="content">
          {section2.map((item, idx) => {
            return (
              <div key={idx} className={`box ${item.type}`}>
                <div className="img ">
                  <img src={item.img} alt="icon" />
                </div>

                <div className="gradation">
                  <img src={item.img} alt="icon" />
                </div>

                <div className="title">{item.title}</div>
                <div className="text">{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section3">
        <div className="title-wrapper">
          <div className="title font">PARTNEA</div>
          <div className="text">
            퀘스터는 교육 현장과 소통하며 <br />
            교육적 효과가 높은 콘텐츠만을 개발합니다
          </div>
        </div>

        {/* <Partnea /> */}
      </div>
    </main>
  );
};

export default Education;

const section2 = [
  {
    img: "/assets/education/pc/icon1.svg",
    title: "현실적인 실험",
    text: (
      <>
        자체 개발한 가상 화학반응 엔진 및 가상 실험 기구 간 상호작용 알고리즘을
        소프트웨어 내에 탑재하여 개인 별 실험 결과의 오차를 구현하는 등 콘텐츠의
        자유도를 높여 현실적인 실험이 가능하도록 구성하였습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/icon2.svg",
    title: "안전한 실험",
    text: (
      <>
        가상 공간 속에서의 실험 진행으로 실제 실험 중 발생 가능한 여러 위험
        상황들을 차단하고, 안전 사고의 우려로 인해 현실에서 하기 힘든 실험도
        자유롭게 진행할 수 있습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/icon3.svg",
    title: "현실적인 실험",
    text: (
      <>
        자체 개발한 가상 화학반응 엔진 및 가상 실험 기구 간 상호작용 알고리즘을
        소프트웨어 내에 탑재하여 개인 별 실험 결과의 오차를 구현하는 등 콘텐츠의
        자유도를 높여 현실적인 실험이 가능하도록 구성하였습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/icon4.svg",
    title: "물리적 제약 극복",
    text: (
      <>
        평소 사용하기 어려운 고가의 실험 기구 및 고위험군 화학 물질들을 가상
        공간 속에서 유연하게 다룰 수 있어 학생들에게 소중한 교육 경험을
        제공합니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/icon5.svg",
    title: (
      <>
        높은 몰입도를 통한
        <br className="mb" /> 학습자의 흥미 유발
      </>
    ),
    text: (
      <>
        퀘스터의 가상 실험 소프트웨어는 학습자가 소프트웨어의 조작 방식을 선택할
        수 있습니다. 전용 핸드 트래킹 컨트롤러를 활용하여 보다 실감나는 실험과
        높은 몰입도 제공이 가능해 학습자의 흥미를 유발하기에 효과적입니다.
      </>
    ),

    type: "last",
  },
];
