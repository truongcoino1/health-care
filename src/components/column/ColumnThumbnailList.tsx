import { useColumnThumbnail } from "../../hooks/useColumnThumbnail";
import LinearButton from "../common/LinearButton";
import ColumnThumbnail from "./ColumnThumbnail";

const ColumnThumbnailList = () => {
  const { items, hasMore, loadMore } = useColumnThumbnail();

  return (
    <div className="flex flex-col items-center">
      <div className="grid lg:grid-cols-4 gap-x-2 gap-y-[18px] grid-cols-2 md:grid-cols-3">
        {items.map((item) => {
          return (
            <ColumnThumbnail
              key={item.type}
              name={item.name}
              time={item.time}
              type={item.type}
            />
          );
        })}
      </div>
      {hasMore && (
        <div onClick={loadMore} className="mt-[28px] mx-auto">
          <LinearButton name="コラムをもっと見る" />
        </div>
      )}
    </div>
  );
};

export default ColumnThumbnailList;
