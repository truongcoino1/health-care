import linearHexagon from "/assets/linearHexagon.svg";
type Props = {
  name: string;
  type: string;
  icon: string;
  onClick?: () => void;
};
function Hexagon(props: Props) {
  const { name, type, icon, onClick } = props;
  return (
    <div onClick={onClick} className="min-w-[136px] h-[136px] items-center flex justify-center relative cursor-pointer">
      <img src={linearHexagon} alt="linearHexagon" />
      <div className="absolute flex flex-col items-center">
      <img src={icon} alt={type}  />
      <p className="text-white text-xl leading-6 text-center">
        {name}
      </p>
      </div>
    </div>
  );
}

export default Hexagon;
