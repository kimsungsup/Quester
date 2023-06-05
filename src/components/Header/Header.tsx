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
      <header className={HeaderState}></header>
    </>
  );
};

export default Header;

const navItems = [];
