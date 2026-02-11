import { useEffect, useState } from "react";

export const useRecordChart = () => {
  const dateType = ["日", "週", "月", "年"];
  const [type, setType] = useState<string>("日");
  const [data, setData] = useState<{ data1: number[]; data2: number[] }>({
    data1: [],
    data2: [],
  });

  useEffect(() => {
    switch (type) {
      case "日":
        setData({
          data1: [
            7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
          ],
          data2: [
            3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8,
          ],
        });
        break;
      case "週":
        setData({
          data1: [
            2.0, 5.9, 2.5, 14.5, 48.4, 11.5, 25.2, 26.5, 43.3, 18.3, 13.9, 4.6,
          ],
          data2: [
            7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
          ],
        });
        break;
      case "月":
        setData({
          data1: [
            7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,
          ],
          data2: [
            3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8,
          ],
        });
        break;
      case "年":
        setData({
          data1: [
            2.0, 5.9, 2.5, 54.5, 18.4, 11.5, 25.2, 26.5, 13.3, 18.3, 13.9, 12.6,
          ],
          data2: [
            12.0, 6.9, 9.5, 14.5, 38.4, 21.5, 25.2, 26.5, 12.3, 18.3, 13.9, 9.6,
          ],
        });
        break;
      default:
        break;
    }
  }, [type]);

    return {  dateType, type, setType, data };
};
