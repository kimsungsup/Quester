import React, { useEffect, useState } from "react";
import "./App.css";
import { UserAgentType } from "./common/common.inerface";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";

function App() {
  const [userAgent, setUserAgent] = useState<UserAgentType>("pc");
  useEffect(() => {
    function change(e: any) {
      const width = e.target.innerWidth;
      if (width < 1440 && width > 767 && userAgent !== "tablet") {
        setUserAgent("tablet");
      }
      if (width < 768 && userAgent !== "mb") {
        setUserAgent("mb");
      }
      if (width > 1439 && userAgent !== "pc") {
        setUserAgent("pc");
      }
    }
    window.addEventListener("resize", change);
    return () => {
      window.removeEventListener("resize", change);
    };
  }, [userAgent]);
  useEffect(() => {
    const size = window.innerWidth;
    if (size < 1440 && size > 767) {
      setUserAgent("tablet");
    }
    if (size < 768) {
      setUserAgent("mb");
    }
    if (size > 1439) {
      setUserAgent("pc");
    }
    return () => {};
  }, []);
  return (
    <BrowserRouter>
      <Header userAgent={userAgent} />
      <Routes>
        <Route path="/" element={<Main userAgent={userAgent} />} />
        <Route path="/contact" element={<Contact userAgent={userAgent} />} />
        <Route
          path="/education"
          element={<Education userAgent={userAgent} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
