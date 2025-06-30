"use client";
import React, { useEffect } from "react";

export default function page() {
  useEffect(() => {
    // 접속하자마자 전화 연결 시도
    window.location.href = "tel:0315840023";
  }, []);

  return (
    <div className="flex flex-col mx-auto justify-center items-center min-h-[80vh] gap-4">
      <p className="text-2xl">PC 접속자분들은 아래 전화번호로 직접 연락 부탁드립니다.</p>
      <p className="font-bold text-xl text-green-600">☎ 031-584-0023~5</p>

      <button className="px-10 py-4 bg-green-900 text-white rounded-lg mt-10 md:mt-32">시작 화면으로</button>
    </div>
  );
}
