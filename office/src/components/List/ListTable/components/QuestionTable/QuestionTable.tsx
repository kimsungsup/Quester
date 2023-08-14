import React, { Dispatch, SetStateAction } from "react";
import "./css/index.css";
import { QuestionInter } from "../../../../../interface/list/list.interface";
import { NavigateFunction } from "react-router-dom";
import { formatDate, telform } from "../../../../../lib/lib";
type Props = {
  data: QuestionInter[];
  CheckList: string[];
  AllCheck: boolean;
  setAllCheck: Dispatch<SetStateAction<boolean>>;
  UpdateCheckList: (value: string) => void;
  navigate: NavigateFunction;
};

const QuestionTable = ({
  data,
  CheckList,
  UpdateCheckList,
  AllCheck,
  setAllCheck,
  navigate,
}: Props) => {
  return (
    <div className="list-table-content question-table">
      <div className="table-card tag-section">
        <div className="card-content">
          <button
            className={`check-btn ${AllCheck && "check-active"}`}
            onClick={() => {
              setAllCheck(!AllCheck);
            }}
          >
            <img src="/assets/common/check.svg" alt="체크" />
          </button>
          {tag_layouts.map(({ title, type }, idx) => {
            return (
              <div key={idx} className={type}>
                {title}
              </div>
            );
          })}
        </div>
      </div>
      {data.map((item, idx) => {
        const { name, phone, email, timestamp, Route, job, key, team } = item;
        return (
          <div key={idx} className="table-card">
            <div className="card-content">
              <button
                className={`check-btn ${
                  CheckList.includes(key) && "check-active"
                }`}
                onClick={() => {
                  UpdateCheckList(key);
                }}
              >
                <img src="/assets/common/check.svg" alt="체크" />
              </button>
              <div className={`timestamp`}>{formatDate(timestamp, "-")}</div>
              <div className={`name`}>{name}</div>
              <div className={`job`}>{job}</div>
              <div className={`team`}>{team}</div>
              <div className={`phone`}>{telform(String(phone))}</div>
              <div className={`email`}>{email}</div>
            </div>
            <div className="card-btn-wrapper">
              <button
                onClick={() => {
                  navigate("/question/detail", { state: item });
                }}
              >
                상세
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionTable;
const tag_layouts = [
  {
    title: "문의일자",
    type: "timestamp",
  },
  {
    title: "이름",
    type: "name",
  },

  {
    title: "직업",
    type: "job",
  },

  {
    title: "소속",
    type: "route",
  },

  {
    title: "휴대전화",
    type: "content",
  },

  {
    title: "이메일",
    type: "email",
  },
];
