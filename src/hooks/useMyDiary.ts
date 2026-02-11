import { useMemo, useState } from "react";

const PAGE_SIZE = 8;

const dummyData = new Array(20).fill(0).map(() => {
  return {
    date: "2021-01-01",
    hour: "12:00",
    content:
      "私の日記の記録が一部表示されます。<br/>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト……",
  };
});

export const useMyDiary = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const items = useMemo(
    () => dummyData.slice(0, visibleCount),
    [visibleCount],
  );

  const hasMore = visibleCount < dummyData.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return { items, hasMore, loadMore };
};
