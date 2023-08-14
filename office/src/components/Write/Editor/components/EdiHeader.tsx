import React, { RefObject } from "react";
import Ftsize from "./Ftsize";
import Ftstyle from "./Ftstyle";
import Ftalign from "./Ftalign";
import Insert from "./Insert";
import { AppDispatch } from "../../../../";

type Props = {
  setIsUp: React.Dispatch<
    React.SetStateAction<{
      status: boolean;
      type: string;
    }>
  >;
  dispatch: AppDispatch;
  type: "news" | "video" | "eng";
  ScreenRef: RefObject<HTMLDivElement>;
  id: string;
};

/** 에디터 헤더 */
function EdiHeader({ setIsUp, dispatch, type, ScreenRef, id }: Props) {
  return (
    <div className="edit-header">
      <Ftsize />
      <div className="line" />
      <Ftstyle />
      <div className="line" />
      <Ftalign />
      <div className="line" />
      <Insert
        setIsUp={setIsUp}
        dispatch={dispatch}
        type={type}
        ScreenRef={ScreenRef}
        id={id}
      />
    </div>
  );
}

export default EdiHeader;
