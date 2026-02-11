import { useEffect, useMemo, useState } from "react";
import { getMealTitle, meal } from "../../mock/foods";

const PAGE_SIZE = 8;

export const useFoodList = (active: string) => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [active]);

  const filtered = useMemo(
    () =>
      meal.filter((el) =>
        active !== "all" ? el.category === active : true,
      ),
    [active],
  );

  const items = useMemo(
    () =>
      filtered.slice(0, visibleCount).map((e) => ({
        title: getMealTitle(e.date, e.category),
        url: e.url,
      })),
    [filtered, visibleCount],
  );

  const hasMore = visibleCount < filtered.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  const resetPagination = () => {
    setVisibleCount(PAGE_SIZE);
  };

  return { items, hasMore, loadMore, resetPagination };
};
