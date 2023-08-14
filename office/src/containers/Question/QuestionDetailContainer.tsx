import React from "react";
import QuestionDetail from "../../pages/QuestionDetail/QuestionDetail";
import { useLocation } from "react-router-dom";
import { QuestionInter } from "../../interface/list/list.interface";

type Props = {};

const QuestionDetailContainer = (props: Props) => {
  const data = useLocation().state as QuestionInter;
  return <QuestionDetail data={data} />;
};

export default QuestionDetailContainer;
