"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import History from "./history/page";
import Certificate from "./certificate/page";
import Location from "./location/page";

export default function Company() {
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center gap-10">
      <section className="boss w-full max-w-[1440px] flex flex-col px-4 justify-center items-center">
        <p className="text-title font-semibold">경영이념 및 방침</p>
        <div className="flex flex-col md:flex-row gap-4 my-10">
          <div className="bg-black w-ful md:w-1/2 h-20"></div>
          <p className="w-full md:w-1/2 text-body px-10">
            <strong className="text-4xl font-medium text-lime-600">평원산업</strong>은 환경보호와 생태보존을 위하여 지속 가능한 발전을 목표로 끊임없이 노력하고 있는 기업으로서, 선진화된 시스템과
            인증받은 기술력으로 친환경 제품개발에 앞장서겠습니다. <br /> <br />
            끊임없는 친환경 콘크리트 신제품 개발로 동종업계를 선도하는 기업으로, 우수한 제품에 기술력을 더하여 선택에 후회가 되지 않도록 결과로 보답해 드릴 것을 약속합니다. 여러분의 지지와 협력에 늘
            깊은 감사를 드립니다. <br />
            <br />
            평원산업 임직원 일동
          </p>
        </div>
      </section>
      <section>
        {/* TODO: 회사 연혁 디자인 변경  */}
        <History />
      </section>
      <section>
        <Certificate />
      </section>
      <section>
        <Location />
      </section>
    </div>
  );
}
