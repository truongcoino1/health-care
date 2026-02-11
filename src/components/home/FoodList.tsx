import { useFoodList } from "../../hooks/useFoodList";
import LinearButton from "../common/LinearButton";
import FoodItem from "./FoodItem";

type Props = {
  active: string;
};

const FoodList = ({ active }: Props) => {
  const { items, hasMore, loadMore } = useFoodList(active);

  return (
    <div className="lg:w-[960px] w-full flex flex-col md:px-0 px-4 items-center mx-auto">
      <div className="gap-2 grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3">
        {items.map((e, i) => (
          <FoodItem key={i} title={e.title} url={e.url} />
        ))}
      </div>
      {hasMore && (
        <div onClick={loadMore} className="mt-[28px] mx-auto">
          <LinearButton name="記録をもっと見る" />
        </div>
      )}
    </div>
  );
};

export default FoodList;
