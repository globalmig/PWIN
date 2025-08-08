import React from "react";
import Image from "next/image";

const historyList = [
  { key: 1, index: 0, year: "1964/05", title: "평원산업 설립", img: "/images/main/1964-평원산업 설립.jpg" },
  { key: 2, index: 1, year: "1990/08", title: "벽돌, 블록 유압식 자동화 생산설비 구축", img: "/images/certificate/certificates(1).webp" },
  { key: 3, index: 2, year: "1992/08", title: "KS F 4004 한국산업규격 표시인증 (인증번호: 제9301호)", img: "/images/certificate/certificates(7).webp" },
  { key: 4, index: 3, year: "2007/02", title: "우수제품(GQ)마크 인증 (인증번호: 제 건재-380호)", img: "/images/certificate/certificates(9).webp" },
  { key: 5, index: 4, year: "2007/02", title: "품질인증(건)마크 인증 (인증번호: 2007-16)", img: "/images/certificate/certificates(10).webp" },
  { key: 6, index: 5, year: "2007/03", title: "KS F 4002 한국산업규격 표시인증 (인증번호: 제 07-0109호)", img: "/images/certificate/certificates(3).webp" },
  { key: 7, index: 6, year: "2016/04", title: "보강토 옹벽블록 전용 자동화 생산설비 구축 (1호기)", img: "/images/certificate/2016-1호기.jpg" },
  { key: 8, index: 7, year: "2016/10", title: "콘크리트 호안 및 옹벽블록 단체표준 표시인증 (인증번호: 제470호)", img: "/images/certificate/certificates(11).png" },
  { key: 9, index: 8, year: "2018/10", title: "보강토 옹벽블록 전용 자동화 생산설비 구축 (2호기)", img: "/images/history/history_보강토.jpg" },
  { key: 10, index: 9, year: "2020/10", title: "대형식생블록 자동화 생산설비 구축 (3호기)", img: "/images/history/2020-3호기.jpg" },
  { key: 11, index: 10, year: "2021~현재", title: "'평스톤'상표 및 제품 디자인 특허 등록", img: "/images/certificate/certificates(8).webp" },
];

export default function History3() {
  return (
    <div className="h-[1650px] relative">
      {/* 세로 라인 */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-400 z-0 " />
      {/* 연혁 아이템 */}
      {historyList.map((item) => {
        const isLeft = item.index % 2 === 0;

        return (
          <div key={item.key} className="relative">
            <div className={`group absolute w-1/2 px-4 py-4 ${isLeft ? "left-0" : "left-1/2"}`} style={{ top: `${item.index * 160}px` }}>
              {/* flex 한 줄 구성: 왼쪽 항목이면 텍스트가 오른쪽에 오도록 row-reverse */}
              <div className={`relative flex items-center gap-4 ${isLeft ? " flex-row-reverse" : "justify-start"}`}>
                {/* 텍스트 */}
                <div
                  className={`
              ${isLeft ? "border-r-2 text-right pr-6" : "border-l-2 text-left pl-6"}
              transition-all duration-300 group-hover:border-green-600
            `}
                >
                  <p className="text-xl font-bold text-green-950 group-hover:text-3xl transition-all duration-500">{item.year}</p>
                  <p className="text-gray-800 group-hover:text-green-600">{item.title}</p>
                </div>

                {/* 이미지: 자리는 항상 확보(w-[300px])하고, hover 때만 보이게 */}
                <div className={`w-[300px] h-[300px] rounded-lg overflow-hidden shrink-0 ${isLeft ? "mr-6" : "ml-6"}`}>
                  <img
                    src={item.img}
                    alt="연혁 이미지"
                    className="
                w-full h-full object-cover rounded-lg
                opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100
                transition-transform duration-500 ease-out
                pointer-events-none
              "
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
