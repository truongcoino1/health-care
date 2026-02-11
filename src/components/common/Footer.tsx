const FOOTER_DATA = [
  "会員登録",
  "運営会社",
  "利用規約",
  "個人情報の取扱について",
  "特定商取引法に基づく表記",
  "お問い合わせ",
];

const Footer = () => {
  return (
    <div className="h-[128px] bg-dark-500 mt-16">
      <div className="lg:w-[960px] md:w-5/6 w-3/4 h-full text-light m-auto flex gap-[45px] items-center flex-wrap">
        {FOOTER_DATA.map((item, index) => {
          return (
            <a
              key={index}
              className="cursor-pointer text-[11px] leading-4 font-light hover:text-primary-400"
            >
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
