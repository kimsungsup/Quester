import React, { useCallback } from "react";
import "./css/index.css";

type Props = {
  title: string;
  type: string;
  data: any;

  catagory: string;
  Update: (type: string, value: string) => void;
};

const InfoInput = ({ title, data, Update, catagory }: Props) => {
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      if (Update) {
        Update(catagory, newValue);
      }
    },
    [Update, catagory]
  );
  return (
    <>
      <div className="input-section">
        <div className="title">{title}</div>
        <textarea onChange={handleInputChange} value={data} />
      </div>
    </>
  );
};

export default InfoInput;
