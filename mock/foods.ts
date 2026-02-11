import m01 from "../public/assets/images/m01.jpg";
import m02 from "../public/assets/images/m02.jpg";
import m03 from "../public/assets/images/m03.jpg";
import l01 from "../public/assets/images/l01.jpg";
import l02 from "../public/assets/images/l02.jpg";
import l03 from "../public/assets/images/l03.jpg";
import d01 from "../public/assets/images/d01.jpg";
import d02 from "../public/assets/images/d02.jpg";
import s01 from "../public/assets/images/s01.jpg";
import cup from "../public/assets/cup.svg";
import knife from "../public/assets/knife.svg";

export type MealCategory = "morning" | "lunch" | "dinner" | "snack";

export type MealItem = {
  date: string;
  category: MealCategory;
  url: string;
};

export const categories = [
  { name: "Morning", type: "morning", icon: knife },
  { name: "Lunch", type: "lunch", icon: knife },
  { name: "Dinner", type: "dinner", icon: knife },
  { name: "Snack", type: "snack", icon: cup },
];

export const getMealTitle = (date: string, category: MealCategory): string => {
  const label = category.charAt(0).toUpperCase() + category.slice(1);
  return `${date}.${label}`;
};

export const meal: MealItem[] = [
  { date: "05.21", category: "morning", url: m01 },
  { date: "05.21", category: "lunch", url: l03 },
  { date: "05.21", category: "dinner", url: d01 },
  { date: "05.21", category: "snack", url: d02 },
  { date: "05.20", category: "morning", url: m03 },
  { date: "05.20", category: "lunch", url: l01 },
  { date: "05.20", category: "dinner", url: d02 },
  { date: "05.20", category: "snack", url: s01 },
  { date: "05.19", category: "morning", url: m02 },
  { date: "05.19", category: "lunch", url: l02 },
  { date: "05.19", category: "dinner", url: d01 },
  { date: "05.19", category: "snack", url: l01 },
  { date: "05.18", category: "morning", url: m01 },
  { date: "05.18", category: "lunch", url: l03 },
  { date: "05.18", category: "dinner", url: d02 },
  { date: "05.18", category: "snack", url: l02 },
  { date: "05.17", category: "morning", url: m03 },
  { date: "05.17", category: "lunch", url: l01 },
  { date: "05.17", category: "dinner", url: d01 },
  { date: "05.17", category: "snack", url: s01 },
  { date: "05.16", category: "morning", url: m02 },
  { date: "05.16", category: "lunch", url: l02 },
  { date: "05.16", category: "dinner", url: d02 },
  { date: "05.16", category: "snack", url: l01 },
  { date: "05.15", category: "morning", url: m01 },
  { date: "05.15", category: "lunch", url: l03 },
  { date: "05.15", category: "dinner", url: d01 },
  { date: "05.15", category: "snack", url: s01 },
  { date: "05.14", category: "morning", url: m03 },
  { date: "05.14", category: "lunch", url: l01 },
  { date: "05.14", category: "dinner", url: d02 },
  { date: "05.14", category: "snack", url: l02 },
  { date: "05.13", category: "morning", url: m02 },
  { date: "05.13", category: "lunch", url: l02 },
  { date: "05.13", category: "dinner", url: d01 },
  { date: "05.13", category: "snack", url: l01 },
];
