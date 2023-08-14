import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import "./css/index.css";

type Props = {
  Update: (type: "start" | "finish" | "time", value: number) => void;
  data?: number;
  type?: "start" | "finish" | "time";
};

function InputCalendar({ data, Update, type }: Props) {
  return (
    <div className="calendar">
      <DatePicker
        dateFormat={"yyyy-MM-dd"}
        selected={data ? new Date(data) : undefined}
        onChange={(date: any) => {
          if (type) {
            const day = new Date(date);
            type === "start" ? day.setHours(0) : day.setHours(23);

            Update(type, day.getTime());
          }
        }}
        locale={ko}
        placeholderText="날짜 선택"
        showPopperArrow={false}
      />
      <img src="/assets/common/calendar.svg" alt="calendar" />
    </div>
  );
}

export default InputCalendar;
