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
            <img src="/assets/footer/logo.svg" alt="igis" />
          </div>
          <div className="footer-content">
            <div className="footer-text">
              {" "}
              아이지아이에스 | 대표 이호동 | 사업자등록번호 123-12-01234
              <br />
              <span>약관 및 정책</span>
              <div className="copy-right">
                Copyright iGiS, All Rights Reserved
              </div>
            </div>

            <div className="footer-list">
              {layouts.map(({ img, content }, idx) => {
                return (
                  <div key={idx} className="list-content">
                    <div className="list-img">
                      <img src={`/assets/footer/${img}.svg`} alt={img} />
                    </div>
                    <div className="list-content"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const layouts = [
  {
    img: "place",
    content: (
      <>
        [본사] 대구광역시 수성구 알파시티1로 232, 3층 (대흥동)
        <br className="tablet" /> [창원지사] 경상남도 창원시 성산구
        용지로169번길 11-31, 제3층(동진빌딩) (용호동)
      </>
    ),
  },

  {
    img: "tel",
    content: "Tel. 070-8740-5534  |  Fax. 070-8740-1730",
  },
  {
    img: "mail",
    content: "ceo@igis.co.kr",
  },
];
