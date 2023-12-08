import React, { useCallback, useEffect, useState } from "react";
import Check from "./\bCheck";
import "./Cont1.css";
import Axios from "axios";

const Section1 = ({ creditCount, debitCount, setExpand }) => {
  // ------------------
  const [res, setRes] = useState([]);

  const getcardBenefit = async () => {
    try {
      await Axios.get("/api/cardBenefit").then((response) => {
        setRes(response.data);
      });
    } catch (e) {
      console.log("getcardBenefit ERROR 데이터를 받아올 수 없습니다.");
    }
  };
  useEffect(() => {
    getcardBenefit();
  }, []);

  const [expandCon, setExpandCon] = useState(false);
  const handleExpand = () => {
    setExpandCon(() => !expandCon);
  };

  const setExpandChild = () => {
    setExpand(!expandCon);
  };

  const [checkedList, setCheckedList] = useState([]);

  const onCheckedItem = useCallback(
    (checked, item) => {
      if (checked) {
        setCheckedList((prev) => [...prev, item]);
      } else if (!checked) {
        setCheckedList(checkedList.filter((el) => el !== item));
      }
    },
    [checkedList]
  );

  const [cardType, setCardType] = useState("");

  const checkOnlyOne = (e) => {
    let checkItem = document.getElementsByName("useType");
    Array.prototype.forEach.call(checkItem, function (el) {
      el.checked = false;
    });
    e.target.checked = true;
    setCardType(e.target.defaultValue);
  };

  return (
    <>
      <div className="part">
        <div className="part_left" style={{ display: "block" }}>
          <p className="txt">
            카드종류 선택 <i>필수</i>
          </p>
          <ul className="btnGroup">
            <li>
              <input
                type="checkbox"
                id="credit"
                name="useType"
                value="credit"
                onChange={(e) => checkOnlyOne(e)}
                checked={cardType === "credit"}
                style={{ display: "none" }}
              />
              <label htmlFor="credit" onClick={creditCount}>
                <a
                  className={
                    cardType === "credit"
                      ? `btn btnLineBlue on`
                      : "btn btnLineBlue"
                  }
                >
                  {/* <a className="btn btnLineBlue"> */}
                  <i>신용카드</i>
                </a>
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="debit"
                name="useType"
                value="debit"
                onChange={(e) => checkOnlyOne(e)}
                checked={cardType === "debit"}
                style={{ display: "none" }}
              />
              <label htmlFor="debit" onClick={debitCount}>
                <a
                  className={
                    cardType === "debit"
                      ? `btn btnLineBlue on`
                      : "btn btnLineBlue"
                  }
                >
                  <i>체크카드</i>
                </a>
              </label>
            </li>
          </ul>
        </div>
      </div>

      <section className={expandCon ? "" : "hiddenSection"}>
        <div className="part last benefit">
          <p className="txt">카드 혜택 선택</p>
          {res.map((item) => {
            return (
              // <ContextFunc.Consumer>
              <Check
                key={item.id}
                // name={item.name}
                // cont={item.cont}
                res={item}
                onCheckedItem={onCheckedItem}
              />
              // </ContextFunc.Consumer>
            );
          })}
        </div>
      </section>
      <a
        data-v-2f748e5a=""
        data-v-lstmore=""
        className="cont1LstMore"
        style={expandCon ? { display: "none" } : { display: "block" }}
        onClick={() => {
          handleExpand();
          setExpandChild();
        }}
      >
        콘텐츠 더보기
      </a>
      <div className="frameby">
        <div className="card_ani slidein1">
          <img
            src="https://api.card-gorilla.com:8080/storage/corp/2/tips/27173/tips_slide1.png"
            alt=""
          />
        </div>
        <div className="card_ani slidein2">
          <img
            src="https://api.card-gorilla.com:8080/storage/corp/2/tips/27174/tips_slide2.png"
            alt=""
          />
        </div>
        <div className="card_ani slidein3">
          <img
            src="https://api.card-gorilla.com:8080/storage/corp/2/tips/27175/tips_slide3.png"
            alt=""
          />
        </div>
        <div className="card_ani slidein4">
          <img
            src="https://api.card-gorilla.com:8080/storage/corp/2/tips/27176/tips_slide4.png"
            alt=""
          />
        </div>
        <div className="card_ani slidein5">
          <img
            src="https://api.card-gorilla.com:8080/storage/corp/2/tips/27177/tips_slide5.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Section1;
