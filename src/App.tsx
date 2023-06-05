import React, { useState } from "react";
import "./App.css";
import { UserAgentType } from "./common/common.inerface";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";

function App() {
  const [userAgent, setUserAgent] = useState<UserAgentType>("pc");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main userAgent={userAgent} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
