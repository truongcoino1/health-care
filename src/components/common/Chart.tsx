import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { memo } from "react";

type Props = {
  data: {
    data1: number[];
    data2: number[];
  } | null;
  style?: React.CSSProperties;
};
const Chart = (props: Props) => {
  const { data } = props;

  const options: Highcharts.Options = {
    chart: {
      type: "line",
      backgroundColor: "transparent",
      spacing: [0, 0, 0, 0],
      margin: [8, 0, 20, 0],
    },
    title: { text: undefined },
    credits: { enabled: false },
    legend: { enabled: false },
    exporting: { enabled: false },
    tooltip: { shared: true },
    xAxis: {
      categories: [
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
      ],
      min: 0,
      max: 11,
      gridLineWidth: 1,
      gridLineColor: "#777777",
      lineWidth: 0,
      tickWidth: 0,
      tickmarkPlacement: "on",
      labels: {
        useHTML: true,
        y: 12,
        formatter: function () {
          const val = String(this.value);
          const num = val.replace("月", "");
          return `<span style="color:#FFFFFF;font-family:Inter;"><span style="font-size:12px">${num}</span><span style="font-size:8px">月</span></span>`;
        },
      },
    },
    yAxis: {
      title: { text: undefined },
      gridLineWidth: 0,
      lineWidth: 0,
      labels: { enabled: false },
    },
    plotOptions: {
      line: {
        lineWidth: 3,
        marker: {
          enabled: true,
          radius: 4,
          symbol: "circle",
          lineWidth: 0,
        },
      },
    },
    series: [
      {
        type: "line",
        name: "",
        data: data?.data1,
        color: "#FFCC21",
        marker: {
          fillColor: "#FFCC21",
        },
      },
      {
        type: "line",
        name: "",
        data: data?.data2,
        color: "#8FE9D0",
        marker: {
          fillColor: "#8FE9D0",
        },
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      
      containerProps={{
        style: {
          height: "293px",
          width: "79.6%",
          paddingBottom: "12px",
          ...props.style,
        },
      }}
    />
  );
};
export default memo(Chart);
