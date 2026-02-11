import { useMemo } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import columnData from "../../mock/thumbnail.json";

const PAGE_SIZE = 8;
const allData = [...columnData.thumbnail, ...columnData.extraThumbnail];

export const useColumnThumbnail = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["columns", "thumbnails"],
    queryFn: ({ pageParam }) => {
      const start = pageParam * PAGE_SIZE;
      const items = allData.slice(start, start + PAGE_SIZE);
      return Promise.resolve({
        items,
        nextPage: start + PAGE_SIZE < allData.length ? pageParam + 1 : undefined,
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
