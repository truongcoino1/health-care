type Props = {
    children: React.ReactNode;
    className?: string;
}
export const Section = ({ children, className }: Props) => {
  return (
    <div className={`flex lg:w-[960px] lg:px-0 px-3 w-full justify-between mx-auto scroll-smooth ${className}`}>
      {children}
    </div>
  );
};
