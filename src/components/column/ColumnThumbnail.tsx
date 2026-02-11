import column1 from "/assets/images/column-1.jpg";
import column2 from "/assets/images/column-2.jpg";
import column3 from "/assets/images/column-3.jpg";
import column4 from "/assets/images/column-4.jpg";
import column5 from "/assets/images/column-5.jpg";
import column6 from "/assets/images/column-6.jpg";
import column7 from "/assets/images/column-7.jpg";
import column8 from "/assets/images/column-8.jpg";

type Props = {
  name: string;
  time: string;
  type: string;
};

const images: Record<string, string> = {
  "1": column1,
  "2": column2,
  "3": column3,
  "4": column4,
  "5": column5,
  "6": column6,
  "7": column7,
  "8": column8,
};
function ColumnThumbnail(props: Props) {
  const { name, time, type } = props;
  let image = "1";
  if (type in images) {
    image = images[type];
  }
  return (
    <div className=" cursor-pointer w-full relative">
      <div className="relative">
        <img
          src={image}
          alt="column-thumbnail"
          className="w-full h-[144px] object-cover"
        />
        <div className="absolute bottom-0 border border-primary-300 bg-primary-300 text-white px-1">
          {time}
        </div>
      </div>
      <div className="text-[15px] leading-[22px] mt-2">{name}</div>
      <div className="text-xs text-primary-400 leading-6">
        #魚料理 #和食 #DHA
      </div>
    </div>
  );
}

export default ColumnThumbnail;
