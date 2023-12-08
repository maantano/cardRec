import React from "react";
import S from "./Main4.module.css";
import useScrollFadeIn from "../../hooks/useScrollFadIn";
import Main4Mobile from "./Main4Mobile";
import Main4Text from "./Main4Text";
const Main4 = () => {
  const animatedItem = {
    0: useScrollFadeIn("up", 1, 0.4),
  };
  return (
    <div className={S.firstDiv}>
      <div className={S.contentDiv}>
        <h1 className={S.upsideText1}>버려지는 돈?</h1>
        <h2 className={S.upsideText2}>
          포인트, 할인, 캐쉬백, 마일리지,
          <br />
          놓치지 말고 다 가져가세요
        </h2>
      </div>

      <div className={S.totalDiv}>
        <Main4Mobile />
        <div>
          <Main4Text />
          {/* <div className={S.rgDiv}>
            <div className={S.rgTitle}>평생 무료 송금</div>
            <div className={S.rgTextContent}>
              토스 평생 무료송금으로 모두의 금융에 자유를
            </div>
            <div className={S.rgTextContent2}>
              누구에게 보내든 은행 상관 없이, 이제 토스와 함께 수수료 걱정 없이
              송금하세요.
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Main4;
