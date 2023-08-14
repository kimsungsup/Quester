import React, { useState, RefObject } from "react";
import "./css/index.css";
import EdiHeader from "./components/EdiHeader";
import Screen from "./components/Screen";
import Popup from "./components/Popup";
import { useDispatch } from "react-redux";

type Props = {
  ScreenRef: RefObject<HTMLDivElement>;
  type: "news" | "video" | "eng";
  id: string;
  title: string;
  isBlind?: boolean;
};

/** 에디터 */
function Editor({ ScreenRef, type, id, title, isBlind }: Props) {
  const dispatch = useDispatch();
  const [isUp, setIsUp] = useState({
    status: false,
    type: "",
  });

  return (
    <div
      className="editor-type"
      style={isBlind ? { display: "none" } : undefined}
    >
      <div className="title">{title}</div>
      <div className="editor">
        <div className="editor-wrapper">
          <EdiHeader
            setIsUp={setIsUp}
            dispatch={dispatch}
            type={type}
            ScreenRef={ScreenRef}
            id={id}
          />
          <Screen ScreenRef={ScreenRef} />
        </div>
        <Popup
          isUp={isUp}
          setIsUp={setIsUp}
          ScreenRef={ScreenRef}
          id={id}
          category={type}
        />
      </div>
    </div>
  );
}

export default Editor;
