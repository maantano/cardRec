import React, { useCallback, useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import "./PieChart.css";

// async function companyApi() {
//   const response = await fetch("/api/company");
//   return response.json();
// }

const PieChart = ({ targetRows }) => {
  // const { data, isLoading } = useQuery("company", companyApi);
  // console.log("data =======>");
  // console.log(data);
  // console.log("isLoading =======>");
  // console.log(isLoading);

  // console.log("targetRows ===>", targetRows);
  const handle = {
    padClick: (data) => {
      console.log(data);
    },

    legendClick: (data) => {
      console.log(data);
    },
  };

  // const calculateEarningsByCode2 = () => {
  //   const earningsByCode = {};
  //   targetRows.forEach((row) => {
  //     const code = row["업태코드"] || row[1][0]["업태코드"];
  //     const earnings =
  //       parseFloat(row["이용금액"]) || parseFloat(row[1][0]["이용금액"]);
  //     if (earningsByCode[code]) {
  //       earningsByCode[code] += earnings;
  //     } else {
  //       earningsByCode[code] = earnings;
  //     }
  //   });
  // };

  const calculateEarningsByCode = () => {
    const earningsByCode = {};
    targetRows.forEach((item) => {
      let code = ""; // 업태 코드
      let earnings = 0; // 초기 이용금액
      if (Array.isArray(item[1])) {
        earnings = item[1].reduce((sum, row) => sum + row["이용금액"], 0);
        code = item[0];
        // console.log(item[0]);
      } else {
        code = item["업태코드"];
        earnings = item["이용금액"];
      }
      if (earningsByCode[code]) {
        earningsByCode[code] += earnings;
      } else {
        earningsByCode[code] = earnings;
      }
    });

    // console.log("earningsByCode ====>", earningsByCode);
    const data = Object.entries(earningsByCode).map(([code, value]) => {
      return {
        id: code,
        value: value,
        formattedValue: value.toLocaleString(),
      };
    });
    // console.log("data ====>", data);

    const sortedData = data.slice().sort((a, b) => b.value - a.value);
    const rankedData = sortedData.map((item, index) => ({
      ...item,
      rank: index + 1,
    }));

    return rankedData;
  };
  const dataList = calculateEarningsByCode();

  return (
    <div>
      <div
        style={{
          width: "350px",
          height: "auto",
          margin: "0 auto",
        }}
      >
        <ResponsivePie
          data={dataList}
          //   margin={{ top: 70, right: 130, bottom: 80, left: 80 }}
          margin={{ top: 70, bottom: 80 }}
          innerRadius={0.5}
          padAngle={1.8}
          cornerRadius={8}
          enableArcLinkLabels={false}
          //   activeOuterRadiusOffset={8}
          colors={{ scheme: "blues" }}
          borderWidth={2}
          //   arcLinkLabelsSkipAngle={6}
          //   arcLinkLabelsTextColor="#000000"
          //   arcLinkLabelsThickness={2}
          //   arcLinkLabelsColor={{ from: "color" }}
          arcLabel={(e) => e.value.toLocaleString() + "원"}
          //   arcLinkLabelsOffset={24}
          //   arcLinkLabelsDiagonalLength={36}
          //   arcLinkLabelsTextOffset={25}
          tooltip={(item) => {
            console.log(item);
            return (
              <div>
                <div>
                  <b>{item.datum.data.id}</b>
                </div>
                <b>{item.datum.data.rank}번 소비 항목</b>
              </div>
            );
          }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 2]],
          }}
          //   defs={[
          //     {
          //       id: "dots",
          //       type: "patternDots",
          //       background: "inherit",
          //       color: "rgba(255, 255, 255, 0.3)",
          //       size: 4,
          //       padding: 1,
          //       stagger: true,
          //     },
          //     {
          //       id: "lines",
          //       type: "patternLines",
          //       background: "inherit",
          //       color: "rgba(255, 255, 255, 0.3)",
          //       rotation: -45,
          //       lineWidth: 6,
          //       spacing: 10,
          //     },
          //   ]}
          theme={{
            labels: {
              text: {
                fontSize: 15,
                fill: "#000000",
                color: "red",
              },
            },
            legends: {
              text: {
                fontSize: 12,
                fill: "#000000",
              },
            },
          }}
          onClick={handle.padClick}
          motionConfig="default"
          //   legends={[
          //     {
          //       anchor: "bottom-left", // 위치
          //       direction: "column", // item 그려지는 방향
          //       justify: false, // 글씨, 색상간 간격 justify 적용 여부
          //       translateX: -76, // chart와 X 간격
          //       translateY: 180, // chart와 Y 간격
          //       itemsSpacing: 0, // item간 간격
          //       itemWidth: 100, // item width
          //       itemHeight: 18, // item height
          //       itemDirection: "left-to-right", // item 내부에 그려지는 방향
          //       itemOpacity: 1, // item opacity
          //       symbolSize: 18, // symbol (색상 표기) 크기
          //       symbolShape: "circle", // symbol (색상 표기) 모양
          //       effects: [
          //         {
          //           on: "hover",
          //           style: {
          //             itemTextColor: "#000",
          //           },
          //         },
          //       ],
          //       onClick: handle.legendClick, // legend 클릭 이벤트
          //     },
          //   ]}
        />
      </div>
    </div>
  );
};

export default PieChart;
