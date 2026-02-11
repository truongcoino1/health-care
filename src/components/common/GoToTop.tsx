import { useState, useEffect } from "react";
import GoToTopIcon from "/assets/icons/go-to-top.svg";

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    setIsVisible(scrollTop > 0);
  };

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-[60%] right-[6rem] cursor-pointer ${isVisible ? "visible" : "hidden"}`}
      onClick={handleGoToTop}
     
    >
      <img src={GoToTopIcon} alt="go-to-top" />
    </div>
  );
}

export default GoToTop;
