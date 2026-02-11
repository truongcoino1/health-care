import { useMyExercise } from "../../hooks/useMyExercise";

function ExerciseList() {
  const { data } = useMyExercise();
  return (
    <div className="lg:w-[960px] w-full px-6 py-4 gap-1 bg-dark-500 mx-auto flex flex-col items-center">
      <div className="flex items-center w-full">
        <span className="font-inter text-[15px] text-white leading-[18px] w-[96px]">
          MY <br /> EXERCISE
        </span>
        <p className="text-white font-normal font-inter text-[22px] leading-[27px]">
          2021.05.21
        </p>
      </div>
      <div className="h-[192px] overflow-y-scroll w-full text-light pr-6">
        <div className="grid grid-cols-2 gap-x-10 gap-y-2">
          {data.map((item, index) => (
            <div key={index} className="h-[40px] border-b border-gray-400">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="h-[7px] w-[7px] bg-white rounded-full mr-[9px] shrink-0" />
                  <span className="text-[15px] leading-[22px]">
                    {item.headline}
                  </span>
                </div>
                <span className="text-[18px] text-primary-300 font-inter leading-[22px] text-right shrink-0">
                  {item.mins}
                </span>
              </div>
              <span className="text-[15px] block mt-[-2px] text-primary-300 font-inter leading-[18px] pl-4">
                {item.kcal}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExerciseList;
