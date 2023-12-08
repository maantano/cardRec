import React from "react";
import S from "./Fourth.module.css";
const Main4back = () => {
  const bankarr = [
    { name: "국민은행", link: "kbbank.svg" },
    { name: "신한은행", link: "shinhan.svg" },
    { name: "우리은행", link: "woori.svg" },
    { name: "하나은행", link: "hana.svg" },
    { name: "현대카드", link: "hyundai.svg" },
    { name: "카카오뱅크", link: "kakao.svg" },
    { name: "토스뱅크", link: "toss.png" },
    { name: "뱅크샐러드", link: "banksalad.png" },
    { name: "KEB은행", link: "keb.png" },
    { name: "농협은행", link: "nonghyup.svg" },
    { name: "BC카드", link: "bc.svg" },
  ];
  return (
    <div style={{}}>
      <div className={S.firstDiv}>
        {bankarr.map((item) => {
          return (
            <div key={item.name} style={{ display: "inline-block" }}>
              <div
                style={{
                  marginLeft: 0,
                  height: 148,
                  marginRight: 10,
                  display: "flex",
                }}
              >
                <div style={{ verticalAlign: "top" }}>
                  <div
                    style={{
                      overflow: "hidden",
                      borderRadius: "18px",
                      height: "148px",
                      minWidth: "136px",
                      padding: "18px 8px 16px",
                      boxSizing: "border-box",
                    }}
                  >
                    <div style={{ paddingBottom: "16px" }}>
                      {item.link && (
                        <img
                          src={require(`../../../assets/icons/bank/${item.link}`)}
                          width="24"
                          height="24"
                          alt={item.name}
                          className={S.liSvg}
                        />
                      )}
                    </div>
                    <div>
                      <div>
                        <a href="/" className={S.aaa}>
                          {item.name}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main4back;
