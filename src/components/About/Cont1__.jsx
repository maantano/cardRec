import React, { useCallback, useEffect, useState } from "react";

import "./Cont1.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Axios from "axios";

// import ContextFunc from "./ContextFunc";

const Cont1 = () => {
  const [curTab, setCurTab] = useState(0);
  const [expand, setExpand] = useState(false);
  const [res, setRes] = useState([]);
  // const [res2, setRes2] = useState(CategoryList.CategoryList);
  const [totalCount, setTotalCount] = useState(0);

  // API!!!!
  const getcardAll = async () => {
    try {
      await Axios.get("/api/cardAll").then((response) => {
        setRes(response.data);
      });
    } catch (e) {
      console.log("ERROR 데이터를 받아올 수 없습니다.");
    }
  };

  const creditCount = async () => {
    try {
      await Axios.get("/api/cardAll/credit").then((response) => {
        setRes(response.data);
      });
    } catch (e) {
      console.log("creditCount Error 데이터를 받아올 수 없습니다.");
    }
  };
  const debitCount = async () => {
    try {
      await Axios.get("/api/cardAll/debit").then((response) => {
        setRes(response.data);
      });
    } catch (e) {
      console.log("debitCount Error 데이터를 받아올 수 없습니다.");
    }
  };

  const countTarget = useCallback((data) => {
    const targetCount = data.length;
    let currentCount = 0;
    const interval = setInterval(() => {
      if (currentCount >= targetCount) {
        clearInterval(interval);
      } else {
        currentCount += 1;
        setTotalCount(currentCount);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getcardAll();
  }, []);

  useEffect(() => {
    if (res.length > 0) {
      countTarget(res);
    }
  }, [res, countTarget]);

  return (
    <section className="contentArea">
      {/* <header>1234</header> */}
      <div className="cont1Div">
        <section style={{ paddingTop: 40 }}>
          <div className="inner">
            <article
              style={{ float: "left", width: 840, backgroundClip: "#F6F5F6" }}
            >
              <article className="searchSetting">
                <div className="step">
                  <div className="part tab">
                    {/* <a className="card" onClick={() => setCurTab(0)}> */}
                    <a
                      className={curTab === 0 ? "card on" : "card"}
                      onClick={() => {
                        setCurTab(0);
                        setExpand(false);
                      }}
                    >
                      <i></i>맞춤 카드 검색
                    </a>
                    <a
                      className={curTab === 1 ? "event on" : "event"}
                      onClick={() => setCurTab(1)}
                    >
                      <i></i>이벤트 카드 검색
                    </a>
                  </div>

                  {curTab === 0 ? (
                    <Section1
                      creditCount={creditCount}
                      debitCount={debitCount}
                      setExpand={setExpand}
                    />
                  ) : (
                    <Section2 />
                  )}
                </div>
              </article>
            </article>
            <article
              className={
                curTab === 0
                  ? "right_area sch_benefit rightTab1"
                  : "right_area sch_benefit rightTab2"
              }
              style={
                curTab === 0 && expand
                  ? { minHeight: 1875 }
                  : curTab === 1
                  ? { minHeight: 595 }
                  : { minHeight: 1362 }
              }
              //
            >
              <div className="sticky_con">
                <div>
                  <div className="search_results">
                    <h3 className="hide">검색 결과 및 검색하기</h3>
                    <div className="res">
                      <input className="hidden" />
                      <div className="count">
                        <p>
                          <i className="num">{totalCount}</i>개
                          <br />
                          카드 상품을 찾았습니다.
                        </p>
                      </div>
                      <div className="card_view">
                        <a className="bt on">
                          <span>{/* <b>828</b>개 */}</span>
                          <i>검색된 카드 보기</i>
                          <p
                            data-v-5c0601dc=""
                            data-v-734f3b6c=""
                            className="ex"
                          >
                            <i data-v-5c0601dc="" data-v-734f3b6c="">
                              필수 사항
                            </i>{" "}
                            선택 후 검색이 가능합니다.
                          </p>
                        </a>
                      </div>

                      <a className="reset">
                        <i>검색 초기화 하기</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
      <div
        data-v-7444ac99=""
        data-v-8f15a340=""
        className="ad_bottom flex_center"
      >
        <div
          data-v-0a0e3ee1=""
          data-v-7444ac99=""
          className="display-container ad  full-height relative-position display-container"
          style={{
            outline: "red solid 0px",
            minHeight: "300px",
            width: "900px",
          }}
        >
          <div data-v-0a0e3ee1="" className="full-height">
            <div
              data-v-0a0e3ee1=""
              className="q-carousel q-panel-parent full-height text-center"
            >
              <div className="q-carousel__slides-container">
                <div role="tabpanel" className="q-panel scroll">
                  <div
                    data-v-0a0e3ee1=""
                    className="q-carousel__slide relative-position no-padding text-center full-height flex_center"
                  >
                    <a
                      data-v-0a0e3ee1=""
                      href="/card/detail/500"
                      // href="/card/detail/51"
                      className="full-width full-height"
                      target="_self"
                    >
                      <div data-v-0a0e3ee1="" className="full-width">
                        <div data-v-0a0e3ee1="">
                          <img
                            data-v-0a0e3ee1=""
                            src="https://api.card-gorilla.com:8080/storage/display/3558/pc_img/29604/P_Banner_900x300_%EB%B0%94%ED%85%80%EB%B0%B0%EB%84%88.png"
                            style={{ width: "auto", height: "300px" }}
                            alt=""
                          />
                        </div>
                      </div>
                    </a>
                    <div data-v-0a0e3ee1="" style={{ height: "0px" }}>
                      <img
                        data-v-0a0e3ee1=""
                        src="https://teralog.techhub.co.kr/imp?la_gc=CP4B3643229850&amp;la_src=ib&amp;la_cnfg=2280"
                        width="0"
                        height="0"
                        style={{
                          maxWidth: "0px",
                          maxHeight: "0px",
                          display: "none",
                        }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cont1;
