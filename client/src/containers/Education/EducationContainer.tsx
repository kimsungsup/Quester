import React, { useCallback, useReducer } from "react";

import { UserAgentType } from "../../common/common.inerface";
import { ContactReducer } from "../../lib/reducer";
import { ContactInitial } from "../../lib/initial";
import { useDispatch } from "react-redux";
import Question from "../../components/Question/Question";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { LoadingChange } from "../../reducer/config";

type Props = {
  userAgent: UserAgentType;
};
const EducationContainer = ({ userAgent }: Props) => {
  const rxDispatch = useDispatch();
  const [state, dispatch] = useReducer(
    ContactReducer,
    undefined,
    ContactInitial
  );

  const SaveContact = useCallback(async () => {
    rxDispatch(LoadingChange(true));

    try {
      const obj = {
        ...state,
        timestamp: Date.now(),
      };
      await addDoc(collection(db, "contact"), obj);
      alert("문의가 성공적으로 완료되었습니다.");

      dispatch({
        type: "reset",
        payload: "",
      });

      window.location.reload();
      rxDispatch(LoadingChange(false));
      console.log("문의가 성공적으로 완료되었습니다.");
    } catch (error: any) {
      rxDispatch(LoadingChange(false));
      console.error("문의 저장 중 오류 발생:", error);
    }
  }, [state]);

  return (
    <Question
      userAgent={userAgent}
      data={state}
      dispatch={dispatch}
      SaveContact={SaveContact}
    />
  );
};

export default EducationContainer;
