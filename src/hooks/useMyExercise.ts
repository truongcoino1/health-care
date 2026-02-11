import { useQuery } from "@tanstack/react-query";

const exerciseData = new Array(30).fill(0).map(() => ({
  headline: "家事全般（立位・軽い）",
  kcal: "26kcal",
  mins: "10 min",
}));

export const useMyExercise = () => {
  const { data = [] } = useQuery({
    queryKey: ["records", "exercises"],
    queryFn: () => Promise.resolve(exerciseData),
  });

  return { data };
};
