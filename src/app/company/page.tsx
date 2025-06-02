"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

export default function Company() {
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center">
      <p>경영이념 및 방침</p>
      <div className="w-full max-w-[1440px] px-4">
        <section className="boss">
          <h2>경영이념 및 방침</h2>
          <p>
            " 평원산업은 환경보호와 생태보존을 위하여 지속 가능한 발전을 목표로 끊임없이 노력하고 있는 기업으로서, 선진화된 시스템과 인증받은 기술력으로 친환경 제품개발에 앞장서겠습니다. " 끊임없는
            친환경 콘크리트 신제품 개발로 동종업계를 선도하는 기업으로, 우수한 제품에 기술력을 더하여 선택에 후회가 되지 않도록 결과로 보답해 드릴 것을 약속합니다. 여러분의 지지와 협력에 늘 깊은
            감사를 드립니다. 평원산업 임직원 일동
          </p>
        </section>
      </div>
    </div>
  );
}
