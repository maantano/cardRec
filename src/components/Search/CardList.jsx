import React, { useState } from "react";
import "./CardList.css";
import CardTab from "./CardTab";

const CardList = ({ searchList }) => {
  const [countExpand, setCountExpand] = useState(3);
  const showMoreItems = () => {
    // 현재까지 보이는 요소의 개수에 5를 더해 더 많은 요소를 보여줍니다.
    setCountExpand((prevVisibleItems) => prevVisibleItems + 2);
  };
  return (
    <article className="resultsLst">
      <section className="summarySection">
        <b>{searchList.length}</b>
        개의{` `}
        검색 결과
      </section>

      <CardTab
        cardTabList={searchList}
        initialVisibleItems={1}
        countExpand={countExpand}
      />
      {/* <a
        data-v-2da37580=""
        data-v-734f3b6c=""
        className="lst_more"
        onClick={showMoreItems}
      >
        카드 더보기
      </a> */}
    </article>
  );
};

export default CardList;
