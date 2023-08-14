import { ContactInterface } from "../interface/list/list.interface";

export interface ContactInter extends ContactInterface {
  content: string;
  fileData: { name: string; url: string }[];
}

export function ContactReducer(
  state: ContactInter,
  { payload, type, index }: { payload: any; type: string; index?: number }
) {
  switch (type) {
    case "dispatch/all":
      return payload;
    case "name":
      return { ...state, name: payload };
    case "job":
      return { ...state, job: payload };

    case "email":
      return { ...state, email: payload };
    case "agree":
      return { ...state, isAgree: payload };
    case "team":
      return { ...state, team: payload };
    case "phone":
      return { ...state, phone: payload };

    case "text":
      return { ...state, text: payload };

    case "Route":
      return { ...state, Route: payload };

    case "reset":
      return {
        name: "",
        job: "",
        team: "",
        email: "",
        rank: "",
        isAgree: false,
        text: "",
        Route: "",
      };

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
}
