import React, { useCallback } from "react";
import "./css/index.css";
import { useSelector } from "react-redux";

type Props = {
  title: string;
  type: string;
  data: any;
  placeholder: string;
  catagory: string;
  Update: (type: string, value: string) => void;
  inputType?: string;
};

const InfoInput = ({
  title,
  data,
  Update,
  catagory,
  type,
  placeholder,
  inputType,
}: Props) => {
  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      const newValue = e.target.value;
      Update(catagory, newValue);
    },
    [Update, catagory]
  );

  return (
    <>
      {type === "input" ? (
        <div className="input-section">
          {catagory === "name" ||
          catagory === "phone" ||
          catagory === "email" ? (
            <div className="title-wrapper">
              <div className="title">{title}</div>
              <div className="dot"></div>
            </div>
          ) : (
            <div className="title">{title}</div>
          )}

          <input
            value={data}
            type={inputType ? inputType : "text"}
            placeholder={placeholder}
            onChange={handleChange}
            className={inputType === "right" ? "right" : ""}
          />
        </div>
      ) : (
        <div className="input-section">
          <div className="title">{title}</div>
          <textarea
            onChange={handleChange}
            value={data}
            placeholder={placeholder}
          />
        </div>
      )}
    </>
  );
};

export default InfoInput;
