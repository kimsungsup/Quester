import React, { Dispatch, SetStateAction } from "react";

import "./css/index.css";
type JopProps = {
  list: string[];
  selectedItem: number | null;
  dispatch: React.Dispatch<{
    payload: any;
    type: string;
  }>;
  setItem?: Dispatch<SetStateAction<number | null>>;
};

const Jop: React.FC<JopProps> = ({ list, selectedItem, dispatch, setItem }) => {
  const handleItemClick = (idx: number) => {
    if (setItem) {
      if (selectedItem === idx) {
        setItem(null);
      } else {
        setItem(idx);
      }
    } else {
      dispatch({
        type: "category",
        payload: idx,
      });
    }
  };

  return (
    <div className="fillter">
      {list.map((item, idx) => (
        <div className="category" key={idx}>
          <button
            className={`check-btn ${selectedItem === idx ? "checked" : ""}`}
            onClick={() => handleItemClick(idx)}
            type="button"
          >
            {selectedItem === idx && (
              <img src="/assets/common/check.svg" alt="check" />
            )}
          </button>
          <div className="title">{item}</div>
        </div>
      ))}
    </div>
  );
};

export default Jop;
