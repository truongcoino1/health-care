type Props = {
  date: string;
  time: string;
  content: string;
};
function MyDiaryItem(props: Props) {
  const { date, time, content } = props;
  return (
    <div className="border-2 border-gray-300 text-dark-500 w-[231px] h-[231px] px-4 pt-4 pb-[27px]">
      <div className="text-lg">{date}</div>
      <div className="text-lg pb-2">{time}</div>
      <div
        className="text-xs text-ellipsis"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}

export default MyDiaryItem;
