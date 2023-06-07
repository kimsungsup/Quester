import React, { useCallback, useEffect, useState } from "react";
import "./css/index.css";
import { Link, useLocation } from "react-router-dom";
import { UserAgentType } from "../../common/common.inerface";
type Props = {
  userAgent: UserAgentType;
};

const Header = ({ userAgent }: Props) => {
  const [HeaderState, setHeaderState] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  useEffect(() => {
    const root = document.getElementById("root");
    function ScrollEvent(e: Event) {
      const target = e.target as HTMLElement;
      const top = target.scrollTop;
      if (top > 100) {
        setHeaderState("black");
      } else {
        setHeaderState("");
      }
    }
    root?.addEventListener("scroll", ScrollEvent);

    return () => {
      root?.removeEventListener("scroll", ScrollEvent);
    };
  }, []);

  return (
    <>
      <header className={HeaderState}>
        <div className={`wrapper ${isOpen ? "open" : ""}`}>
          <div className="navbar">
            <Link to="/" className="logo-link">
              {isOpen ? "" : <img src="/assets/common/logo.svg" alt="logo" />}
            </Link>
            {userAgent === "pc" && (
              <div className="pc-nav-wrapper">
                {layout.map(({ title, link }, idx) => {
                  return (
                    <Link to={link} key={idx} className="pc-nav font">
                      {title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <div className="right">
            {userAgent === "pc" ? (
              ""
            ) : (
              <button
                className="menu-btn"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <img
                  src={`/assets/common/${isOpen ? "cancel" : "menu"}.svg`}
                  alt="메뉴"
                />
              </button>
            )}
          </div>
        </div>
      </header>
      {userAgent !== "pc" && (
        <div className={`mb-header ${isOpen && "open-header"}`}>
          {layout.map(({ link, title }, idx) => {
            return (
              <Link
                to={link}
                className={`mb-menu font`}
                key={idx}
                onClick={handleButtonClick}
              >
                {title}
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Header;

const layout = [
  {
    title: "TECHNOLOGY",
    link: "/technology",
  },
  {
    title: "EDUCATION",
    link: "/education",
  },
  {
    title: "CONTACT US",
    link: "/contact",
  },
];
