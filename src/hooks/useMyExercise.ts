export const useMyExercise = () => {
  const data = new Array(30).fill(0).map(() => {
    return {
      headline: "家事全般（立位・軽い）",
      kcal: "26kcal",
      mins: "10 min",
    };
  });

  return {
    data,
  };
};
