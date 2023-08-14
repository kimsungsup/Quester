import React, { RefObject, useCallback } from "react";
import Link from "./Link";
import UploadFile from "./UploadFile";
import Youtube from "./Youtube";
import { popupinter } from "../interface/editorinterface";

function Popup({
  isUp: { status, type },
  setIsUp,
  ScreenRef,
  id,
  category,
}: {
  isUp: popupinter;
  setIsUp: React.Dispatch<
    React.SetStateAction<{
      status: boolean;
      type: string;
    }>
  >;
  ScreenRef: RefObject<HTMLDivElement>;
  id: string;
  category: "news" | "video" | "eng";
}) {
  const __close = useCallback(() => {
    setIsUp({
      status: false,
      type: "",
    });
  }, [setIsUp]);
  return status ? (
    <div className="popup-pack">
      <div className="back-black" />
      <div
        className="popup-main"
        style={type === "VIDEO" ? { width: "663px" } : undefined}
      >
        {type === "LINK" ? (
          <Link __close={__close} ScreenRef={ScreenRef} />
        ) : type === "FILE" ? (
          <UploadFile
            __close={__close}
            ScreenRef={ScreenRef}
            id={id}
            category={category}
          />
        ) : (
          <Youtube __close={__close} ScreenRef={ScreenRef} />
        )}
      </div>
    </div>
  ) : (
    <div />
  );
}

export default Popup;
