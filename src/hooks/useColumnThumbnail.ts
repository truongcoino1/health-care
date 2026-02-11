import { useMemo, useState } from "react";
import columnData from "../../mock/thumbnail.json";

const PAGE_SIZE = 8;
const allData = [...columnData.thumbnail, ...columnData.extraThumbnail];

export const useColumnThumbnail = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const items = useMemo(
    () => allData.slice(0, visibleCount),
    [visibleCount],
  );

  const hasMore = visibleCount < allData.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return { items, hasMore, loadMore };
};
