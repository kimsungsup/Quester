import React from "react";
import "./css/index.css";
import { UserAgentType } from "../../common/common.inerface";
import Partnea from "../../components/Partner/Partner";
import Educationsilde from "../../components/education/Educationsilde";

type Props = {
  userAgent: UserAgentType;
};

const Education = ({ userAgent }: Props) => {
  return (
    <main className="education-page">
      <div className="section">
        <div className="left">
          <img src="/assets/education/pc/plab.svg" alt="" />
          <div className="title">
            가상 실험실의 세계로 <br />
            PLAY THE LAB, <br /> PLAB과 함께 하세요
          </div>

          <button className="contact">
            <div className="text">문의하기 바로가기</div>
            <img src="/assets/common/arrow.svg" alt="" />
          </button>
        </div>

        <div className="right">
          <img src="/assets/education/pc/computer.png" alt="" />
        </div>

        <div className="back">
          <img src="/assets/education/pc/section-back.svg" alt="" />
        </div>
      </div>

      <div className="section1">
        <div className="wrapper">
          <img src="/assets/education/pc/logo.svg" alt="" />

          <div className="text">
            이제껏 경험해보지 못한 <br />
            새로운 과학 교육 콘텐츠
          </div>

          <div className="sub">
            실험실에서 직접 실험하는 것과 같은 높은 수준의 자유도 <br /> PLAB의
            가상 실험과 함께라면 우리의 교육이 새로워질 거예요
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="title-wrapper">
          <div className="title">POINT 01</div>
          <div className="text">
            플랩은 학생들을 위해 <br />더 나은 과학교육을 고민하고 연구합니다
          </div>
          <div className="sub">
            플랩은 가상 실험을 통해 혁신적이고 <br />
            주도적인 과학 교육을 추구하고자 합니다
          </div>
        </div>

        <div className="wrapper">
          {section2.map((item, idx) => {
            return (
              <div key={idx} className={`box-wrapper ${item.type}`}>
                <div className="left">
                  <div className="number">{item.number}</div>
                  <div className="title">{item.title}</div>
                  <div className="text">{item.text}</div>
                </div>

                <div className="right">
                  <img src={item.img} srcSet={item.srcSet} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="section3">
        <div className="title-wrapper">
          <div className="title">POINT 02</div>
          <div className="text">검증된 교육 효과를 경험해보세요</div>
          <div className="sub">
            학생들이 안전하고 주체적으로 <br />
            실험할 수 있는 플랩의 가상 실험실
          </div>
        </div>

        <div className="wrapper">
          <Educationsilde />
        </div>
      </div>
    </main>
  );
};

export default Education;

const section2 = [
  {
    img: "/assets/education/pc/section2-01.png",
    srcSet:
      "/assets/education/pc/section2-01@2x.png 2x, /assets/education/pc/section2-01@3x.png 3x",
    title: (
      <>
        실험의 주인이 <br />
        직접 되어볼 수 있어요
      </>
    ),
    number: "01",
    text: (
      <>
        정해진 순서와 방법만을 따라가며 진행해야 했던 <br />
        기존 시뮬레이션 콘텐츠와 달리, <br />
        PLAB은 학생들이 주체적으로 실험을 할 수 있어요
      </>
    ),
  },

  {
    img: "/assets/education/pc/section2-02.png",
    srcSet:
      "/assets/education/pc/section2-02@2x.png 2x, /assets/education/pc/section2-02@3x.png 3x",
    title: (
      <>
        평소에 접하기 어려웠던 <br />
        실험 기구를 만나보세요
      </>
    ),
    number: "02",
    text: (
      <>
        PLAB에서는 평소 접하기 어려운 고가의 실험 기구를 <br />
        조작할 수 있으며, 위험한 실험도 진행할 수 있어요 <br />
        학생들의 창의성과 탐구심을 자극하는 다양한 경험을 제공해보세요 <br />
      </>
    ),

    type: "last",
  },

  {
    img: "/assets/education/pc/section2-03.png",
    srcSet:
      "/assets/education/pc/section2-03@2x.png 2x, /assets/education/pc/section2-03@3x.png 3x",
    title: (
      <>
        실험의 주인이 <br />
        직접 되어볼 수 있어요
      </>
    ),
    number: "03",
    text: (
      <>
        정해진 순서와 방법만을 따라가며 진행해야 했던 <br />
        기존 시뮬레이션 콘텐츠와 달리, <br />
        PLAB은 학생들이 주체적으로 실험을 할 수 있어요
      </>
    ),
  },
];
