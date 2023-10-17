import React from "react";
import "./css/index.css";
import { UserAgentType } from "../../common/common.inerface";

type Props = {
  userAgent: UserAgentType;
};

const Footer = ({ userAgent }: Props) => {
  return (
    <footer>
      <div className="footer-content-section">
        <div className="footer-content-left">
          <div className="logo-wrapper">
            <img src="/assets/footer/logo.svg" alt="quester" />
          </div>
          <div className="footer-content">
            <div className="footer-text">
              {" "}
              퀘스터 | 대표 이정우 {userAgent === "mb" ? <br /> : "|"}{" "}
              사업자등록번호 464-81-02569
              {userAgent !== "mb" ? <br /> : " | "}
              <span>약관 및 정책</span>
              {userAgent !== "mb" && (
                <div className="copy-right">
                  Copyright QUESTER, All Rights Reserved
                </div>
              )}
            </div>

            <div className="footer-list">
              {layouts.map(({ img, content }, idx) => {
                return (
                  <div key={idx} className="list-content">
                    <div className="list-img">
                      <img src={`/assets/footer/${img}.svg`} alt={img} />
                    </div>
                    <div className="list-content">{content}</div>
                  </div>
                );
              })}
            </div>
          </div>
          {userAgent === "mb" && (
            <div className="copy-right">
              Copyright QUESTER, All Rights Reserved
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const layouts = [
  {
    img: "place",
    content: `대구광역시 달성군 현풍읍
테크노중앙대로 333, R7 (산학협력관)`,
  },

  {
    img: "tel",
    content: "070-4458-5995",
  },
  {
    img: "mail",
    content: "quester@quester.kr",
  },
];
