import path from "/assets/icons/path.svg";

type Props = {
  name: string;
  description: string;
};
function RecommendColumn(props: Props) {
  const { name, description } = props;
  return (
    <div className="w-[216px] h-[144px] bg-dark-600 text-center flex flex-col py-6 px-2 gap-2 justify-center">
      <div className="text-primary-300 text-[22px] leading-[27px]">{name}</div>
      <img style={{ margin: "0 auto" }} src={path} alt="path" width={56} />
      <div className="text-white">{description}</div>
    </div>
  );
}

export default RecommendColumn;
