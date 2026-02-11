import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  number: number;
};

function NoticeNumber({ children, number }: Props) {
  return (
    <div className="relative">
      {children}
      {!!number && (
        <div className="absolute bg-primary-500 h-4 w-4 rounded-full flex justify-center items-center text-[10px] top-0 -right-1/4 text-light">
          {number}
        </div>
      )}
    </div>
  );
}

export default NoticeNumber;
