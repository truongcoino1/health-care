import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

const PAGE_SIZE = 8;

const dummyData = new Array(20).fill(0).map(() => ({
  date: "2021-01-01",
  hour: "12:00",
  content:
    "私の日記の記録が一部表示されます。<br/>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト……",
}));

export const useMyDiary = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["records", "diary"],
    queryFn: ({ pageParam }) => {
      const start = pageParam * PAGE_SIZE;
      const items = dummyData.slice(start, start + PAGE_SIZE);
      return Promise.resolve({
        items,
        nextPage:
          start + PAGE_SIZE < dummyData.length ? pageParam + 1 : undefined,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const items = useMemo(
    () => data?.pages.flatMap((page) => page.items) ?? [],
    [data],
  );

  const hasMore = !!hasNextPage;

  const loadMore = () => {
    fetchNextPage();
  };

  return { items, hasMore, loadMore };
};
