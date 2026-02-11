import d01 from "/assets/images/d01.jpg";
import threeFour from "/assets/icons/threefour.svg";

const FoodSummary = () => {
  return (
    <div className="lg:w-[42.1875%] w-full relative flex items-center justify-center">
      <img src={d01} alt="d01" className="w-full object-cover h-[312px]" />
      <img src={threeFour} alt="threefour" className="absolute" />
      <div className="flex absolute gap-1 text-white items-end justify-center">
        <div className="text-lg font-normal leading-[22px]">05/21</div>
        <div className="text-[25px] leading-[30px]">75%</div>
      </div>
    </div>
  );
};

export default FoodSummary;
