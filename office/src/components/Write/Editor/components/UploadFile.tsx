import React, { RefObject, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { FileReaderBase64, GetSelection } from "../../../../lib/lib";
import { LoadingChange } from "../../../../reducer/config";
function UploadFile({
  __close,
  ScreenRef,
  category,
  id,
}: {
  __close: () => void;
  ScreenRef: RefObject<HTMLDivElement>;
  id: string;
  category: "news" | "video" | "eng";
}) {
  const dispatch = useDispatch();
  const [File, setFile] = useState<undefined | FileList>(undefined);

  const __uploadFile = useCallback(
    (file: File) => {
      return new Promise((resolve, reject) => {
        FileReaderBase64(file, `${category}/${id}/${file.name}`)
          .then(({ url }) => {
            if (ScreenRef.current) {
              let linkelement = document.createElement("button");
              linkelement.className = "file-template";
              linkelement.contentEditable = "false";
              linkelement.draggable = true;
              let urldiv = document.createElement("div");
              urldiv.innerText = url;
              urldiv.style.display = "none";
              linkelement.append(urldiv);
              let leftimg = document.createElement("img");
              leftimg.src = "/assets/editor/down.svg";
              leftimg.alt = "파일";
              leftimg.className = "file-asset";
              let title = document.createElement("div");
              title.className = "link-title";
              title.innerHTML = file.name;
              linkelement.appendChild(leftimg);
              linkelement.appendChild(title);
              const text = document.createElement("div");
              const selection = GetSelection();
              if (selection) {
                selection.insertNode(text);
                selection.insertNode(linkelement);
              } else {
                ScreenRef.current.appendChild(linkelement);
                ScreenRef.current.appendChild(text);
              }
              resolve(true);
            } else {
              alert("에디터가 존재하지 않습니다");
            }
          })
          .catch(() => {
            dispatch(LoadingChange(false));
            alert("파일 업로드에 실패했습니다.");
          });
      });
    },
    [dispatch, ScreenRef, id, category]
  );
  const __readFile = useCallback(() => {
    if (File) {
      let fileList = Object.values(File);
      dispatch(LoadingChange(true));
      Promise.all(
        fileList.map(async (item) => {
          const result = await __uploadFile(item).then((result) => {
            return result;
          });
          return result;
        })
      )
        .then(() => {
          dispatch(LoadingChange(false));
          __close();
        })
        .catch(() => {
          dispatch(LoadingChange(false));
        });
    }
  }, [File, dispatch, __close, __uploadFile]);
  return (
    <div className="popup-wrapper file">
      <img
        src="/assets/editor/cancel.svg"
        alt=""
        className="cancel"
        onClick={__close}
      />
      <div className="popup-title">파일 업로드</div>
      <div
        className="content-wrapper file-content"
        onDrop={(e) => {
          // setFile(e.dataTransfer.files);
          // __readFile(e.dataTransfer.files);
          e.stopPropagation();
          e.preventDefault();
        }}
        onDragOver={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <label
          className="file-insert"
          style={File ? { backgroundColor: "rgb(234,244,252)" } : undefined}
        >
          <img
            src={`/assets/editor/${File ? "blue-" : ""}document.svg`}
            alt="insert"
          />
          <div
            className="insert-title"
            style={File ? { color: "#3597ec" } : undefined}
          >
            {File
              ? File.length > 1
                ? `${File[0].name} 외 ${File.length - 1}개`
                : `${File[0].name}`
              : "파일을 선택 또는 드래그해주세요"}
          </div>
          <input
            type="file"
            multiple={true}
            style={{ display: "none" }}
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files);
              }

              // __readFile(e.target.files);
            }}
          />
        </label>
      </div>
      <div
        className="link-btn file-btn"
        style={File ? undefined : { backgroundColor: "grey" }}
        onClick={() => {
          if (File) {
            __readFile();
          }
        }}
      >
        등록하기
      </div>
    </div>
  );
}

export default UploadFile;
