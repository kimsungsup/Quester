import React, { Dispatch, SetStateAction, useCallback, useState } from "react";
import "./css/index.css";
import { FilterYMd } from "../../../lib/lib";
import Jop from "../../Jop/Jop";

type Props = {
  title: string;
  type: "recruit" | "video" | "notice" | "question";
  SearchList: { title: string; type: string }[];
  category: {
    title: string;
    type: string;
    list?: { title: string; type: string | number }[];
  }[];
  Search: (filter: any) => void;

  dispatch: React.Dispatch<{
    payload: any;
    type: string;
  }>;

  id?: string;
};

const ListSearch = ({
  title,
  SearchList,
  category,
  Search,
  type,
  dispatch,
}: Props) => {
  const [nowSearchFilter, setNowSearchFilter] = useState<{
    title: string;
    type: string;
  }>(SearchList[0]);
  const [SearchValue, setSearchValue] = useState<string | number>("");
  const [nowCategory, setNowCategory] = useState<string | number | undefined>(
    undefined
  );
  const [filterOpen, setFilterOpen] = useState<boolean>(false);
  const [start, setStart] = useState<string>("");
  const [finish, setFinish] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const PeriodUpdate = useCallback((type: string, value: any) => {
    if (type === "start") {
      setStart(value);
      return;
    }
    if (type === "finish") {
      setFinish(value);
      return;
    }
  }, []);

  const SearchType = useCallback(() => {
    if (type === "recruit") {
      Search({
        category: selectedItem,
        value: SearchValue,
      });
    }

    if (type === "notice") {
      Search({
        start: FilterYMd(start, "start"),
        finish: FilterYMd(finish, "finish"),
        nowCategory,
        searchType: nowSearchFilter.type,
        value: SearchValue,
      });
    }
    if (type === "question") {
      Search({
        start: FilterYMd(start, "start"),
        finish: FilterYMd(finish, "finish"),
        searchType: nowSearchFilter.type,
        value: SearchValue,
      });
    }

    if (type === "video") {
      Search({
        start: FilterYMd(start, "start"),
        finish: FilterYMd(finish, "finish"),
        nowCategory,
        searchType: nowSearchFilter.type,
        value: SearchValue,
      });
    }
  }, [
    type,
    Search,
    nowCategory,
    SearchValue,
    nowSearchFilter,
    start,
    finish,
    selectedItem,
  ]);

  return (
    <section className="list-search-section">
      <div className="search-title">{title}</div>
      <form
        className="search-box"
        onSubmit={(e) => {
          e.preventDefault();
          SearchType();
        }}
      >
        <div className="filter-line">
          {category.map(({ title, type, list }, idx) => {
            if (type === "period") {
              return (
                <PeriodFilter
                  title={title}
                  key={idx}
                  start={start}
                  finish={finish}
                  Update={PeriodUpdate}
                />
              );
            }

            if (type === "category") {
              return (
                <CategoryFilter
                  key={idx}
                  list={list ? list : []}
                  title={title}
                  nowCategory={nowCategory}
                  setNowCategory={setNowCategory}
                />
              );
            }
            return <div key={idx}></div>;
          })}
        </div>
        <div className="filter-line">
          <div className="filter-wrapper">
            <div className="tag">
              {type === "recruit" ? "모집 직군" : "검색"}
            </div>

            <div className="search-filter">
              <div className="drop-down-section">
                <div
                  className={`drop-down-wrapper ${
                    filterOpen && "drop-down-open"
                  }`}
                >
                  <button
                    type="button"
                    className="drop-down-card"
                    onClick={() => {
                      setFilterOpen(!filterOpen);
                    }}
                  >
                    {nowSearchFilter.title}
                    <div className="filter-arrow">
                      <img src="/assets/common/search/arrow.svg" alt="arrow" />
                    </div>
                  </button>
                  {SearchList.map(({ title, type }, idx) => {
                    return (
                      <button
                        type="button"
                        className="drop-down-card"
                        key={idx}
                        onClick={() => {
                          setNowSearchFilter({ title, type });
                          setFilterOpen(!filterOpen);
                        }}
                      >
                        {title}
                      </button>
                    );
                  })}
                </div>
              </div>
              <input
                type="text"
                placeholder="검색어 입력"
                value={SearchValue}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <button className="search-btn" type="submit">
          검색
        </button>
      </form>
    </section>
  );
};

export default ListSearch;

const PeriodFilter = ({
  title,
  start,
  finish,
  Update,
}: {
  title: string;
  start: string;
  finish: string;
  Update: (type: "start" | "finish", value: string) => void;
}) => {
  return (
    <div className="filter-wrapper">
      <div className="tag">{title}</div>
      <div className="period-wrapper">
        <input
          type="number"
          placeholder="YYMMDD"
          value={start}
          onChange={(e) => {
            const value = e.target.value;
            if (value.length < 7) {
              Update("start", value);
            }
          }}
        />{" "}
        <div>~</div>
        <input
          type="number"
          placeholder="YYMMDD"
          value={finish}
          onChange={(e) => {
            const value = e.target.value;
            if (value.length < 7) {
              Update("finish", value);
            }
          }}
        />
      </div>
    </div>
  );
};

const CategoryFilter = ({
  title,
  list,
  nowCategory,
  setNowCategory,
}: {
  title: string;
  list: { title: string; type: string | number }[];
  nowCategory: string | number | undefined;
  setNowCategory: Dispatch<SetStateAction<string | number | undefined>>;
}) => {
  return (
    <div className="filter-wrapper">
      <div className="tag">{title}</div>
      <div className="category-wrapper">
        {list.map(({ title, type }, idx) => {
          return (
            <div className="category" key={idx}>
              <button
                className="category-btn"
                type="button"
                onClick={() => {
                  if (nowCategory === type) {
                    setNowCategory(undefined);
                  } else {
                    setNowCategory(type);
                  }
                }}
              >
                {type === nowCategory && (
                  <img src="/assets/common/check.svg" alt="체크" />
                )}
              </button>
              <div className="category-title">{title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const list = [
  "기획",
  "개발",
  "드론 측량",
  "디자인",
  "해외 마케팅",
  "총무(인사)",
  "영업",
];
