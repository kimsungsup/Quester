import React, { Dispatch, SetStateAction } from "react";

type Props = {
  data: {
    title: string;
    placeholder: string;
    type: string;
  };
  setId: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
};

const LoginInput = ({
  data: { title, placeholder, type },
  setId,
  setPassword,
}: Props) => {
  return (
    <div className="input-section">
      <div className="title">{title}</div>
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          if (type === "id") {
            setId(e.target.value);
          } else {
            setPassword(e.target.value);
          }
        }}
      />
    </div>
  );
};

export default LoginInput;
