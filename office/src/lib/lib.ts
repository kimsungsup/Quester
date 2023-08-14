import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";

export function formatDate(date: number | string, type: string) {
  var d = new Date(Number(date)),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (parseInt(month) < 10) month = "0" + month;
  if (parseInt(day) < 10) day = "0" + day;
  return [year, month, day].join(type);
}
export const telform = (e: string) => {
  const number = e.replace(/[^0-9-]/gi, "");
  const val = number.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  return val;
};

export const YmdChange = (yymmdd: string, hour: number) => {
  const year = parseInt(yymmdd.substring(0, 2));
  const month = parseInt(yymmdd.substring(2, 4)) - 1;
  const day = parseInt(yymmdd.substring(4, 6));
  // Date 객체 생성
  const date = new Date(year + 2000, month, day);
  date.setHours(hour);
  date.setMinutes(0);
  return date.getTime();
};
export const DisplayYmd = (yymmdd: string, type: string) => {
  const yy = parseInt(yymmdd.substring(0, 2));
  const mm = parseInt(yymmdd.substring(2, 4)) - 1;
  const dd = parseInt(yymmdd.substring(4, 6));
  // Date 객체 생성
  const date = new Date(yy + 2000, mm, dd);
  var d = new Date(Number(date)),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();
  if (parseInt(month) < 10) month = "0" + month;
  if (parseInt(day) < 10) day = "0" + day;
  return [year, month, day].join(type);
};

export const FilterYMd = (yymmdd: string, type: "start" | "finish") => {
  const year = parseInt(yymmdd.substring(0, 2));
  const month = parseInt(yymmdd.substring(2, 4)) - 1;
  const day = parseInt(yymmdd.substring(4, 6));
  // Date 객체 생성
  const date = new Date(year + 2000, month, day);
  if (type === "start") {
    date.setDate(date.getDate() - 1);
  }
  if (type === "finish") {
    date.setDate(date.getDate() + 1);
  }
  date.setHours(0);
  date.setMinutes(0);
  return date.getTime();
};

export const StateChange = ({
  start,
  finish,
}: {
  start: number;
  finish: number;
}) => {
  const startDate = new Date(start);
  startDate.setHours(0);
  startDate.setMinutes(0);
  const FinishDate = new Date(finish);
  FinishDate.setHours(24);
  FinishDate.setMinutes(0);
  const NowDate = Date.now();
  if (NowDate < startDate.getTime()) {
    return {
      type: "coming",
      text: "모집 예정",
    };
  }
  if (startDate.getTime() <= NowDate && NowDate <= FinishDate.getTime()) {
    return {
      type: "ing",
      text: "모집중",
    };
  }
  if (FinishDate.getTime() < NowDate) {
    return {
      type: "dead",
      text: "마감",
    };
  }
  return {
    type: "coming",
    text: "모집 예정",
  };
};

export function FileReaderBase64(
  file: File,
  path: string
): Promise<{ url: string }> {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, path);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Upload complete!");
      const downloadURLRef = ref(storage, snapshot.ref.fullPath);
      getDownloadURL(downloadURLRef).then((downloadURL) => {
        resolve({ url: downloadURL });
      });
    });
  });
}

let selection: any;

export const SetSelection = (e: Range) => {
  selection = e;
};
export const GetSelection = () => {
  return selection;
};
type FileType = {
  url: string;
  name: string;
};

export const Fileread = (file: File): Promise<FileType> => {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.onload = function (e) {
      const imageUrl = e?.target?.result;
      if (typeof imageUrl === "string") {
        var img = new Image();
        img.src = imageUrl;
        img.onload = function (e) {};
      }
    };
    reader.readAsDataURL(file);
  });
};

export function FileChangeUrl(file: File): Promise<{ url: string }> {
  return new Promise((resolve, reject) => {
    // const form = new FormData();
    // form.append("file", file);
    // officeApi
    //   .post("/cm/atch/file/20230004/1/upload", form)
    //   .then(({ data }) => {
    //     if (data) {
    //       resolve({
    //         url: data.file_dwn_url,
    //         // name: file.name,
    //       });
    //     }
    //   })
    //   .catch((err) => {
    //     reject(err);
    //   });
  });
}
