import "./Header.css";
import GNB from "./GNB/GNB";
import Aside from "./Aside/Aside";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); //clean up
    };
  }, []);
  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
    }
  };
  return (
    <div style={{ height: 60 }}>
      <div className={scroll ? "headerBlur" : "header"}>
        <div className="header-main">
          <nav className="header-nav">
            <div className="header-logo">
              {/* <button>
                <img
                  src="https://static.wanted.co.kr/images/icon-menu.png"
                  alt="hamberger menu"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </button> */}
            </div>
            <GNB />
            {/* <Aside /> */}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
