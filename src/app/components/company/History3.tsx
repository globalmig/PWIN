import React from "react";
import Image from "next/image";

const historyList = [
  { key: 1, index: 0, year: "1964/05", title: "평원산업 회사설립", img: "/images/history/01.jpg" },
  { key: 2, index: 1, year: "1990/08", title: "벽돌, 블록 유압식 자동화 생산설비 구축", img: "/images/history/01.jpg" },
  { key: 3, index: 2, year: "1992/08", title: "KS F 4004 한국산업규격 표시인증 (인증번호: 제9301호)", img: "/images/history/01.jpg" },
  { key: 4, index: 3, year: "2007/02", title: "우수제품(GQ)마크 인증 (인증번호: 제 건재-380호)", img: "/images/history/01.jpg" },
  { key: 5, index: 4, year: "2007/02", title: "품질인증(건)마크 인증 (인증번호: 2007-16)", img: "/images/history/01.jpg" },
  { key: 6, index: 5, year: "2007/03", title: "KS F 4002 한국산업규격 표시인증 (인증번호: 제 07-0109호)", img: "/images/history/01.jpg" },
  { key: 7, index: 6, year: "2016/04", title: "보강토 옹벽블록 전용 자동화 생산설비 구축 (1호기)", img: "/images/history/01.jpg" },
  { key: 8, index: 7, year: "2016/10", title: "콘크리트 호안 및 옹벽블록 단체표준 표시인증 (인증번호: 제470호)", img: "/images/history/01.jpg" },
  { key: 9, index: 8, year: "2018/10", title: "보강토 옹벽블록 전용 자동화 생산설비 구축 (2호기)", img: "/images/history/01.jpg" },
  { key: 10, index: 9, year: "2020/10", title: "대형식생블록 자동화 생산설비 구축 (3호기)", img: "/images/history/01.jpg" },
  { key: 11, index: 10, year: "2021~현재", title: "'평스톤'상표 및 제품 디자인 특허 등록", img: "/images/history/01.jpg" },
];

export default function History3() {
  return (
    <div className="h-[1650px] relative">
      {/* 세로 라인 */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-400 z-0" />
      {/* 연혁 아이템 */}
      {historyList.map((item) => (
        <div key={item.key}>
          {/* 점 (라인 위에 위치) */}
          <div
            className="absolute left-1/2 w-3 h-3 bg-green-700 rounded-full z-10 -translate-x-1/2 "
            style={{ top: `${item.index * 160 + 20}px` }} // 텍스트보다 살짝 위쪽 위치
          />
          <div
            className={`item item-${item.index} group absolute w-1/2 px-6 py-4 cursor-pointer ${item.index % 2 === 0 ? "left-0 text-right pr-12 " : "text-left left-1/2 pl-12 "}`}
            style={{ top: `${item.index * 160}px` }} // 아이템 간 간격 조정
          >
            <p className=" md:text-2xl font-bold text-green-950 group-hover:text-2xl md:group-hover:text-4xl transform ease-in-out duration-500">{item.year}</p>
            <p className=" md:text-lg text-gray-800 group-hover:text-green-600">{item.title}</p>
            <div className={` w-full flex ${item.index % 2 === 0 ? "justify-end" : "justify-start"}`}>
              <div className="overflow-hidden scale-y-0 group-hover:scale-y-100 transition-all duration-500 ease-in-out md:block hidden">
                <Image src={item.img} alt="연호첨부이미지" width={100} height={100} className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
