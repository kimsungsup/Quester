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

  const location = useLocation();

  useEffect(() => {
    const root = document.getElementById("root");

    function scrollEvent(e: Event) {
      const target = e.target as HTMLElement;
      const top = target.scrollTop;

      if (location.pathname === "/education" && top > 100) {
        setHeaderState("education");
      } else if (top > 100) {
        setHeaderState("black");
      } else {
        setHeaderState("");
      }
    }

    root?.addEventListener("scroll", scrollEvent);

    return () => {
      root?.removeEventListener("scroll", scrollEvent);
    };
  }, [location.pathname]);

  return (
    <>
      <header className={HeaderState}>
        <div className={`wrapper ${isOpen ? "open" : ""}`}>
          <div className="navbar">
            <Link to="/" className="logo-link">
              {isOpen ? (
                ""
              ) : (
                <img
                  src={
                    location.pathname === "/education"
                      ? "/assets/common/logo-education.svg"
                      : "/assets/common/logo.svg"
                  }
                  alt="logo"
                />
              )}
            </Link>
            {userAgent === "pc" && (
              <div className="pc-nav-wrapper">
                {layout.map(({ title, link }, idx) => {
                  return (
                    <Link
                      to={link}
                      key={idx}
                      className={`pc-nav font ${
                        location.pathname === "/education" && "education"
                      }`}
                    >
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
                  src={`/assets/common/${
                    isOpen
                      ? location.pathname === "/education"
                        ? "cancel"
                        : "cancel"
                      : location.pathname === "/education"
                      ? "menu-education"
                      : "menu"
                  }.svg`}
                  alt={isOpen ? "닫기" : "메뉴"}
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
                className={`mb-menu font `}
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
