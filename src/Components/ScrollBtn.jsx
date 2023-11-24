import { useState } from "react";

export default function ScrollBtn() {
  const [scroll, setScroll] = useState(false);

  const hundleScroll = () => {
    if (window.pageYOffset > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
    });
  };
  window.addEventListener("scroll", hundleScroll);

  return (
    <i
      className={`scrollBtn fa-solid fa-arrow-up ${scroll ? "scroll" : ""}`}
      onClick={scrollTo}
    ></i>
  );
}
