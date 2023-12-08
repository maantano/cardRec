import { Link } from "react-router-dom";
import "./GNB.css";

function GNB() {
  const menuList = [
    { name: "메인", link: "/" },
    { name: "카드 검색", link: "/about" },
    // { name: "xlsx", link: "/xlsx" },
    { name: "소비패턴 분석", link: "/xlsx2" },
    // { name: "Home", link: "/home" },
    // { name: "airplaneTicket", link: "/airplaneTicket" },

    // { name: "Search", link: "/search" },
    // { name: "Detail", link: "/card/detail/500" },
    // { name: "Test", link: "/test" },
    // { name: "커뮤니티", comment: "New", link: "/" },
    // { name: "프리랜서", link: "/" },
    // { name: "AI 합격예측", comment: "Beta", link: "/" },
  ];
  return (
    <ul className="GNB">
      {menuList.map(({ name, comment, link }, index) => (
        <li key={index}>
          {/* <a>
            {name}
            {comment && <span>{comment}</span>}
          </a> */}
          <Link to={link}>
            {name}
            {comment && <span>{comment}</span>}
          </Link>
          {/* <Link to={`/${coinId}/candle`}>Candle</Link> */}
        </li>
      ))}
    </ul>
  );
}

export default GNB;
