import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./css/index.css";
import { RootState } from "../../reducer";
import { ToastChange } from "../../reducer/config";
import { Toastface } from "../../interface/redux/redux.interface";
function Toast() {
  const dispatch = useDispatch();
  const { active, content } = useSelector<RootState, Toastface>(
    (state) => state.config.toast
  );
  useEffect(() => {
    if (active) {
      setTimeout(() => {
        dispatch(ToastChange({ active: false, content: "" }));
      }, 2000);
    }

    return () => {};
  }, [active, dispatch, content]);

  return <div className={`toast ${active ? "toast-on" : ""}`}>{content}</div>;
}

export default Toast;
