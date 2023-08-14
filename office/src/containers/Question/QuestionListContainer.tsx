import React, { useCallback, useEffect, useState } from "react";
import {
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import QuestionList from "../../pages/List/QuestionList";
import { db } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { QuestionInter } from "../../interface/list/list.interface";

const QuestionListContainer = () => {
  const dispatch = useDispatch();
  const [OriginData, setOriginData] = useState<QuestionInter[]>([]);
  const [QuestionData, setQuestionData] = useState<QuestionInter[]>([]);
  const [pageType, setPageType] = useState<number>(10);
  const [ListSize, setListSize] = useState<number>(0);
  const SearchData = useCallback(
    (filter: any) => {
      const { searchType, value, start, finish } = filter;
      let clone = OriginData.slice();
      if (searchType === "title") {
        clone = clone.filter((item) => item.name.includes(value));
      }
      if (start && finish) {
        clone = clone.filter(
          (item) => item.timestamp >= start && item.timestamp <= finish
        );
      }
      setQuestionData(clone);
    },
    [OriginData]
  );
  const GetQuestion = useCallback(() => {
    const usersRef = query(
      collection(db, "contact"),
      orderBy("timestamp", "desc")
    );
    let queryRef = usersRef;
    getDocs(queryRef).then((snapshot) => {
      let list: any[] = [];
      const totalDocs = snapshot.size;
      setListSize(totalDocs);
      snapshot.forEach((doc) => {
        const data = doc.data();
        list.push(Object.assign({ key: doc.id }, data));
      });
      setQuestionData(list);
      setOriginData(list);
    });
  }, []);

  const RemoveQuestion = useCallback(
    (ids: string[]) => {
      ids.forEach((item) => {
        deleteDoc(doc(db, "contact", item));
      });
      GetQuestion();
    },
    [GetQuestion]
  );
  useEffect(() => {
    GetQuestion();
    return () => {};
  }, [GetQuestion]);

  return (
    <QuestionList
      data={QuestionData}
      pageType={pageType}
      setPageType={setPageType}
      ListSize={ListSize}
      Search={SearchData}
      dispatch={dispatch}
      RemoveQuestion={RemoveQuestion}
    />
  );
};

export default QuestionListContainer;
