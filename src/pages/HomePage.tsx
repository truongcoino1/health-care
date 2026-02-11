import Hexagon from "../components/home/Hexagon";
import { categories } from "../../mock/foods";
import Chart from "../components/common/Chart";
import Layout from "../components/common";
import { useHome } from "../hooks/useHome";
import FoodList from "../components/home/FoodList";
import FoodSummary from "../components/home/FoodSummary";
function HomePage() {
  const { data, setActive, active } = useHome();

  return (
    <Layout>
      <div>
        <div className="flex w-full flex-wrap">
          <FoodSummary />
          <div className="bg-dark-600 lg:w-[57.8125%] w-full h-[312px] flex items-center justify-center">
            <Chart data={data} />
          </div>
        </div>
        <div className="flex flex-wrap lg:w-[960px] mx-auto items-center justify-center gap-16 my-6">
          {categories.map((e) => (
            <Hexagon
              onClick={() => setActive(e.type)}
              key={e.name}
              type={e.type}
              name={e.name}
              icon={e.icon}
            />
          ))}
        </div>
        <FoodList active={active} />
      </div>
    </Layout>
  );
}

export default HomePage;
