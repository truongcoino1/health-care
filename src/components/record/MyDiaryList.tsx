import { useMyDiary } from "../../hooks/useMyDiary";
import LinearButton from "../common/LinearButton";
import MyDiaryItem from "./MyDiary";

const MyDiaryList = () => {
  const { items, hasMore, loadMore } = useMyDiary();

  return (
    <div className="lg:w-[960px] flex flex-col items-center w-full mx-auto">
      <h1 className="uppercase text-dark-500 text-[22px] leading-8 w-full">
        my diary
      </h1>
      <div className="lg:grid-cols-4 grid md:px-0 px-3 mx-auto gap-4 grid-cols-2 md:grid-cols-3">
        {items.map((e, idx) => (
          <MyDiaryItem
            key={idx}
            date={e.date}
            time={e.hour}
            content={e.content}
          />
        ))}
      </div>
      {hasMore && (
        <div className="mt-[28px] mx-auto" onClick={loadMore}>
          <LinearButton name="自分の日記をもっと見る" />
        </div>
      )}
    </div>
  );
};

export default MyDiaryList;
