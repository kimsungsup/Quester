import React, { useCallback, useRef, useState } from "react";
import "./css/index.css";
import { UserAgentType } from "../../common/common.inerface";
import Educationsilde from "../../components/education/Educationsilde";
import CategoryFilter from "../../components/Catagory/CategoryFilter";
import EducationContainer from "../../containers/Education/EducationContainer";

type Props = {
  userAgent: UserAgentType;
};

const Education = ({ userAgent }: Props) => {
  const [allView, setAllView] = useState(false);
  const [review, setReview] = useState<number | null>(0);
  const [selectedCategoryLeft, setSelectedCategoryLeft] = useState<
    number | null
  >(0);
  const [selectedCategoryRight, setSelectedCategoryRight] = useState<
    number | null
  >(null);

  const section8Ref = useRef<HTMLDivElement | null>(null);

  const handleCategoryFilterLeft = useCallback((selectedCategory: number) => {
    setSelectedCategoryLeft(selectedCategory);
    setSelectedCategoryRight(null);
  }, []);

  const handleCategoryFilterRight = useCallback((selectedCategory: number) => {
    setSelectedCategoryRight(selectedCategory);
    setSelectedCategoryLeft(null);
  }, []);

  return (
    <main className="education-page">
      <div className="section">
        <div className="left">
          <img src="/assets/education/pc/plab.svg" alt="" />
          <div className="title">
            가상 실험실의 세계로 <br />
            PLAY THE LAB, <br /> PLAB과 함께 하세요
          </div>

          <button
            className="contact"
            onClick={() => {
              if (section8Ref.current) {
                section8Ref.current.scrollIntoView({ behavior: "smooth" });
              } // 대상 섹션으로 스크롤
            }}
          >
            <div className="text">문의하기 바로가기</div>
            <img src="/assets/common/arrow.svg" alt="" />
          </button>
        </div>

        <div className="right">
          <img src="/assets/education/pc/computer.png" alt="" />
        </div>

        <div className="video-section">
          <video autoPlay loop muted playsInline preload="auto">
            <source src="/assets/video/main.gif" type="video/gif" />
            <source src="/assets/video/main.mp4" type="video/mp4" />
          </video>
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

      {/* <div className="section3">
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
      </div> */}

      <div className="section4">
        <div className="title-wrapper">
          <div className="title">POINT 02</div>
          <div className="text">
            실제 실험, 그 이상의 교육 효과 <br />
            검증된 교육 효과를 경험해보세요
          </div>
          <div className="sub">
            서울대학교를 비롯한 3개 대학교 소속
            <br className="mb" /> 과학교육학 교수진들의 공동연구 결과에 따르면,{" "}
            <br /> PLAB을 활용한 학습 시, 학생들의 자기 주도 학습 능력과{" "}
            <br className="mb" /> 교과 이해도의 매우 큰 향상이 나타났습니다.
          </div>
        </div>
        <div className="wrapper">
          <div className="content-wrapper">
            <div className="title">
              <div className="top">자기 주도 학습 능력</div>
              <div className="text">
                전반적인 학생들의 <br />
                학습능력 향상 및 평균값 향상
              </div>
            </div>
            <div className="content">
              <img src="/assets/education/pc/section4-img1.svg" alt="" />
            </div>
          </div>

          <div className="content-wrapper">
            <div className="title">
              <div className="top blue">교육 이해도</div>
              <div className="text">
                전반적인 학생들의 <br /> 교과이해도 향상 및 평균값 향상
              </div>
            </div>
            <div className="content">
              <img src="/assets/education/pc/section4-img2.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="linear"></div>
      </div>

      <div className={`section5 ${allView && "view-wrapper"} `}>
        <div className="title-wrapper white">
          <div className="title color">POINT 03</div>
          <div className="text white">학생 및 선생님의 생생한 후기</div>
          <div className="sub white">
            가상 실험을 이용하고 학생들과 <br />
            선생님의 솔직한 후기를 확인해보세요
          </div>
        </div>

        {userAgent === "pc" ? (
          <div className={`section5-wrapper ${allView && "view-wrapper"} `}>
            <div className="left">
              <div className="title">
                {" "}
                <div className="line"></div>
                <div className="text">
                  <span>선생님</span> 사용 후기
                </div>
              </div>

              <div className="content-wrapper">
                {section5Left.map((item, idx) => {
                  return (
                    <div key={idx} className={`box ${item.type}`}>
                      <div className="name-wrapper">
                        <div className="img">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="name">{item.name}</div>
                      </div>

                      <div className="text-wrapper">
                        <div className="text">{item.text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="right left">
              <div className="title">
                {" "}
                <div className="line"></div>
                <div className="text">
                  <span>학생</span> 사용 후기
                </div>
              </div>

              <div className="content-wrapper">
                {section5right.map((item, idx) => {
                  return (
                    <div key={idx} className={`box ${item.type}`}>
                      <div className="name-wrapper">
                        <div className="img right">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="name">{item.name}</div>
                      </div>

                      <div className="text-wrapper">
                        <div className="text">{item.text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`section5-wrapper ${allView && "view-wrapper"} ${
              review === 0 && "view-none"
            }`}
          >
            <div className="left">
              <div className="mb-title-wrapper">
                {" "}
                <button
                  className={`text ${review === 0 && "hover"}`}
                  onClick={() => {
                    setReview(0);
                  }}
                >
                  <span>선생님</span> 사용 후기
                  <div className="line-text"></div>
                </button>
                <button
                  className={`text right ${review === 1 && "hover"}`}
                  onClick={() => {
                    setReview(1);
                  }}
                >
                  <span>학생</span> 사용 후기
                  <div className="line-text"></div>
                </button>
              </div>

              {review === 0 ? (
                <div className="content-wrapper">
                  {section5Left.map((item, idx) => {
                    return (
                      <div key={idx} className={`box ${item.type}`}>
                        <div className="name-wrapper">
                          <div className="img">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="name">{item.name}</div>
                        </div>

                        <div className="text-wrapper">
                          <div className="text">{item.text}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="content-wrapper">
                  {section5right.map((item, idx) => {
                    return (
                      <div key={idx} className={`box ${item.type}`}>
                        <div className="name-wrapper">
                          <div className="img right">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="name">{item.name}</div>
                        </div>

                        <div className="text-wrapper">
                          <div className="text">{item.text}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        <button
          className="view-arrow"
          onClick={() => {
            setAllView(!allView);
          }}
        >
          <div className="text">{allView ? "접기" : "후기 더보기"}</div>
          <img
            src="/assets/education/pc/view-arrow.svg"
            alt=""
            className={allView ? "img" : ""}
          />
        </button>
      </div>

      <div className="section6">
        {userAgent === "mb" ? (
          <React.Fragment>
            <div className="left">
              <div className="left-wrapper">
                <div className="title">POINT 04</div>
                <div className="text">
                  교육 커리큘럼에 따라 학년별로 <br />
                  다양한 콘텐츠가 구성되어 있어요
                </div>
                <div className="sub">
                  학생들이 안전하고 주체적으로 <br />
                  실험할 수 있는 플랩의 가상 실험실
                </div>
              </div>

              <div className="right">
                <div className="box">
                  {selectedCategoryLeft === 0 && (
                    <video autoPlay loop muted playsInline preload="auto">
                      <source src="/assets/video/01.gif" type="video/gif" />
                      <source src="/assets/video/01.mp4" type="video/mp4" />
                    </video>
                  )}
                  {selectedCategoryLeft === 1 && (
                    <video autoPlay loop muted playsInline preload="auto">
                      <source src="/assets/video/02.gif" type="video/gif" />
                      <source src="/assets/video/02.mp4" type="video/mp4" />
                    </video>
                  )}

                  {selectedCategoryRight === 0 && (
                    <video autoPlay loop muted playsInline preload="auto">
                      <source src="/assets/video/03.gif" type="video/gif" />
                      <source src="/assets/video/03.mp4" type="video/mp4" />
                    </video>
                  )}

                  {selectedCategoryRight === 1 && (
                    <video autoPlay loop muted playsInline preload="auto">
                      <source src="/assets/video/04.gif" type="video/gif" />
                      <source src="/assets/video/04.mp4" type="video/mp4" />
                    </video>
                  )}

                  {selectedCategoryRight === 2 && (
                    <video autoPlay loop muted playsInline preload="auto">
                      <source src="/assets/video/05.gif" type="video/gif" />
                      <source src="/assets/video/05.mp4" type="video/mp4" />
                    </video>
                  )}

                  {selectedCategoryRight === 3 && (
                    <video autoPlay loop muted playsInline preload="auto">
                      <source src="/assets/video/06.gif" type="video/gif" />
                      <source src="/assets/video/06.mp4" type="video/mp4" />
                    </video>
                  )}

                  {selectedCategoryRight === 4 && (
                    <video autoPlay loop muted playsInline preload="auto">
                      <source src="/assets/video/07.gif" type="video/gif" />
                      <source src="/assets/video/07.mp4" type="video/mp4" />
                    </video>
                  )}
                </div>
              </div>

              <div className="title">
                <div className="middle">
                  <div className="text">중등</div>
                  <div className="line"></div>

                  <CategoryFilter
                    nowCategory={selectedCategoryLeft}
                    onCategoryChange={handleCategoryFilterLeft}
                    categories={[
                      "중등 - 열과 에너지",
                      "중등 - 산과 염기의 특징",
                    ]}
                  />
                </div>

                <div className="middle">
                  <div className="text">고등</div>
                  <div className="line"></div>

                  <CategoryFilter
                    nowCategory={selectedCategoryRight}
                    onCategoryChange={handleCategoryFilterRight}
                    categories={[
                      "고등 화학 1 - 중화적정",
                      "고등 화학 1 - 음극선",
                      "고등 화학 1 - 양적관계",
                      "고등 화학 1 - 전기분해",
                      "고등 화학 1 - 금속의 반응성",
                    ]}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div className="left">
              <div className="left-wrapper">
                <div className="title">POINT 04</div>
                <div className="text">
                  교육 커리큘럼에 따라 학년별로 <br />
                  다양한 콘텐츠가 구성되어 있어요
                </div>
                <div className="sub">
                  학생들이 안전하고 주체적으로 <br />
                  실험할 수 있는 플랩의 가상 실험실
                </div>
              </div>

              <div className="title">
                <div className="middle">
                  <div className="text">중등</div>
                  <div className="line"></div>

                  <CategoryFilter
                    nowCategory={selectedCategoryLeft}
                    onCategoryChange={handleCategoryFilterLeft}
                    categories={[
                      "중등 - 열과 에너지",
                      "중등 - 산과 염기의 특징",
                    ]}
                  />
                </div>

                <div className="middle">
                  <div className="text">고등</div>
                  <div className="line"></div>

                  <CategoryFilter
                    nowCategory={selectedCategoryRight}
                    onCategoryChange={handleCategoryFilterRight}
                    categories={[
                      "고등 화학 1 - 중화적정",
                      "고등 화학 1 - 음극선",
                      "고등 화학 1 - 양적관계",
                      "고등 화학 1 - 전기분해",
                      "고등 화학 1 - 금속의 반응성",
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="right">
              <div className="box">
                {selectedCategoryLeft === 0 && (
                  <video autoPlay loop muted playsInline preload="auto">
                    <source src="/assets/video/01.gif" type="video/gif" />
                    <source src="/assets/video/01.mp4" type="video/mp4" />
                  </video>
                )}
                {selectedCategoryLeft === 1 && (
                  <video autoPlay loop muted playsInline preload="auto">
                    <source src="/assets/video/02.gif" type="video/gif" />
                    <source src="/assets/video/02.mp4" type="video/mp4" />
                  </video>
                )}

                {selectedCategoryRight === 0 && (
                  <video autoPlay loop muted playsInline preload="auto">
                    <source src="/assets/video/03.gif" type="video/gif" />
                    <source src="/assets/video/03.mp4" type="video/mp4" />
                  </video>
                )}

                {selectedCategoryRight === 1 && (
                  <video autoPlay loop muted playsInline preload="auto">
                    <source src="/assets/video/04.gif" type="video/gif" />
                    <source src="/assets/video/04.mp4" type="video/mp4" />
                  </video>
                )}

                {selectedCategoryRight === 2 && (
                  <video autoPlay loop muted playsInline preload="auto">
                    <source src="/assets/video/05.gif" type="video/gif" />
                    <source src="/assets/video/05.mp4" type="video/mp4" />
                  </video>
                )}

                {selectedCategoryRight === 3 && (
                  <video autoPlay loop muted playsInline preload="auto">
                    <source src="/assets/video/06.gif" type="video/gif" />
                    <source src="/assets/video/06.mp4" type="video/mp4" />
                  </video>
                )}

                {selectedCategoryRight === 4 && (
                  <video autoPlay loop muted playsInline preload="auto">
                    <source src="/assets/video/07.gif" type="video/gif" />
                    <source src="/assets/video/07.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>

      <div className="section7">
        <div className="title-wrapper">
          <div className="title">POINT 05</div>
          <div className="text">
            이미 여러 교육기관과 <br />
            함께하고 있어요
          </div>
          <div className="sub">
            여러 학교 및 교육청과 함께하는 플랩은 <br />
            검증된 교육 서비스입니다
          </div>
        </div>

        <div className="section7-wrapper">
          {section7.map((item, idx) => {
            return (
              <div key={idx} className="box">
                <img src={item} alt="" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="section8" ref={section8Ref}>
        <div className="background">
          <EducationContainer userAgent={userAgent} />
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
        정해진 순서와 방법만을 따라가며 진행해야 했던 <br /> 기존 시뮬레이션
        콘텐츠와 달리,
        <br className="mb" /> PLAB은 학생들이
        <br className="pc" /> 주체적으로 실험을 할 수 있어요
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
        학생들의 창의성과 탐구심을 자극하는 다양한 경험을 <br className="pc" />
        제공해보세요 <br />
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
        학습의 깊이를 <br />
        극대화해보세요
      </>
    ),
    number: "03",
    text: (
      <>
        PLAB은 학생들에게 보다 깊은 학습 경험을
        <br className="pc" /> 제공해요 <br />
        자유로운 실험을 통해 과정과 결과를 탐구하고, <br />
        실험 오차와 변인에 대한 이해를 증진시킬 수 <br className="pc" />
        있어요
      </>
    ),
  },
];

const section5Left = [
  {
    img: "/assets/education/pc/emoge1.svg",
    name: "황*한 교수",
    text: (
      <>
        안전하게 실험을 수행하며 학생들에게 다양한 실험 경험을 쌓아 줄 수 있을
        것 같아 앞으로가 더욱 기대가 됩니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/emoge1.svg",
    name: "이*석 교수",
    text: (
      <>
        소프트웨어의 사용이 간편하고 직관적이었습니다. 선생님들도 손쉽게 수업에
        도입하여 학생들의 학습 효과를 높일 수 있을 것 같습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/emoge1.svg",
    name: "한*규 교사",
    text: (
      <>
        저와 학생들 모두에게 상상만 하던 일들을 실행할 수 있게 해준
        기회였습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/emoge1.svg",
    name: "윤*민 교사",
    text: (
      <>
        학생들이 실험에 대한 높은 흥미와 호기심을 보여주었습니다. 가상 화학
        실험실을 통해 더욱 적극적으로 수업에 참여하고, 과학에 대한 흥미를 높이는
        데 큰 도움이 되었습니다.
      </>
    ),
    type: "big",
  },

  {
    img: "/assets/education/pc/emoge1.svg",
    name: "이*은 교사",
    text: (
      <>
        가상 공간임에도 불구하고 학생들에게 현실과 동일한 실험 경험을 제공해줄
        수 있다는 사실이 교사로서 매력적이었습니다. 학생들의 수업 참여도도
        높아지니 앞으로도 사용하고 싶습니다.
      </>
    ),
    type: "big",
  },

  {
    img: "/assets/education/pc/emoge1.svg",
    name: "전*정 교사",
    text: (
      <>
        매번 안전 사고에 대한 우려 때문에 실험을 잘 하지 못했었는데, 학생들에게
        마음껏 실험을 체험할 수 있도록 해줄 수 있게 되어 기쁩니다.
      </>
    ),
    type: "big",
  },

  {
    img: "/assets/education/pc/emoge1.svg",
    name: "김*주 교사",
    text: (
      <>
        PLAB 소프트웨어의 활용은 수업의 다양성을 높여주었습니다. 학생들은 PLAB을
        통해 실험의 다양한 변수를 조작하고 다양한 상황을 경험하며 배운 과학
        이론에 대한 깊은 이해도를 얻을 수 있을 것 같습니다.
      </>
    ),
    type: "big",
  },

  {
    img: "/assets/education/pc/emoge1.svg",
    name: "신*길 교사",
    text: (
      <>
        학교 수업 시간뿐만 아니라 과학 탐구 동아리에서도 학생들이 자유롭게
        사용할 수 있을 것 같습니다. 활용성이 높아보입니다.
      </>
    ),
  },
];

const section5right = [
  {
    img: "/assets/education/pc/emoge3.svg",
    name: "김*훈 학생",
    text: (
      <>
        이 소프트웨어와 함께 수업을 들으니까 똑같은 이론 수업도 참여형으로
        느껴져서 더 집중이 잘 되었습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "이*민 학생",
    text: (
      <>
        현실적으로 대면 실험을 하기 어려운 경우가 많은데, 가상 실험이 이를
        대체할 수 있다는 점이 신기했고, 특히 교과서에서만 접했던 내용을 실험을
        통해 확인해보니 더 이해가 잘 되었습니다.
      </>
    ),

    type: "big",
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "양*준 학생",
    text: (
      <>
        조금 위험한 실험도 자유롭게 해볼 수 있고, 수용액 같은 것을 담을 때에
        원하는 만큼 양을 조절할 수 있어 실제 실험을 하는 것만 같은 느낌을
        받았습니다
      </>
    ),

    type: "big",
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "이*준 학생",
    text: <>실제 실험을 하는 것과 정말 똑같아서 신기하고 놀라웠습니다.</>,
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "강*진 학생",
    text: (
      <>
        컴퓨터 하나만을 가지고 실험을 처음부터 끝까지 완전하게 해볼 수 있다는
        점이 너무 신기하고 좋았습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "류*윤 학생",
    text: (
      <>
        실험 후 뒤처리를 할 필요가 없고 원리를 직관적으로 알 수 있어 좋았습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "강*광 학생",
    text: (
      <>
        실제 실험을 하는 것과 같은 생동감을 느낄 수 있는 동시에, 가상 공간이라는
        장점도 살리고 있어 좋았습니다. 특히, 실험 중에 실수했을 때 초기화를 해서
        빠르게 다시 해볼 수 있다는 점이 마음에 들었습니다.
      </>
    ),

    type: "big",
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "박* 학생",
    text: (
      <>
        평소 화학을 어려워했는데, 실험을 통해 이론을 익히니까 화학에 더 친근하게
        다가갈 수 있었습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "김*아 학생",
    text: (
      <>
        현실에서 사용해보지 못한 다양한 기구를 조작해볼 수 있어 많이 배울 수
        있었습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "이*빈 학생",
    text: (
      <>
        평소 수업보다 재미있었고 더욱 집중할 수 있었으며, 기억에 더 잘
        남았습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "임*민 학생",
    text: (
      <>
        실제로 하지 않아도 실험의 과정과 결과를 알 수 있고, 이를 바탕으로
        보고서까지 작성할 수 있어 신기했습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "김*균 학생",
    text: (
      <>
        이 가상 실험 콘텐츠를 앞으로 수업 시간에 계속 사용하고 싶을 정도로
        흥미로웠습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "심*아 학생",
    text: (
      <>
        친구들과 다같이 실험 순서에 맞춰서 진행을 하는데, 서로 실험 결과
        수치들이 모두 조금씩 다르게 나와서 놀라웠습니다.
      </>
    ),
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "김*지 학생",
    text: (
      <>
        내가 실험을 어떻게 했는지에 따라 결과가 다르게 나오는 걸 보며 직접
        현실에서 실험을 하는 것과 같은 느낌을 받았습니다. 실험이 정말
        현실적이었습니다.
      </>
    ),

    type: "big",
  },

  {
    img: "/assets/education/pc/emoge3.svg",
    name: "임*주 학생",
    text: (
      <>
        실제로 하는 것보다 컴퓨터로 하니까 더 흥미가 생기고, 위험하거나 추가적인
        비용이 드는 것이 아니기 때문에 실험에 있어 더 과감해질 수 있었습니다.
        그래서 다양한 시도를 해볼 수 있었다는 점이 좋았습니다.
      </>
    ),
    type: "big",
  },
];

const section7 = [
  "/assets/education/pc/section7-01.svg",
  "/assets/education/pc/section7-02.svg",
  "/assets/education/pc/section7-03.svg",
  "/assets/education/pc/section7-04.svg",
  "/assets/education/pc/section7-05.svg",
  "/assets/education/pc/section7-06.svg",
  "/assets/education/pc/section7-07.svg",
];
