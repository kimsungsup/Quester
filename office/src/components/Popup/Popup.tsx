import React, { Dispatch, SetStateAction } from "react";
import "./css/index.css";
type Props = {
  isActive: boolean;
  Active: () => void;
  Cancel: Dispatch<SetStateAction<boolean>>;
};

const Popup = ({ isActive, Active, Cancel }: Props) => {
  if (isActive) {
    return (
      <div className="popup-section">
        <div className="delete-popup">
          <div className="title">항목을 삭제하시겠습니까?</div>
          <div className="sub">
            항목을 삭제하시겠습니까? <br /> 삭제 시 등록했던 정보는 삭제됩니다.
          </div>
          <div className="btn-wrapper">
            <button className="main-btn" onClick={Active}>
              삭제하기
            </button>
            <button
              className="trans-btn"
              onClick={() => {
                Cancel(false);
              }}
            >
              닫기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Popup;
