import React from "react";
import "./css/index.css";
import { useNavigate } from "react-router-dom";

type HistoryItem = {
  title: string;
  subtitle: string;
  engtitle: string;
  img: string;
};

type Props = {
  addHistory?: () => void;
  title: string;
  subtitle?: string;
  type: "write" | "fix" | "history";
  Post: () => void;
  Remove?: () => void;
};

const WriteTop = ({
  title,
  addHistory,
  type,
  Post,
  Remove,
  subtitle,
}: Props) => {
  const navigate = useNavigate();

  return (
    <div className="write-top-section">
      <div className="left">
        {type === "history" ? (
          ""
        ) : (
          <button
            className="back-btn"
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src="/assets/common/back-btn.svg" alt="뒤로가기" />
          </button>
        )}

        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
      <div className="right">
        {type === "write" ? (
          <button className="main-btn" onClick={Post}>
            등록
          </button>
        ) : type === "history" ? (
          <>
            <button className="main-btn" onClick={addHistory}>
              추가
            </button>
            <button className="save-btn" onClick={Post}>
              저장
            </button>
          </>
        ) : (
          <>
            <button
              className="grey-btn"
              onClick={() => {
                if (Remove) {
                  Remove();
                }
              }}
            >
              삭제
            </button>
            <button className="main-btn" onClick={Post}>
              수정
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WriteTop;
