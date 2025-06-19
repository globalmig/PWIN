"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const historyList = [
  { key: 1, index: 1, year: "1964/05", title: "평원산업 회사설립" },
  { key: 2, index: 2, year: "1990/08", title: "벽돌, 블록 유압식 자동화 생산설비 구축" },
  { key: 3, index: 3, year: "1992/08", title: "KS F 4004 한국산업규격 표시인증 (인증번호: 제9301호)" },
  { key: 4, index: 4, year: "2007/02", title: "우수제품(GQ)마크 인증 (인증번호: 제 건재-380호)" },
  { key: 5, index: 5, year: "2007/02", title: "품질인증(건)마크 인증 (인증번호: 2007-16)" },
  { key: 6, index: 6, year: "2007/03", title: "KS F 4002 한국산업규격 표시인증 (인증번호: 제 07-0109호)" },
  { key: 7, index: 7, year: "2016/04", title: "보강토 옹벽블록 전용 자동화 생산설비 구축 (1호기)" },
  { key: 8, index: 8, year: "2016/10", title: "콘크리트 호안 및 옹벽블록 단체표준 표시인증 (인증번호: 제470호)" },
  { key: 9, index: 9, year: "2018/10", title: "보강토 옹벽블록 전용 자동화 생산설비 구축 (2호기)" },
  { key: 10, index: 10, year: "2020/10", title: "대형식생블록 자동화 생산설비 구축 (3호기)" },
  { key: 11, index: 11, year: "2021~현재", title: "'평스톤'상표 및 제품 디자인 특허 등록" },
];

export default function History2() {
  const main = useRef(null);

  useGSAP(
    () => {
      // box 움직임
      const [box, box2, box3, box4, box5, box6, box7, box8, box9, box10] = gsap.utils.toArray<HTMLElement>(".box, .box2, .box3,.box4,  .box5, .box6, .box7, .box8, .box9, .box10");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: main.current,
          start: "top 10%",
          end: `+=${160 * (historyList.length - 1)}`,

          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 5,
          markers: true,
        },
      });

      tl.to([box, box2, box3, box4, box5, box6, box7, box8, box9, box10], { y: 200 })
        .to([box2, box3, box4, box5, box6, box7, box8, box9, box10], { y: 350 })
        .to([box3, box4, box5, box6, box7, box8, box9, box10], { y: 520 })
        .to([box4, box5, box6, box7, box8, box9, box10], { y: 660 })
        .to([box5, box6, box7, box8, box9, box10], { y: 840 })
        .to([box6, box7, box8, box9, box10], { y: 1000 })
        .to([box7, box8, box9, box10], { y: 1160 })
        .to([box8, box9, box10], { y: 1300 })
        .to([box9, box10], { y: 1480 })
        .to([box10], { y: 1640 });

      // 연혁 fade-in
      historyList.forEach((item) => {
        gsap.from(`.item-${item.index}`, {
          scrollTrigger: {
            trigger: `.item-${item.index}`,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false,
          },
          opacity: 0,
          y: 50,
          duration: 0.2,
        });
      });
    },
    { scope: main }
  );

  return (
    <div className="h-[3500px]">
      <div className="relative w-full max-w-[1440px] mx-auto px-4 py-20" ref={main}>
        {/* 세로 라인 */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-400 z-0" />

        {/* 움직이는 박스 */}
        <div className="box w-4 h-4 rounded-full bg-blue-500 absolute left-1/2 -translate-x-1/2 top-0 z-10" />
        <div className="box2 w-4 h-4 rounded-full bg-blue-500 absolute left-1/2 -translate-x-1/2 top-0 z-10" />
        <div className="box3 w-4 h-4 rounded-full bg-blue-500 absolute left-1/2 -translate-x-1/2 top-0 z-10" />
        <div className="box4 w-4 h-4 rounded-full bg-blue-500 absolute left-1/2 -translate-x-1/2 top-0 z-10" />
        <div className="box5 w-4 h-4 rounded-full bg-blue-500 absolute left-1/2 -translate-x-1/2 top-0 z-10" />
        <div className="box6 w-4 h-4 rounded-full bg-blue-500 absolute left-1/2 -translate-x-1/2 top-0 z-10" />
        <div className="box7 w-4 h-4 rounded-full bg-blue-500 absolute left-1/2 -translate-x-1/2 top-0 z-10" />
        <div className="box8 w-4 h-4 rounded-full bg-blue-500 absolute left-1/2 -translate-x-1/2 top-0 z-10" />
        <div className="box9 w-4 h-4 rounded-full bg-blue-500 absolute left-1/2 -translate-x-1/2 top-0 z-10" />
        <div className="box10 w-4 h-4 rounded-full bg-blue-500 absolute left-1/2 -translate-x-1/2 top-0 z-10" />

        {/* 연혁 아이템 */}
        {historyList.map((item, i) => (
          <div
            key={item.key}
            className={`item item-${item.index} absolute w-1/2 px-6 py-4 ${i % 2 === 0 ? "left-0 text-right pr-12" : "left-1/2 pl-12 "}`}
            style={{ top: `${i * 160}px` }} // 아이템 간 간격 조정
          >
            <p className="text-lg font-bold text-gray-600 ">{item.year}</p>
            <p className="text-base text-gray-800">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
