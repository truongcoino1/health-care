import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../public/assets/icons/logo.svg";
import Memo from "../../../public/assets/icons/memo.svg";
import Challenge from "../../../public/assets/icons/challenge.svg";
import Info from "../../../public/assets/icons/info.svg";
import Menu from "../../../public/assets/icons/menu.svg";
import Close from "../../../public/assets/icons/close.svg";
import Dropdown from "./Dropdown";
import NoticeNumber from "./NoticeNumber";

const ELEMENTS = [
  "自分の記録",
  "体重グラフ",
  "目標",
  "選択中のコース",
  "コラム一覧",
  "設定",
];

const NUMBER = 2;

const NAVIGATION_ITEMS = [
  {
    id: "memo",
    icon: Memo,
    label: "自分の記録",
    to: "/records",
  },
  {
    id: "challenge",
    icon: Challenge,
    label: "チャレンジ",
    to: null,
  },
  {
    id: "info",
    icon: Info,
    label: "お知らせ",
    to: null,
    noticeNumber: NUMBER,
  },
];

function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="h-16 w-full bg-dark-500 shadow-[0px_3px_6px_rgba(0,0,0,0.16)]">
      <div className="max-w-[960px] h-full mx-auto flex items-center">
        <a className="flex items-center w-[144px] h-full pl-4" href="/">
          <img className="w-[109px] h-10" src={Logo} alt="logo" />
        </a>
        <div className="flex-1" />
        <div className="flex items-center max-sm:hidden">
          {NAVIGATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group flex items-center w-[160px] h-12 pl-2 gap-2 cursor-pointer"
            >
              <NoticeNumber number={item.noticeNumber || 0}>
                <img className="w-8 h-8" src={item.icon} alt={item.id} />
              </NoticeNumber>
              {item.to ? (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `text-base font-light leading-[23px] ${
                      isActive
                        ? "text-primary-400"
                        : "text-light group-hover:text-primary-400"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ) : (
                <span className="text-light group-hover:text-primary-400 text-base font-light leading-[23px]">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="ml-4 max-sm:mr-4">
          <Dropdown open={isOpen} elements={ELEMENTS}>
            {isOpen ? (
              <img
                onClick={() => setOpen(false)}
                className="w-8 h-8 cursor-pointer"
                src={Close}
                alt="close"
              />
            ) : (
              <img
                onClick={() => setOpen(true)}
                className="w-8 h-8 cursor-pointer"
                src={Menu}
                alt="menu"
              />
            )}
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Header;
