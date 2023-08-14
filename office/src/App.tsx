import "./core/core.css";
import React, { Suspense, useEffect, useState } from "react";
import { auth } from "./config/firebase";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Loading from "./components/Loading/Loading";
import Toast from "./components/Toast/Toast";
import QuestionListContainer from "./containers/Question/QuestionListContainer";
import QuestionDetailContainer from "./containers/Question/QuestionDetailContainer";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((e) => {
      if (e) {
        setIsLogin(true);
      }
    });

    return () => {};
  }, []);

  return isLogin ? (
    <BrowserRouter>
      <Header setIsLogin={setIsLogin} />
      <SideBar />
      <Loading />
      <Toast />
      <Suspense>
        <Routes>
          <Route path="/question" element={<QuestionListContainer />} />
          <Route
            path="/question/detail"
            element={<QuestionDetailContainer />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Toast />
      <Loading />
      <Suspense>
        <Routes>
          <Route path="/*" element={<Login setIsLogin={setIsLogin} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
