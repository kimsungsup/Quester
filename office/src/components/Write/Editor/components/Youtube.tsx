import React, { RefObject, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { GetSelection } from "../../../../lib/lib";

function Youtube({
  __close,
  ScreenRef,
}: {
  __close: () => void;
  ScreenRef: RefObject<HTMLDivElement>;
}) {
  const dispatch = useDispatch();
  const [link, setLink] = useState("");
  const __initYoutube = useCallback(() => {
    if (ScreenRef.current) {
      const url = link.split("v=")[1].split("&")[0];
      const wrapper = document.createElement("div");
      wrapper.className = "template-youtube lite";
      wrapper.contentEditable = "false";
      wrapper.draggable = false;
      const frame = document.createElement("iframe");
      frame.src = `https://www.youtube.com/embed/${url}`;
      frame.draggable = false;
      frame.contentEditable = "false";
      frame.width = "100%";
      frame.height = "660px";
      frame.title = "YouTube video player";
      frame.allowFullscreen = true;
      wrapper.appendChild(frame);
      const title = document.createElement("div");
      const sub = document.createElement("div");
      const selection = GetSelection();
      if (selection) {
        selection.collapse(false);
        selection.insertNode(title);
        selection.insertNode(wrapper);
      } else {
        ScreenRef.current.appendChild(wrapper);
        ScreenRef.current.appendChild(title);
        ScreenRef.current.appendChild(sub);
      }
      __close();
    }
  }, [link, __close, dispatch, ScreenRef]);
  return (
    <div className="popup-wrapper" style={{ height: "374px" }}>
      <img
        src="/assets/editor/cancel.svg"
        alt=""
        className="cancel"
        onClick={__close}
      />
      <div className="popup-title">유튜브 등록</div>
      <input
        type="text"
        className="youtube-link"
        onChange={(e) => {
          setLink(e.target.value);
        }}
      />
      <div className="youtube-sub">
        <div className="sub-left">
          <div className="left-title">링크복사방법</div>
          <div className="left-sub">
            URL 업로드는 유튜브 영상만이 등록 가능합니다. <br /> 브라우저 상단의
            주소창에서 주소를 복사하여 등록해주세요.
          </div>
        </div>
        <img
          src="/assets/editor/youtube-sub.png"
          srcSet="/assets/editor/youtube-sub@2x.png 2x,/assets/editor/youtube-sub@3x.png 3x"
          alt="설명"
          className="sub-right"
        />
      </div>
      <div
        className="link-btn"
        style={{
          backgroundColor: link.length > 0 ? undefined : "grey",
        }}
        onClick={() => {
          if (link.length > 0) {
            __initYoutube();
          }
        }}
      >
        등록하기
      </div>
    </div>
  );
}

export default Youtube;
