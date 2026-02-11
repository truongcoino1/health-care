import { useQuery } from "@tanstack/react-query";
import { recordSummary } from "../../mock/records";

export const useRecordSummary = () => {
  const { data = [] } = useQuery({
    queryKey: ["records", "summary"],
    queryFn: () => Promise.resolve(recordSummary),
  });

  return { data };
};
