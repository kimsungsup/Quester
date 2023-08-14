import React, { useCallback } from "react";
import "./css/index.css";
import { QuestionInter } from "../../interface/list/list.interface";
import { formatDate, telform } from "../../lib/lib";
import { useNavigate } from "react-router-dom";
type Props = {
  data: QuestionInter;
};

const QuestionDetail = ({
  data: { phone, email, timestamp, text, name, job, team, Route },
}: Props) => {
  const navigate = useNavigate();

  const layouts = [
    {
      tag: "이름",
      content: name,
    },
    {
      tag: "회사명",
      content: job,
    },

    {
      tag: "소속",
      content: team,
    },
    {
      tag: "휴대전화",
      content: telform(String(phone)),
    },

    {
      tag: "이메일",
      content: email,
    },

    {
      tag: "유입경로",
      content: Route,
    },

    {
      tag: "문의내용",
      content: text,
    },
  ];

  return (
    <main className="question-detial-page">
      <div className="title">
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src="/assets/common/back-btn.svg" alt="뒤로가기" />
        </button>
        뒤로가기
      </div>
      <div className="content-box">
        <div className="content-title">
          <b className="title">문의 내용</b>
          <div className="content-right">
            <b>문의일</b>
            <span>{formatDate(timestamp, "-")}</span>
          </div>
        </div>
        {layouts.map(({ tag, content }, idx) => {
          return (
            <div className="box-line" key={idx}>
              <div className="tag">{tag}</div>
              <div className="content">{content}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default QuestionDetail;
