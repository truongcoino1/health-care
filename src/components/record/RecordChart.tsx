import { useRecordChart } from "../../hooks/useRecordChart";
import Chart from "../common/Chart";

const RecordChart = () => {
  const { data, dateType, type, setType } = useRecordChart();

  return (
    <div className="lg:w-[960px] w-full py-4 bg-dark-500 mx-auto flex flex-col items-center">
      <div className="flex items-center w-full px-6">
        <span className="font-inter text-[15px] text-white leading-[18px] w-[96px]">
          BODY <br /> RECORD
        </span>
        <p className="text-white font-normal font-inter text-[22px] leading-[27px]">
          2021.05.21
        </p>
      </div>
      <Chart
        data={data}
        style={{
          width: "98%",
          height: "211px",
          paddingBottom: "0px",
        }}
      />
      <div className="flex w-full px-8 gap-4">
        {dateType.map((date: string) => (
          <span
            key={date}
            onClick={() => setType(date)}
            className={`${
              type == date
                ? "bg-primary-300 text-white"
                : "bg-white text-primary-300"
            } w-[56px] cursor-pointer h-[24px] rounded-[50px] flex items-center justify-center`}
          >
            {date}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RecordChart;
