import React from "react";
import "./css/index.css";
import { UserAgentType } from "../../common/common.inerface";
import { Link } from "react-router-dom";

type Props = {
  userAgent: UserAgentType;
};

const Main = ({ userAgent }: Props) => {
  return (
    <main className="main-page">
      <div className="main-section">
        <div className="section-wrapper">
          <div className="title-section">
            <div className="title font">
              MORE REALISTIC,
              <br />
              MORE MEANINGFUL{" "}
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

      <div className="main-section1">
        <div className="gradation-section">
          <img src="/assets/main/pc/section1-gradation1.svg" alt="icon" />
        </div>
        <div className="wrapper">
          {userAgent === "pc" ? (
            ""
          ) : (
            <div className="gradation-tablet">
              <img src="/assets/main/pc/section1-gradation1.svg" alt="icon" />
            </div>
          )}
          <div className="text-section">
            <img src="/assets/common/logo-text.svg" alt="logo" />
            <div className="text">
              퀘스터는 <span>독창적이고 차별적인</span> <br />
              <span>기술과 아이디어를</span> 바탕으로 <br />
              <span>가상 현실 서비스가 나아갈 방향을</span>
              <br /> 제시할 것입니다
            </div>
          </div>

          <div className="icon-section">
            <img
              src={`/assets/main/${userAgent}/section1-gradation2.svg`}
              alt="icon"
            />
          </div>
        </div>
      </div>

      <div className="main-section2">
        <div className="title font">OUR MISSION</div>
        <div className="line"></div>
        <div className="section2-background">
          <div className="text">
            가상 현실은 차원을 뛰어넘어 사 <br className="mb" />
            람들의 <span>문화와 여가,</span>
            <br /> <span>교육과 산업 그 모든 분야</span>를 <br />
            <span>
              {" "}
              혁신적으로 확장시키고,
              <br className="mb" /> 변화
            </span>
            시킬 것입니다
          </div>
        </div>
      </div>

      <div className="main-section3">
        <div className="title font">
          ABOUT
          <br /> BUSINESS
        </div>

        <div className="section3-content">
          {section3.map((item, idx) => {
            return (
              <div key={idx} className="box-wrapper">
                <div className={`left ${item.type}`}>
                  <div className="icon">
                    <img src={item.img} alt="" />
                  </div>

                  <div className="name">
                    <img src={item.TextImg} alt="" />
                  </div>
                </div>
                <div className="right">
                  <div className="title font">{item.title}</div>
                  <div className="subtitle">{item.subtitle}</div>
                  <div className="text">{item.text}</div>

                  <button className="more-btn">
                    <Link to={item.link}>
                      <img src="/assets/common/more.svg" alt="" />
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="main-section4">
        <div className="section4-background">
          <div className="title font">HISTORY</div>
          <div className="text">
            퀘스터는 끊임없는 도전으로 수많은 실적들을 <br /> 일궈오며{" "}
            <span>성장 가능성을 입증 </span>해오고 있습니다 <br /> 앞으로도{" "}
            <span>높은 목표와 가치를 바라보며 </span>
            <br />
            <span> 더욱 빠르게 성장 </span>해나갈 것입니다
          </div>
        </div>

        <div className="section4-history">
          <img
            src={`/assets/main/${userAgent}/section4-history.png`}
            srcSet={`/assets/main/${userAgent}/section4-history@2x.png 2x, /assets/main/${userAgent}/section4-history@3x.png 3x`}
            alt="history"
          />
        </div>
      </div>

      <div className="main-section5">
        <div className="section5-background">
          <div className="title-wrapper">
            <div className="left">
              <div className="img">
                <img src="/assets/common/contact-us.svg" alt="" />
              </div>
              <div className="title font">
                CONTACT <br className="pc" /> <br className="tablet" />
                US
              </div>
              <button className="more-btn">
                <Link to="/contact">
                  <img src="/assets/common/more.svg" alt="btn" />
                </Link>
              </button>
            </div>
            <div className="right">
              <div className="content">
                <div className="title font">ADDRESS</div>
                <div className="text">
                  대구광역시 달성군 현풍읍
                  <br className="mb" /> 테크노중앙대로 333, R7 (산학협력관)
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

              {userAgent === "mb" ? (
                <button className="more-mb">
                  <Link to="/contact">
                    <img src="/assets/common/more.svg" alt="btn" />
                  </Link>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;

const section3 = [
  {
    img: "/assets/main/pc/section3-icon1.svg",
    TextImg: "/assets/main/pc/section3-name1.svg",
    title: (
      <>
        QUESTER
        <br />
        MOTION GLOVE
      </>
    ),

    subtitle: (
      <>
        외란에도 강한 성능과 뛰어난
        <br /> 추적 속도를 자랑하는
        <br /> 혁신적인 핸드 트래킹 컨트롤러
      </>
    ),
    text: (
      <>
        Quester Motion Glove는 서울대학교 이동준 교수 <br className="tablet" />
        연구실에서 개발한 <br className="pc" />
        영상-관성 센서 융합 알고리즘을 활용해 <br className="tablet" /> 기존
        핸드 트래킹 컨트롤러의 <br className="pc" />
        문제점을 해결하고, <br className="tablet" /> 고성능 · 저비용 퍼포먼스를
        보여줍니다.
      </>
    ),
    link: "/technology",
  },

  {
    type: "green",
    img: "/assets/main/pc/section3-icon2.svg",
    TextImg: "/assets/main/pc/section3-name2.svg",
    title: (
      <>
        PLAY THE LAB, <br />
        PLAB
      </>
    ),

    subtitle: (
      <>
        이공계 융복합 인재 양성을 <br />
        위한 최선의 실험 교육 플랫폼
      </>
    ),
    text: (
      <>
        PLAB은 현실적인 가상 실험(Realistic Virtual Experiment) <br />
        소프트웨어로, 높은 자유도의 가상 실험 콘텐츠를 구현하여 <br />
        기존 실험 교육의 매커니즘을 혁신합니다.
      </>
    ),

    link: "/education",
  },
];
