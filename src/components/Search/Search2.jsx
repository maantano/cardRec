import React, { useEffect, useState } from "react";
import "./Search2.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const asyncUpFetchCardCop = createAsyncThunk(
  "cardCorp/cardCorpReducer",
  async ({ corporationTarget }) => {
    try {
      const response = await Axios.post("/api/cardCorporation", {
        corporationTarget,
      });
      return response.data;
    } catch (e) {
      console.log("asyncUpFetchXlsx ERROR 데이터를 받아올 수 없습니다.");
      throw e;
    }
  }
);

const Search2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [corporationCList, setCorporationCList] = useState([]);

  const navigateToDetail = (obj) => {
    navigate(`/detail/${obj.id}`, {
      state: { list: obj },
    });
  };

  async function targetCard(targetId) {
    try {
      const response = await Axios.post("/api/targetCard", {
        targetId,
      });
      navigateToDetail(response.data[0]);
    } catch (err) {
      console.error("API Error:", err.message);
      throw err;
    }
  }

  const handleNodeClick = async (clickedId) => {
    try {
      await navigateToSearchCardCorp(clickedId);
    } catch (error) {
      console.error("handleNodeClick Error:", error);
    }
  };

  const navigateToSearchCardCorp = async (corporationTarget) => {
    try {
      const action = asyncUpFetchCardCop({
        corporationTarget,
      });

      const response = await dispatch(action);
      navigate("/search", {
        state: {
          list: response.payload,
          type: "credit",
          cardCorp: true,
          corporationTarget,
        },
      });
    } catch (error) {
      console.error("navigateToSearchCardCorp Error:", error);
    }
  };

  async function cardCorpList() {
    try {
      const response = await Axios.post("/api/cardCorporationList");
      setCorporationCList(response.data);
    } catch (error) {
      // 에러 처리
      console.error("API Error:", error.message);
      throw error;
    }
  }
  useEffect(() => {
    cardCorpList();
  }, []);

  return (
    <>
      <div className="ad">
        <div
          className="display-container  full-height relative-position display-container"
          style={{ outline: " red solid 0px" }}
        >
          <div className="full-height">
            <div className="q-carousel q-panel-parent full-height text-center">
              <div className="q-carousel__slides-container">
                <div role="tabpanel" className="q-panel scroll">
                  <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                    <a
                      href="/card/detail/2441"
                      className="full-width full-height"
                    >
                      <div className="full-width">
                        {/* <a href=""> */}
                        {/* <img
                          alt=""
                          src="https://api.card-gorilla.com:8080/storage/display/3792/pc_img/29664/230627_17704_KB%EA%B5%AD%EB%AF%BC%EC%B9%B4%EB%93%9C_%EC%B9%B4%EB%93%9C%EA%B3%A0%EB%A6%B4%EB%9D%BC_%EC%84%9C%EB%B8%8C%EC%9A%B0%EC%B8%A1PC_340X340_V1.jpg"
                          style={{ width: "auto", height: "100%" }}
                        /> */}
                        {/* </a> */}
                      </div>
                    </a>
                    <div style={{ height: "0px" }}>
                      <img
                        alt=""
                        src="https://teralog.techhub.co.kr/imp?la_gc=CP4B3643229850&amp;la_src=ib&amp;la_cnfg=1599"
                        width="0"
                        height="0"
                        style={{
                          maxAidth: "0px",
                          maxHeight: "0px",
                          display: "none",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 투표!!!! */}
      {/* <div className="rgt_lst poll">
        <div
          className="display-container  full-height relative-position display-container"
          style={{ outline: "red solid 0px" }}
        >
          <div className="full-height">
            <div className="q-carousel q-panel-parent full-height text-center">
              <div className="q-carousel__slides-container">
                <div role="tabpanel" className="q-panel scroll">
                  <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                    <a
                      href="/search/card"
                      className="full-width full-height router-link-active"
                      target="_self"
                    >
                      <div>
                        <a dclassName="title">
                          <p>
                            <h4>
                              <b>POLL</b>
                              <i>투표 진행 중</i>
                            </h4>
                          </p>
                        </a>
                      </div>
                    </a>
                    <div style={{ height: " 0px" }}>
                      <img
                        src=""
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

        <div
          className="display-container  full-height relative-position display-container"
          style={{ outline: "red solid 0px" }}
        >
          <div className="full-height">
            <div className="q-carousel q-panel-parent full-height text-center">
              <div className="q-carousel__slides-container">
                <div role="tabpanel" className="q-panel scroll">
                  <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                    <a
                      href="/poll/live"
                      className="full-width full-height"
                      target="_self"
                    >
                      <div className="full-width full-height flex_center">
                        <div
                          className="os_poll"
                          data-of="bluffcatch"
                          data-opinionstage-widget="c010fcf3-debb-46ca-92df-5d9cd79f4051"
                          data-path="/polls/2909407"
                          id="os-widget-1160315"
                          data-rendering="completed"
                          style={{ position: "relative", minHeight: "200px" }}
                        >
                          <div
                            className="os_widget_container os_widget_container/polls/2909407-0"
                            style={{ clear: "both" }}
                          >
                            <iframe
                              height="0"
                              frameborder="0"
                              scrolling="no"
                              style={{
                                opacity: 1,
                                border: "none",
                                margin: "auto",
                                height: "369px",
                                width: "1px",
                                minWidth: "100%",
                                maxWidth: "640px",
                                maxHeight: "369px !important",
                              }}
                              src="https://www.opinionstage.com/api/v2/widgets/c010fcf3-debb-46ca-92df-5d9cd79f4051/iframe?sembed=1&amp;wid=%2Fpolls%2F2909407-0&amp;hosting_url=https%3A%2F%2Fwww.card-gorilla.com%2Fsearch%2Fcard%3Fcate%3DCHK%26search_benefit%3D21%2C16%2C5"
                              name="opinionstage-widget"
                              data-opinionstage-iframe="c010fcf3-debb-46ca-92df-5d9cd79f4051"
                              webkitallowfullscreen=""
                              mozallowfullscreen=""
                              allowfullscreen=""
                              referrerpolicy="no-referrer-when-downgrade"
                              title="ifr1"
                            ></iframe>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div style={{ height: "0px" }}>
                      <img
                        src=""
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
      </div> */}

      {/* 투표!!!! */}

      <div className="rgt_lst event">
        <div
          className="display-container event-title  full-height relative-position display-container"
          style={{ outline: "red solid 0px" }}
        >
          <div style={{ height: "70px" }}>
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center  ">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      <a
                        href="/search/card"
                        className="full-width full-height router-link-active"
                        target="_self"
                      >
                        <div>
                          <div className="title">
                            <p>
                              이번달은? 최대 <strong>121.5만원</strong> 캐시백
                            </p>
                          </div>
                        </div>
                      </a>
                      <div style={{ height: "0px" }}>
                        <img
                          src=""
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

        <div className="pro_wrap">
          <div
            onClick={() => targetCard("kbCard01")}
            className="display-container  full-height relative-position display-container"
            style={{ outline: "red solid 0px" }}
          >
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      {/* <a
                        href="https://card-gorilla.com/search/card?corp=3&amp;search_benefit=177"
                        target="_self"
                      > */}
                      <div style={{ width: "100%" }}>
                        <div className="event_ctnr">
                          <p className="plate">
                            <img
                              src="https://api.card-gorilla.com:8080/storage/card/2441/card_img/28283/2441card.png"
                              alt=""
                            />
                          </p>
                          <p className="company">KB국민카드</p>
                          <p className="benefit">
                            <strong>19.5만원</strong> 캐시백
                          </p>
                        </div>
                      </div>
                      {/* </a> */}
                      <div style={{ height: "0px" }}>
                        <img
                          src=""
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
          <div
            onClick={() => targetCard("smCard01")}
            className="display-container  full-height relative-position display-container"
            style={{ outline: "red solid 0px" }}
          >
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      {/* <a
                        href="https://card-gorilla.com/search/card?corp=1&amp;search_benefit=177"
                        target="_self"
                      > */}
                      <div style={{ width: "100%" }}>
                        <div className="event_ctnr">
                          <p className="plate">
                            <img
                              src="https://api.card-gorilla.com:8080/storage/card/51/card_img/27707/51card.png"
                              alt=""
                            />
                          </p>
                          <p className="company">삼성카드</p>
                          <p className="benefit">
                            <strong>18만원</strong> 캐시백
                          </p>
                        </div>
                      </div>
                      {/* </a> */}
                      <div style={{ height: "0px" }}>
                        <img
                          src=""
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
          <div
            onClick={() => targetCard("ltCard01")}
            className="display-container  full-height relative-position display-container"
            style={{ outline: "red solid 0px" }}
          >
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center  ">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      {/* <a
                        href="https://card-gorilla.com/search/card?corp=4&amp;search_benefit=177"
                        target="_self"
                      > */}
                      <div style={{ width: "100%" }}>
                        <div className="event_ctnr">
                          <p className="plate">
                            <img
                              src="https://api.card-gorilla.com:8080/storage/card/2330/card_img/24131/2330card.png"
                              alt=""
                            />
                          </p>
                          <p className="company">롯데카드</p>
                          <p className="benefit">
                            <strong>15만원</strong> 캐시백
                          </p>
                        </div>
                      </div>
                      {/* </a> */}
                      <div style={{ height: "0px" }}>
                        <img
                          src=""
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
          <div
            onClick={() => targetCard("shCard01")}
            className="display-container  full-height relative-position display-container"
            style={{ outline: "red solid 0px" }}
          >
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center  ">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      {/* <a
                        href="https://card-gorilla.com/search/card?corp=2&amp;search_benefit=177"
                        target="_self"
                      > */}
                      <div style={{ width: "100%" }}>
                        <div className="event_ctnr">
                          <p className="plate">
                            <img
                              src="https://api.card-gorilla.com:8080/storage/card/2295/card_img/22902/2295card.png"
                              alt=""
                            />
                          </p>
                          <p className="company">신한카드</p>
                          <p className="benefit">
                            <strong>15만원</strong> 캐시백
                          </p>
                        </div>
                      </div>
                      {/* </a> */}
                      <div tyle={{ height: "0px" }}>
                        <img
                          src=""
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
          <div
            onClick={() => targetCard("nhCard01")}
            className="display-container  full-height relative-position display-container"
            style={{ outline: "red solid 0px" }}
          >
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center  ">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      {/* <a
                        href="https://card-gorilla.com/search/card?corp=9&amp;search_benefit=177"
                        target="_self"
                      > */}
                      <div style={{ width: "100%" }}>
                        <div className="event_ctnr">
                          <p className="plate">
                            <img
                              src="https://api.card-gorilla.com:8080/storage/card/2513/card_img/28755/2513card.png"
                              alt=""
                            />
                          </p>
                          <p className="company">NH농협카드</p>
                          <p className="benefit">
                            <strong>12만원</strong> 캐시백
                          </p>
                        </div>
                      </div>
                      {/* </a> */}
                      <div style={{ height: "0px" }}>
                        <img
                          src=""
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
          <div
            className="display-container btn_more  full-height relative-position display-container"
            style={{ outline: "red solid 0px" }}
          >
            <div className="full-height">
              <div className="q-carousel q-panel-parent full-height text-center  ">
                <div className="q-carousel__slides-container">
                  <div role="tabpanel" className="q-panel scroll">
                    <div className="q-carousel__slide relative-position no-padding text-center full-height flex_center">
                      {/* <a
                        href="/event"
                        className="full-width full-height"
                        target="_self"
                      >
                        <div>
                          <div>
                            <p>이벤트 더 보기</p>
                          </div>
                        </div>
                      </a> */}
                      <div style={{ height: "0px" }}>
                        <img
                          src=""
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
        {/* 여기서 부터 이제 카드 은행 페이지 넘길꺼!!! */}
      </div>
      {/* <div data-v-734f3b6c className="popular_contents rgt_lst">
        <h4 style={{ fontSize: "18px" }}>
          <b>POPULAR CONTENTS</b> <i> 카드</i>
        </h4>
        <ul className="lst">
          <li>
            <div
              className="display-container  full-height relative-position display-container"
              style={{ outline: "red solid 0px" }}
            >
              <div className="full-height">
                <div className="q-carousel q-panel-parent full-height text-left">
                  <div className="q-carousel__slides-container">
                    <div role="tabpanel" className="q-panel scroll">
                      <div className="q-carousel__slide relative-position no-padding text-left full-height flex_center">
                        <a
                          href="/contents/detail/2608"
                          className="full-width full-height"
                          target="_self"
                        >
                          <div>
                            <div
                              data-v-f9f941ec=""
                              data-v-35734774=""
                              className="card_02"
                            >
                              <div data-v-f9f941ec="" data-v-35734774="">
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="plate"
                                ></p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="logo"
                                >
                                  <img
                                    data-v-f9f941ec=""
                                    data-v-35734774=""
                                    src="https://api.card-gorilla.com:8080/storage/corp/2/logo_img/28210/logo_img.png"
                                    alt="신한카드"
                                  />
                                </p>

                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="name_en"
                                >
                                  shinhan
                                </p>
                                <i
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="plus"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="display-container  full-height relative-position display-container"
              style={{ outline: "red solid 0px" }}
            >
              <div className="full-height">
                <div className="q-carousel q-panel-parent full-height text-left">
                  <div className="q-carousel__slides-container">
                    <div role="tabpanel" className="q-panel scroll">
                      <div className="q-carousel__slide relative-position no-padding text-left full-height flex_center">
                        <a
                          href="/contents/detail/2608"
                          className="full-width full-height"
                          target="_self"
                        >
                          <div>
                            <div
                              data-v-f9f22222=""
                              data-v-35734774=""
                              className="card_02"
                            >
                              <div data-v-f9f941ec="" data-v-35734774="">
                                <p
                                  data-v-f9f22222=""
                                  data-v-35734774=""
                                  className="plate"
                                ></p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="logo"
                                >
                                  <img
                                    data-v-f9f941ec=""
                                    data-v-35734774=""
                                    src="https://api.card-gorilla.com:8080/storage/corp/3/logo_img/3/logo_img.png"
                                    alt="KB국민카드"
                                  />
                                </p>

                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="name_en"
                                >
                                  kb
                                </p>
                                <i
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="plus"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="display-container  full-height relative-position display-container"
              style={{ outline: "red solid 0px" }}
            >
              <div className="full-height">
                <div className="q-carousel q-panel-parent full-height text-left">
                  <div className="q-carousel__slides-container">
                    <div role="tabpanel" className="q-panel scroll">
                      <div className="q-carousel__slide relative-position no-padding text-left full-height flex_center">
                        <a
                          href="/contents/detail/2608"
                          className="full-width full-height"
                          target="_self"
                        >
                          <div>
                            <div
                              data-v-f9f33333=""
                              data-v-35734774=""
                              className="card_02"
                            >
                              <div data-v-f9f941ec="" data-v-35734774="">
                                <p
                                  data-v-f9f33333=""
                                  data-v-35734774=""
                                  className="plate"
                                ></p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="logo"
                                >
                                  <img
                                    data-v-f9f941ec=""
                                    data-v-35734774=""
                                    src="https://api.card-gorilla.com:8080/storage/corp/8/logo_img/25186/logo_img_hn.png"
                                    alt="하나카드"
                                  />
                                </p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="name_en"
                                >
                                  hana
                                </p>
                                <i
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="plus"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="display-container  full-height relative-position display-container"
              style={{ outline: "red solid 0px" }}
            >
              <div className="full-height">
                <div className="q-carousel q-panel-parent full-height text-left">
                  <div className="q-carousel__slides-container">
                    <div role="tabpanel" className="q-panel scroll">
                      <div className="q-carousel__slide relative-position no-padding text-left full-height flex_center">
                        <a
                          href="/contents/detail/2608"
                          className="full-width full-height"
                          target="_self"
                        >
                          <div>
                            <div
                              data-v-f9f44444=""
                              data-v-35734774=""
                              className="card_02"
                            >
                              <div data-v-f9f941ec="" data-v-35734774="">
                                <p
                                  data-v-f9f44444=""
                                  data-v-35734774=""
                                  className="plate"
                                ></p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="logo"
                                >
                                  <img
                                    data-v-f9f941ec=""
                                    data-v-35734774=""
                                    src="https://api.card-gorilla.com:8080/storage/corp/9/logo_img/9/logo_img.png"
                                    alt="NH농협카드"
                                  />
                                </p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="name_en"
                                >
                                  nh
                                </p>
                                <i
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="plus"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="display-container  full-height relative-position display-container"
              style={{ outline: "red solid 0px" }}
            >
              <div className="full-height">
                <div className="q-carousel q-panel-parent full-height text-left">
                  <div className="q-carousel__slides-container">
                    <div role="tabpanel" className="q-panel scroll">
                      <div className="q-carousel__slide relative-position no-padding text-left full-height flex_center">
                        <a
                          href="/contents/detail/2608"
                          className="full-width full-height"
                          target="_self"
                        >
                          <div>
                            <div
                              data-v-f9f55555=""
                              data-v-35734774=""
                              className="card_02"
                            >
                              <div data-v-f9f941ec="" data-v-35734774="">
                                <p
                                  data-v-f9f55555=""
                                  data-v-35734774=""
                                  className="plate"
                                ></p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="logo"
                                >
                                  <img
                                    data-v-f9f941ec=""
                                    data-v-35734774=""
                                    src="https://api.card-gorilla.com:8080/storage/corp/7/logo_img/7/logo_img.png"
                                    alt="현대카드"
                                  />
                                </p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="name_en"
                                >
                                  hd
                                </p>
                                <i
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="plus"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="display-container  full-height relative-position display-container"
              style={{ outline: "red solid 0px" }}
            >
              <div className="full-height">
                <div className="q-carousel q-panel-parent full-height text-left">
                  <div className="q-carousel__slides-container">
                    <div role="tabpanel" className="q-panel scroll">
                      <div className="q-carousel__slide relative-position no-padding text-left full-height flex_center">
                        <a
                          href="/contents/detail/2608"
                          className="full-width full-height"
                          target="_self"
                        >
                          <div>
                            <div
                              data-v-f9f66666=""
                              data-v-35734774=""
                              className="card_02"
                            >
                              <div data-v-f9f941ec="" data-v-35734774="">
                                <p
                                  data-v-f9f66666=""
                                  data-v-35734774=""
                                  className="plate"
                                ></p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="logo"
                                >
                                  <img
                                    data-v-f9f941ec=""
                                    data-v-35734774=""
                                    src="https://api.card-gorilla.com:8080/storage/corp/1/logo_img/25543/logo_img_ss.png"
                                    alt="삼성카드"
                                  />
                                </p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="name_en"
                                >
                                  samsung
                                </p>
                                <i
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="plus"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="display-container  full-height relative-position display-container"
              style={{ outline: "red solid 0px" }}
            >
              <div className="full-height">
                <div className="q-carousel q-panel-parent full-height text-left">
                  <div className="q-carousel__slides-container">
                    <div role="tabpanel" className="q-panel scroll">
                      <div className="q-carousel__slide relative-position no-padding text-left full-height flex_center">
                        <a
                          href="/contents/detail/2608"
                          className="full-width full-height"
                          target="_self"
                        >
                          <div>
                            <div
                              data-v-f9f77777=""
                              data-v-35734774=""
                              className="card_02"
                            >
                              <div data-v-f9f941ec="" data-v-35734774="">
                                <p
                                  data-v-f9f77777=""
                                  data-v-35734774=""
                                  className="plate"
                                ></p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="logo"
                                >
                                  <img
                                    data-v-f9f941ec=""
                                    data-v-35734774=""
                                    src="https://api.card-gorilla.com:8080/storage/corp/4/logo_img/25187/loca_logo.png"
                                    alt="롯데카드"
                                  />
                                </p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="name_en"
                                >
                                  lotte
                                </p>
                                <i
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="plus"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="display-container  full-height relative-position display-container"
              style={{ outline: "red solid 0px" }}
            >
              <div className="full-height">
                <div className="q-carousel q-panel-parent full-height text-left">
                  <div className="q-carousel__slides-container">
                    <div role="tabpanel" className="q-panel scroll">
                      <div className="q-carousel__slide relative-position no-padding text-left full-height flex_center">
                        <a
                          href="/contents/detail/2608"
                          className="full-width full-height"
                          target="_self"
                        >
                          <div>
                            <div
                              data-v-f9f88888=""
                              data-v-35734774=""
                              className="card_02"
                            >
                              <div data-v-f9f941ec="" data-v-35734774="">
                                <p
                                  data-v-f9f88888=""
                                  data-v-35734774=""
                                  className="plate"
                                ></p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="logo"
                                >
                                  <img
                                    data-v-f9f941ec=""
                                    data-v-35734774=""
                                    src="https://api.card-gorilla.com:8080/storage/corp/5/logo_img/25184/logo_img_wr.png"
                                    alt="우리카드"
                                  />
                                </p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="name_en"
                                >
                                  wr
                                </p>
                                <i
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="plus"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="display-container  full-height relative-position display-container"
              style={{ outline: "red solid 0px" }}
            >
              <div className="full-height">
                <div className="q-carousel q-panel-parent full-height text-left">
                  <div className="q-carousel__slides-container">
                    <div role="tabpanel" className="q-panel scroll">
                      <div className="q-carousel__slide relative-position no-padding text-left full-height flex_center">
                        <a
                          href="/contents/detail/2608"
                          className="full-width full-height"
                          target="_self"
                        >
                          <div>
                            <div
                              data-v-f9f99999=""
                              data-v-35734774=""
                              className="card_02"
                            >
                              <div data-v-f9f941ec="" data-v-35734774="">
                                <p
                                  data-v-f9f99999=""
                                  data-v-35734774=""
                                  className="plate"
                                ></p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="logo"
                                >
                                  <img
                                    data-v-f9f941ec=""
                                    data-v-35734774=""
                                    src="https://api.card-gorilla.com:8080/storage/corp/10/logo_img/10/logo_img.png"
                                    alt="IBK기업은행"
                                  />
                                </p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="name_en"
                                >
                                  ibk
                                </p>
                                <i
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="plus"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div
              className="display-container  full-height relative-position display-container"
              style={{ outline: "red solid 0px" }}
            >
              <div className="full-height">
                <div className="q-carousel q-panel-parent full-height text-left">
                  <div className="q-carousel__slides-container">
                    <div role="tabpanel" className="q-panel scroll">
                      <div className="q-carousel__slide relative-position no-padding text-left full-height flex_center">
                        <a
                          href="/contents/detail/2608"
                          className="full-width full-height"
                          target="_self"
                        >
                          <div>
                            <div
                              data-v-f9f101010=""
                              data-v-35734774=""
                              className="card_02"
                            >
                              <div data-v-f9f941ec="" data-v-35734774="">
                                <p
                                  data-v-f9f101010=""
                                  data-v-35734774=""
                                  className="plate"
                                ></p>
                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="logo"
                                >
                                  <img
                                    data-v-f9f941ec=""
                                    data-v-35734774=""
                                    src="https://api.card-gorilla.com:8080/storage/corp/32/logo_img/25185/logo_img_bc_baro.png"
                                    alt="BC 바로카드"
                                  />
                                </p>

                                <p
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="name_en"
                                >
                                  bc
                                </p>
                                <i
                                  data-v-f9f941ec=""
                                  data-v-35734774=""
                                  className="plus"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default Search2;
