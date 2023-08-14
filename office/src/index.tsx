import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./core/core.css";
import App from "./App";
import { rootReducer } from "./reducer";

const myStore = configureStore({
  reducer: rootReducer,
  devTools: false,
});
export type AppDispatch = typeof myStore.dispatch;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={myStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
