// import { Dispatch } from "@reduxjs/toolkit";
import React, { ChangeEvent, RefObject, useCallback } from "react";
import { LoadingChange } from "../../../../reducer/config";
import { AppDispatch } from "../../../../";
import { FileReaderBase64, GetSelection } from "../../../../lib/lib";
const dummy = [
  { img: "temp", type: "IMAGE" },
  { img: "youtube", type: "YOUTUBE" },
  { img: "link", type: "LINK" },
  { img: "file", type: "FILE" },
];

function Insert({
  setIsUp,
  dispatch,
  type,
  ScreenRef,
  id,
}: {
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
}) {
  const __fileReader = useCallback(
    (file: File) => {
      return new Promise((resolv, reject) => {
        FileReaderBase64(file, `/${type}/${id}/${file.name}`).then(
          ({ url }) => {
            if (ScreenRef.current) {
              const ima = document.createElement("img");
              const text = document.createElement("div");
              ima.className = "template-img";
              ima.alt = file.name;
              ima.src = url;
              const selection = GetSelection();
              if (selection) {
                selection.collapse(false);
                selection.insertNode(text);
                selection.insertNode(ima);
              } else {
                ScreenRef.current.appendChild(ima);
                ScreenRef.current.appendChild(text);
              }
              resolv(true);
            }
          }
        );
      });
    },
    [ScreenRef, type, id]
  );

  const __imageUpdate = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(LoadingChange(true));
      if (e.target.files) {
        let fileList = Object.values(e.target.files);
        Promise.all(
          fileList.map((item) => {
            return __fileReader(item);
          })
        ).then(() => {
          dispatch(LoadingChange(false));
        });
      }
    },
    [__fileReader, dispatch]
  );

  return (
    <div className="insert-wrapper">
      {dummy.map(({ img, type }, idx) => {
        return (
          <label
            className="test-img"
            key={idx}
            onClick={() => {
              if (type !== "IMAGE" && type !== "SUMMARY") {
                setIsUp({
                  status: true,
                  type: type,
                });
              }
            }}
          >
            {type === "IMAGE" ? (
              <input
                type="file"
                style={{ opacity: 0 }}
                multiple={true}
                accept="image/x-png,image/gif,image/jpeg"
                onChange={__imageUpdate}
              />
            ) : undefined}
            <img src={`/assets/editor/${img}.svg`} alt={`${img}`} />
          </label>
        );
      })}
    </div>
  );
}

export default Insert;
