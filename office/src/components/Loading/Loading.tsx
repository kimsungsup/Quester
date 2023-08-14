import React from "react";
import "./css/index.css";
import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";
import { RootState } from "../../reducer";

const Loading = () => {
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.config.isLoading
  );
  return isLoading ? (
    <div className="loading-section">
      <div className="back-black" />
      <Oval
        width={100}
        height={100}
        color="var(--main)"
        secondaryColor="#fffff"
      />
    </div>
  ) : (
    <></>
  );
};

export default Loading;
