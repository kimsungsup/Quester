import React, { Dispatch, SetStateAction } from "react";
import { useCallback } from "react";
import { useState } from "react";
import LoginInput from "../../components/LoginInput/LoginInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./css/index.css";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { LoadingChange } from "../../reducer/config";
import { useNavigate } from "react-router-dom";

type Props = {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

const Login = ({ setIsLogin }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [passowrd, setPassowrd] = useState("");

  const LoginSubmit = useCallback(() => {
    dispatch(LoadingChange(true));
    signInWithEmailAndPassword(auth, `${id}@quester.com`, passowrd)
      .then((result) => {
        if (result.user) {
          setIsLogin(true);
          navigate("/question");
        }
        dispatch(LoadingChange(false));
      })
      .catch((err) => {
        console.log(err);
        dispatch(LoadingChange(false));
      });
  }, [id, passowrd, setIsLogin, dispatch, navigate]);
  return (
    <main className="login-page">
      <img src="/assets/header/logo.svg" alt="" className="logo" />
      <form
        className="login-content"
        onSubmit={(e) => {
          e.preventDefault();
          LoginSubmit();
        }}
      >
        {Layout.map((item, idx) => {
          return (
            <LoginInput
              key={idx}
              data={item}
              setId={setId}
              setPassword={setPassowrd}
            />
          );
        })}
        <button className="login-btn" onClick={LoginSubmit}>
          로그인
        </button>
      </form>
    </main>
  );
};

export default Login;

const Layout = [
  {
    title: "아이디",
    placeholder: "아이디 입력",
    type: "id",
  },
  {
    title: "비밀번호",
    placeholder: "비밀번호 입력",
    type: "password",
  },
];
