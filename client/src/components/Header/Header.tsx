import React, { useCallback, useEffect, useState } from "react";
import "./css/index.css";
import { Link, useLocation } from "react-router-dom";
import { UserAgentType } from "../../common/common.inerface";
type Props = {
  userAgent: UserAgentType;
};

const Header = ({ userAgent }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [nowLang, setNowLang] = useState("KOR");
  const handleButtonClick = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  const ChangeLang = useCallback((item: string) => {
    setNowLang(item);
    setIsOpen(false);
  }, []);

  // const location = useLocation();

  // useEffect(() => {
  //   const root = document.getElementById("root");

  //   function scrollEvent(e: Event) {
  //     const target = e.target as HTMLElement;
  //     const top = target.scrollTop;

  //     if (location.pathname === "/education" && top > 100) {
  //       setHeaderState("education");
  //     } else if (top > 100) {
  //       setHeaderState("black");
  //     } else {
  //       setHeaderState("");
  //     }
  //   }

  //   root?.addEventListener("scroll", scrollEvent);

  //   return () => {
  //     root?.removeEventListener("scroll", scrollEvent);
  //   };
  // }, [location.pathname]);

  return (
    <header>
      <div className={`wrapper ${isOpen ? "open" : ""}`}>
        <Link to={"/"}>
          <img
            src="/assets/header/logo.png"
            srcSet="/assets/header/logo@2x.png 2x, /assets/header/logo@3x.png 3x"
            alt="logo"
          />
        </Link>
        <div className="right">
          <Link to={"/contact"} className="nav-btn gmarket">
            CONTACT US
          </Link>
          <div className="lang-wrapper">
            <button className="lang-btn" onClick={handleButtonClick}>
              {nowLang}
              <img src="/assets/header/arrow.svg" alt="arrow" />
            </button>
            <div className={`lang-select-wrapper ${isOpen && "open-select"}`}>
              {lang_layouts.map((item, idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => ChangeLang(item)}
                    className="lang-select-btn"
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// const layout = [
//   {
//     title: "TECHNOLOGY",
//     link: "/technology",
//   },

//   {
//     title: "EDUCATION",
//     link: "/education",
//   },
//   {
//     title: "CONTACT US",
//     link: "/contact",
//   },
// ];

const lang_layouts = ["ENG", "KOR"];
