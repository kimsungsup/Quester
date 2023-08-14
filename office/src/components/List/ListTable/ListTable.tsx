import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./css/index.css";
import { CSVLink } from "react-csv";
import { Link, useNavigate } from "react-router-dom";
import Popup from "../../Popup/Popup";
import QuestionTable from "./components/QuestionTable/QuestionTable";
import { formatDate, telform } from "../../../lib/lib";

type Props = {
  type: string;
  data: any[];
  pageType: number;
  setPageType: Dispatch<SetStateAction<number>>;
  btn_type: string[];
  ListSize: number;
  Remove?: (list: string[]) => void;
  headers: string[];
};

const ListTable = ({
  type,
  data,
  // pageType,
  // setPageType,
  btn_type,
  ListSize,
  Remove,
  headers,
}: Props) => {
  console.log(data);
  const navigate = useNavigate();
  const CsvRef = useRef<
    CSVLink & HTMLAnchorElement & { link: HTMLAnchorElement }
  >(null);

  const [CheckList, setCheckList] = useState<string[]>([]);
  const [AllCheck, setAllCheck] = useState<boolean>(false);
  const [isPopup, setIsPopup] = useState<boolean>(false);
  const [CsvData, setCsvData] = useState<any[] | undefined>(undefined);
  const UpdateCheckList = useCallback(
    (value: string) => {
      const index = CheckList.indexOf(value);
      let clone = CheckList.slice();
      if (index > -1) {
        clone.splice(index, 1);
      } else {
        clone.push(value);
      }
      setCheckList(clone);
    },
    [CheckList]
  );

  const CsvGet = useCallback(async () => {
    const csvd = data
      .filter((item) => CheckList.includes(item.key))
      .map((item) => {
        return [
          item.name,
          telform(item.phone),
          item.email,
          formatDate(item.timestamp, "-"),
          item.text,
        ];
      });
    setCsvData(csvd);
    await setTimeout(() => {
      if (CsvRef.current) {
        CsvRef.current.link.click();
      }
    }, 500);
    await setTimeout(() => {
      setCsvData(undefined);
    }, 1000);
  }, [type, CheckList, data]);

  const ActiveRemove = useCallback(() => {
    if (Remove) {
      Remove(CheckList);
    }
    setIsPopup(false);
  }, [CheckList, Remove]);

  useEffect(() => {
    if (AllCheck) {
      setCheckList(
        data.map(({ key }) => {
          return key;
        })
      );
    } else {
      setCheckList([]);
    }

    return () => {};
  }, [AllCheck, data]);

  return (
    <section className="list-table-section">
      <div className="table-top-section">
        <div className="paging-change-wrapper">
          <div className="lst-length">
            전체 목록 {ListSize} / 검색결과 {data.length}
          </div>
        </div>
        {CsvData && headers ? (
          <CSVLink
            ref={CsvRef}
            style={{ display: "none" }}
            className="export-excel"
            headers={headers}
            filename={`${formatDate(Date.now(), "-")} 문의 목록`}
            data={CsvData}
          />
        ) : undefined}
        <div className="table-btn-wrapper">
          {btn_type.map((item, idx) => {
            if (item === "select-excel") {
              return (
                <button className="black-btn" key={idx} onClick={CsvGet}>
                  선택항목 엑셀저장
                </button>
              );
            }
            if (item === "select-delete") {
              return (
                <button
                  className="black-btn"
                  key={idx}
                  onClick={() => {
                    setIsPopup(true);
                  }}
                >
                  선택항목 일괄삭제
                </button>
              );
            }

            return <div key={idx}></div>;
          })}
        </div>
      </div>

      {type === "question" && (
        <QuestionTable
          data={data}
          CheckList={CheckList}
          UpdateCheckList={UpdateCheckList}
          AllCheck={AllCheck}
          setAllCheck={setAllCheck}
          navigate={navigate}
        />
      )}

      <Popup isActive={isPopup} Cancel={setIsPopup} Active={ActiveRemove} />
    </section>
  );
};

export default ListTable;
