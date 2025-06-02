"use client";

import React, { useState, useEffect, useRef } from "react";

const historyList = [
  { key: 1, year: "1964/05", title: "평원산업 회사설립" },
  { key: 2, year: "1990/08", title: "벽돌, 블록 유압식 자동화 생산설비 구축" },
  { key: 3, year: "1992/08", title: "KS F 4004 한국산업규격 표시인증 (인증번호: 제9301호)" },
  { key: 4, year: "2007/02", title: "우수제품(GQ)마크 인증 (인증번호: 제 건재-380호)" },
  { key: 5, year: "2007/02", title: "품질인증(건)마크 인증 (인증번호: 2007-16)" },
  { key: 6, year: "2007/03", title: "KS F 4002 한국산업규격 표시인증 (인증번호: 제 07-0109호" },
  { key: 7, year: "2016/04", title: "보강토 옹벽블록 전용 자동화 생산설비 구축 (1호기)" },
  { key: 8, year: "2016/10", title: "콘크리트 호안 및 옹벽블록 단체표준 표시인증 (인증번호: 제470호)" },
  { key: 9, year: "2018/10", title: "보강토 옹벽블록 전용 자동화 생산설비 구축 (2호기)" },
  { key: 10, year: "2020/10", title: "대형식생블록(축조블록, 환경블록, 잔디블록) 자동화 생산설비 구축 (3호기)" },
  { key: 11, year: "2021~현재", title: "'평스톤'상표 및 제품 디자인 다수 특허청 등록" },
];

export default function History() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setActive] = useState(historyList[0]);
  const lastScrollTime = useRef(0);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActive(historyList[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // 연혁 섹션에서만 동작하도록 체크
      if (!historyRef.current?.contains(e.target as Node)) return;

      e.preventDefault();

      const now = Date.now();
      // 스크롤 이벤트 디바운싱 (200ms)
      if (now - lastScrollTime.current < 200) return;
      lastScrollTime.current = now;

      if (e.deltaY > 0) {
        // 아래로 스크롤 - 다음 항목
        setCurrentIndex((prev) => Math.min(prev + 1, historyList.length - 1));
      } else {
        // 위로 스크롤 - 이전 항목
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setCurrentIndex((prev) => Math.min(prev + 1, historyList.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    // 터치 이벤트 추가 (모바일)
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (!historyRef.current?.contains(e.target as Node)) return;
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!historyRef.current?.contains(e.target as Node)) return;

      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        // 최소 50px 이상 스와이프
        if (diff > 0) {
          // 위로 스와이프 - 다음 항목
          setCurrentIndex((prev) => Math.min(prev + 1, historyList.length - 1));
        } else {
          // 아래로 스와이프 - 이전 항목
          setCurrentIndex((prev) => Math.max(prev - 1, 0));
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const activeHandler = (value: { year: string; title: string }, index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <section ref={historyRef} className="history text-title w-full text-center min-h-screen flex flex-col justify-center">
        <h2 className="my-10">회사연혁</h2>

        <div className="flex gap-8 items-start">
          <div className="flex flex-col w-1/2 gap-4 text-center ">
            <p className="text-4xl text-end text-lime-500 transition-all duration-500 ease-in-out">{isActive.year}</p>
            <p className="text-4xl text-end font-bold text-gray-700 transition-all duration-500 ease-in-out leading-tight">{isActive.title}</p>
          </div>

          <div className="w-1/2 flex flex-col items-center">
            <div className="relative ">
              <ul className="flex flex-col gap-2">
                {historyList.map((item, index) => (
                  <li
                    className={`flex justify-start gap-6 items-center p-4 rounded-lg text-left cursor-pointer transition-all duration-300 ${
                      currentIndex === index ? "bg-blue-100 border-l-4 border-blue-500 transform scale-105" : "hover:bg-gray-50 opacity-60"
                    }`}
                    onClick={() => activeHandler(item, index)}
                    key={item.key}
                  >
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-blue-500" : "bg-gray-400"}`} />
                    <div>
                      <p className="font-bold text-lg">{item.year}</p>
                      <p className="text-sm text-gray-600 mt-1">{item.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
