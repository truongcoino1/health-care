import { useQuery } from "@tanstack/react-query";
import columnData from "../../mock/thumbnail.json";

export const useColumnRecommend = () => {
  const { data = [] } = useQuery({
    queryKey: ["columns", "recommends"],
    queryFn: () => Promise.resolve(columnData.recommends),
  });

  return { data };
};
