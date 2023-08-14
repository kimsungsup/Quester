import React, { Dispatch, SetStateAction, useCallback } from "react";
import "./css/index.css";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

const Header = ({
  setIsLogin,
}: {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}) => {
  const Logout = useCallback(() => {
    signOut(auth).then(() => {
      setIsLogin(false);
    });
  }, [setIsLogin]);

  return (
    <header>
      <div className="left">
        <div className="logo-wrapper">
          <img src="/assets/header/logo.svg" alt="" />
        </div>
        <div className="back-office-title">백오피스</div>
      </div>
      <button className="logout-btn" onClick={Logout}>
        로그아웃
      </button>
    </header>
  );
};

export default Header;
