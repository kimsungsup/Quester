import React, { Dispatch, SetStateAction } from "react";
import ListSearch from "../../components/List/ListSearch/ListSearch";
import ListTable from "../../components/List/ListTable/ListTable";
import { QuestionInter } from "../../interface/list/list.interface";

type Props = {
  data: QuestionInter[];
  pageType: number;
  setPageType: Dispatch<SetStateAction<number>>;
  ListSize: number;
  dispatch: React.Dispatch<{
    payload: any;
    type: string;
  }>;
  Search: (filter: any) => void;
  RemoveQuestion: (list: string[]) => void;
};

const QuestionList = ({
  dispatch,
  Search,
  data,
  pageType,
  setPageType,
  ListSize,
  RemoveQuestion,
}: Props) => {
  return (
    <main>
      <ListSearch
        type="question"
        title="문의 내역"
        SearchList={[{ title: "이름", type: "title" }]}
        category={[
          {
            title: "문의일",
            type: "period",
          },
        ]}
        dispatch={dispatch}
        Search={Search}
      />
      <ListTable
        Remove={RemoveQuestion}
        type="question"
        data={data}
        ListSize={ListSize}
        pageType={pageType}
        setPageType={setPageType}
        btn_type={["select-delete"]}
        headers={["문의일자", "이름", "직업", "소속", "휴대전화", "이메일"]}
      />
    </main>
  );
};

export default QuestionList;
