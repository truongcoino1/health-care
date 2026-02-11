import { useMemo } from "react";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { getMealTitle, meal, MealItem } from "../../mock/foods";

const PAGE_SIZE = 8;

const getFiltered = (active: string): MealItem[] =>
  meal.filter((el) => (active !== "all" ? el.category === active : true));

export const useFoodList = (active: string) => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["foods", "meals", active],
    queryFn: ({ pageParam }) => {
      const filtered = getFiltered(active);
      const start = pageParam * PAGE_SIZE;
      const items = filtered.slice(start, start + PAGE_SIZE);
      return Promise.resolve({
        items,
        nextPage:
          start + PAGE_SIZE < filtered.length ? pageParam + 1 : undefined,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    placeholderData: keepPreviousData,
  });

  const items = useMemo(
    () =>
      data?.pages
        .flatMap((page) => page.items)
        .map((e) => ({
          title: getMealTitle(e.date, e.category),
          url: e.url,
        })) ?? [],
    [data],
  );

  const hasMore = !!hasNextPage;

  const loadMore = () => {
    fetchNextPage();
  };

  return { items, hasMore, loadMore };
};
