import React, { useCallback, useState } from "react";
import "./css/index.css";
import { UserAgentType } from "../../common/common.inerface";
import InfoInput from "../InfoInput/InfoInput";
import { ContactInter } from "../../lib/reducer";

type Props = {
  userAgent: UserAgentType;
  data: ContactInter;
  dispatch: React.Dispatch<{
    payload: any;
    type: string;
    index?: number;
  }>;

  SaveContact: () => void;
};

const Question = ({ userAgent, data, SaveContact, dispatch }: Props) => {
  const { isAgree } = data;
  const isValid = useCallback(() => {
    const { phone, email, name } = data;
    return phone && name && email ? true : false;
  }, [data]);

  const CommonUpdate = useCallback(
    (type: string, value: any, index?: number) => {
      dispatch({
        type,
        payload: value,
        index,
      });
    },
    [dispatch]
  );

  console.log(data);
  console.log(SaveContact);
  return (
    <section className="question">
      {userAgent === "pc" ? (
        <div className="title-wrapper">
          <div className="left">
            <div className="title">
              플랩에 대해서 <br /> 궁금하신 점이 있나요?
            </div>

            <div className="text">
              아래 양식에 맞추어 내용 작성 후 제출해주시면, 담당자가 확인 후
              빠른 시일 내에 답변 드리겠습니다 😀
            </div>
          </div>
          <div className="right">
            <img src="/assets/education/pc/plab.svg" alt="" />
          </div>
        </div>
      ) : (
        <div className="title-wrapper">
          <div className="right">
            <img src="/assets/education/pc/plab.svg" alt="" />
          </div>
          <div className="left">
            <div className="title">
              플랩에 대해서 <br /> 궁금하신 점이 있나요?
            </div>

            <div className="text">
              아래 양식에 맞추어 내용 작성 후 제출해주시면, 담당자가 확인 후
              빠른 시일 내에 답변 드리겠습니다 😀
            </div>
          </div>
        </div>
      )}

      <div className="text-box">
        <div className="title">문의 전 확인해주세요</div>

        <ul className="text">
          <li>
            문의하신 내용에 대해 답변을 받으시려면 꼭 유효한 이메일 주소를
            입력해주세요.
          </li>
          <li>
            당사는 모두의 개인정보를 소중히 보호하고 있으며, 제3자에게 제공하지
            않습니다.
          </li>
          <li>
            문의하신 내용과 관련하여 추가 정보를 얻고자 하시면, 아래 연락처로도
            문의해주세요.
          </li>
        </ul>

        <div className="content-wrapper">
          <div className="content">
            <img src="/assets/education/pc/mail.svg" alt="" />
            <div className="text">quester@quester.kr</div>
          </div>

          <div className="content">
            <img src="/assets/education/pc/phone.svg" alt="" />
            <div className="text">(+82) 10-9092-5221</div>
          </div>
        </div>
      </div>
      <div className="input-wrapper">
        <div className="left">
          <InfoInput
            title="이름"
            data={data.name}
            catagory="name"
            type="input"
            Update={CommonUpdate}
            placeholder="이름을 입력해주세요"
          />

          <InfoInput
            title="직업"
            data={data.job}
            catagory="job"
            type="input"
            Update={CommonUpdate}
            placeholder="직업을 입력해주세요"
          />

          <InfoInput
            title="소속"
            data={data.team}
            catagory="team"
            type="input"
            Update={CommonUpdate}
            placeholder="소속을 입력해주세요"
          />

          <InfoInput
            title="휴대전화"
            data={data.phone}
            catagory="phone"
            type="input"
            Update={CommonUpdate}
            placeholder="연락받으실 휴대전화번호를 입력해주세요"
          />

          <InfoInput
            title="이메일"
            data={data.email}
            catagory="email"
            type="input"
            Update={CommonUpdate}
            placeholder="답변을 회신받으실 이메일을 입력해주세요"
          />

          <button
            className={`agreement-btn ${isAgree && "check-btn"}`}
            onClick={() => {
              CommonUpdate("agree", !isAgree);
            }}
          >
            <div className={`left ${isAgree && "left-check"}`}>
              {isAgree && (
                <>
                  <img src="/assets/common/check.svg" alt="" />
                </>
              )}
            </div>
            <div className={"right"}>
              상담을 위한 개인정보 사용에 동의합니다
            </div>
          </button>
        </div>

        <div className="right">
          <InfoInput
            title="유입경로"
            data={data.Route}
            catagory="Route"
            type="input"
            Update={CommonUpdate}
            placeholder="플랩을 알게된 경로를 알려주세요"
            inputType="right"
          />

          <InfoInput
            title="문의내용"
            data={data.text}
            catagory="text"
            type=""
            Update={CommonUpdate}
            placeholder="문의 내용을 입력해주세요"
          />

          <button
            className={`btn ${(!isAgree || !isValid()) && "is-check-btn"}`}
            disabled={!isAgree}
            onClick={() => {
              if (isAgree && isValid()) {
                SaveContact();
              }
            }}
          >
            문의하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Question;
