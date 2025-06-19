"use client";
import Image from "next/image";
import React from "react";
import History from "./history/page";
import History2 from "../components/company/History2";
import Certificate from "./certificate/page";
import Location from "./location/page";
import History3 from "../components/company/History3";
import { motion } from "framer-motion";

export default function Company() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
      <div className="w-full mx-auto flex flex-col justify-center items-center gap-16 px-4 sm:px-6 md:px-10">
        {/* 히어로 비디오 섹션 */}
        <section className="w-full flex flex-col justify-center items-center">
          <div className="relative w-full h-[500px] sm:h-[600px] md:h-screen max-h-[700px] rounded-2xl overflow-hidden">
            {/* 비디오 */}
            <video src="/videos/company.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />

            {/* 어두운 오버레이 */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

            {/* 콘텐츠 (로고 + 대사) */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center space-y-6 px-4 sm:px-6 md:px-10">
              {/* 로고 */}
              <div className="relative w-40 sm:w-48 h-14 sm:h-16 mb-4">
                <Image src="/images/pwinLogo7_white.svg" alt="평원산업로고" fill className="object-contain" />
              </div>

              {/* 문구 */}
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl italic text-zinc-200 max-w-2xl md:max-w-4xl w-full leading-relaxed">
                “환경보호와 생태보존을 위하여 <br /> 지속 가능한 발전을 목표로 끊임없이 노력하고 있는 기업으로서,
                <br className="hidden sm:block" />
                선진화된 시스템과 인증받은 기술력으로 친환경 제품개발에 앞장서겠습니다.”
              </p>
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-zinc-100 max-w-2xl md:max-w-4xl w-full leading-relaxed">
                끊임없는 친환경 콘크리트 신제품 개발로 동종업계를 선도하는 기업으로,
                <br />
                우수한 제품에 기술력을 더하여 선택에 후회가 되지 않도록 결과로 보답해 <br /> 드릴 것을 약속합니다.
              </p>
              <p className="text-xs sm:text-sm md:text-lg text-zinc-300 mt-4 max-w-4xl w-full">
                여러분의 지지와 협력에 늘 깊은 감사를 드립니다.
                <br />
                <span className="font-semibold">평원산업 임직원 일동</span>
              </p>
            </div>
          </div>
        </section>

        {/* 하단 구성 */}
        <section className="w-full max-w-[1440px]  text-center" id="history">
          <h2 className="text-4xl md:text-5xl font-medium border-b-2 mb-4 md:mb-20 border-lime-700 pb-2 inline-block">회사연혁</h2>
          <History3 />
          {/* <History /> */}
        </section>
        <section className="w-full max-w-[1440px] text-center" id="certificate">
          <h2 className="text-4xl md:text-5xl font-medium border-b-2 mb-4 md:mb-4 md:mt-40 mt-10  border-lime-700 pb-2 inline-block ">인증현황</h2>
          <Certificate />
        </section>
        <section className="w-full max-w-[1440px] text-center" id="location">
          <h2 className="text-4xl md:text-5xl font-medium border-b-2 mb-4 md:mb-10 md:mt-10  border-lime-700 pb-2 inline-block ">오시는 길</h2>
          <Location />
        </section>
      </div>
    </motion.div>
  );
}
