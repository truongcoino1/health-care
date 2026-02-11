import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const chartData = {
  data1: [10, 8.8, 6.5, 7.5, 7.0, 6.5, 7.5, 7.0, 6.5, 6.0, 5.5, 6.0],
  data2: [10, 8.5, 7.0, 6.8, 5.8, 5.5, 5.0, 4.8, 4.2, 3.5, 2.8, 2.2],
};

export const useHome = () => {
  const [active, setActive] = useState<string>("all");

  const { data = chartData } = useQuery({
    queryKey: ["home", "chart"],
    queryFn: () => Promise.resolve(chartData),
  });

  return { active, setActive, data };
};
