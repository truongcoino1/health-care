import { useColumnRecommend } from "../../hooks/useColumnRecommend";
import RecommendColumn from "./RecommendColumn";

const Recommend = () => {
  const { data } = useColumnRecommend();

  return (
    <div className="grid lg:grid-cols-4 gap-8 grid-cols-2 md:grid-cols-3 ">
      {data.map((item, index) => (
        <RecommendColumn
          key={index}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Recommend;
