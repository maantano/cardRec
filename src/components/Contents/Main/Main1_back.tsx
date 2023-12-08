import React from "react";
import "./Main1.css";

const Main1 = () => {
  return (
    <div className="firstDiv">
      <div className="secondDiv">
        <div className="lf-firstDiv">
          <h1 className="lf-firstH1">카드.</h1>
          <div className="lf-secondDiv">
            {/* 좋아하는 카드를 발급하는 가장 좋은 방법 */}
            필요한 카드를 확인하는 <br />
            가장 빠른 방법
          </div>
        </div>

        <div className="rg-upside-firstDiv">
          <div className="rg_firtDiv">
            <h3 className="rg_firstText">
              내게 맞는 카드상품, 비교하기 힘드시죠?
              <strong>쉽고 정확하게 비교합니다.</strong>
            </h3>
          </div>
          <div className="rg_btnDiv">
            <button className="rg_cssBtn">카드 검색</button>
          </div>
          {/* <div>
            <div style={{ fontWeight: 600, paddingTop: 0 }}>
              <div className="rg-upside-secondDiv">
                <div className="rg-upside-thirdDiv">
                  <img
                    width="35"
                    height="35"
                    alt=""
                    src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-chat-specialist-icon-202211_AV1?wid=35&amp;hei=35&amp;fmt=jpeg&amp;qlt=95&amp;.v=1671246164100"
                  />
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      paddingTop: 0,
                    }}
                  >
                    지원이 필요하다면?
                  </div>
                  <div className="rg-upside-fifthDiv">
                    "스페셜 리스트에게 문의하세요"
                  </div>
                </div>
              </div>
            </div>

            <div className="rg-douwnside-firstDiv">
              <div
                style={{ width: "51px", height: "36px", paddingRight: "8px" }}
              >
                <svg
                  viewBox="0 0 35 35"
                  className="as-svgicon as-svgicon-applestore as-svgicon-base as-svgicon-applestorebase"
                  role="img"
                  aria-hidden="true"
                  width="35px"
                  height="35px"
                >
                  <path fill="none" d="M0 0h35v35H0z"></path>
                  <path d="M17.5 32.217a1.136 1.136 0 01-1-.576l-1.812-2.525c-.053-.087-.1-.116-.156-.116H10.5A4.5 4.5 0 016 24.5V10.518a4.5 4.5 0 014.5-4.5h14a4.5 4.5 0 014.5 4.5V24.5a4.5 4.5 0 01-4.5 4.5h-4.036a.149.149 0 00-.129.074l-1.867 2.609a1.108 1.108 0 01-.968.534zM10.5 7A3.519 3.519 0 007 10.518V24.5a3.5 3.5 0 003.5 3.5h4.036a1.151 1.151 0 011 .576l1.808 2.524c.128.213.211.17.284.042l1.868-2.61a1.125 1.125 0 01.968-.532H24.5a3.5 3.5 0 003.5-3.5V10.518A3.519 3.519 0 0024.5 7z"></path>
                  <path d="M21.35 14.635a2.326 2.326 0 00-1.078 1.94 2.215 2.215 0 001.353 2.051 4.733 4.733 0 01-.693 1.444c-.429.617-.9 1.246-1.584 1.246s-.858-.408-1.661-.408c-.77 0-1.045.419-1.672.419s-1.078-.573-1.584-1.29a6.312 6.312 0 01-1.056-3.363 2.719 2.719 0 012.541-3.021c.682 0 1.232.441 1.65.441s1.023-.463 1.782-.463a2.348 2.348 0 012.002 1.004zm-3.729-1.114c-.055 0-.1-.011-.143-.011 0-.033-.011-.11-.011-.187a2.26 2.26 0 01.561-1.378 2.19 2.19 0 011.485-.772 1.074 1.074 0 01.011.2A2.329 2.329 0 0119 12.794a1.967 1.967 0 01-1.379.727z"></path>
                </svg>
              </div>
              <div>
                <div style={{ fontWeight: 600, paddingTop: 0 }}>
                  Store를 방문하세요
                </div>
                <div style={{ display: "block " }}>
                  <div
                    style={{
                      textDecoration: "none",
                      color: "#06c",
                      letterSpacing: "inherit",
                    }}
                  >
                    "가까운 매장 찾기"
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main1;
