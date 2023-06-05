import React, { useCallback, useEffect, useState } from "react";
import "./css/index.css";
import { Link, useLocation } from "react-router-dom";
import { UserAgentType } from "../../common/common.inerface";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  userAgent: UserAgentType;
};

const Header = ({ userAgent }: Props) => {
  const [HeaderState, setHeaderState] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
      <header>
        <div className="wrapper">
          <div className="navbar">
            <Link to="/" className="logo-link">
              <img src="/assets/common/logo.svg" alt="quester" />
            </Link>
            {userAgent === "pc" && (
              <div className="pc-nav-wrapper">
                {layout.map(({ title, link }, idx) => {
                  return (
                    <Link to={link} key={idx} className="pc-nav">
                      {title}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </header>
      {userAgent !== "pc" && (
        <div className={`mb-header ${isOpen && "open-header"}`}>
          {layout.map(({ link, title }, idx) => {
            return (
              <Link to={link} className="mb-menu" key={idx}>
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
