import React from "react";
import Image from "next/image";

export default function Default() {
  return (
    <div>
      {/* 제품 특징 · 적용 섹션 */}
      <section className="w-full flex flex-col md:flex-row justify-between gap-4">
        <div className="border border-zinc-300 rounded-xl w-full md:w-1/2 p-8 text-sm md:text-xl transform duration-500 ease-in-out">
          <p className="text-2xl md:text-title mb-4 md:mb-2 font-semibold">제품 특징</p>
          <ul className="list-disc ml-4">
            <li>고정핀과 맞물림 구조로 시공 안정성 우수</li>
            <li>간편한 시공, 배면토 유출 방지 및 토압에 강함</li>
            <li>공기 단축, 절·성토부 적용 용이, 경제성 뛰어남</li>
            <li>식재 공간 제공으로 생태 복원 가능</li>
          </ul>
        </div>
        <div className="border border-zinc-300 rounded-xl w-full md:w-1/2 p-8 text-sm md:text-xl transform duration-500 ease-in-out">
          <p className="text-2xl md:text-title mb-4 md:mb-2 font-semibold">적용</p>
          <ul className="list-disc ml-4">
            <li>소하천</li>
            <li>도로</li>
            <li>법면 절/성토부</li>
          </ul>
        </div>
      </section>{" "}
      {/* 시공단면도 */}
      <section className="w-full mt-5 md:mt-10">
        <div className="w-full h-[200px] md:h-[400px] relative">
          <Image src="/images/products/환경호안블록/시공단면도.png" alt="환경호안블록시공단면도" fill className="object-contain" />
        </div>
        <div className="w-full flex mt-10 border-t-2 pd-5 md:gap-4 md:pt-10">
          <Image src="/images/products/환경호안블록/상세도/평면도.png" alt="환경호안블록평면도" width={346} height={403} className="w-1/3" />
          <Image src="/images/products/환경호안블록/상세도/측면도.png" alt="환경호안블록시공측면도" width={346} height={403} className="w-1/3" />
          <Image src="/images/products/환경호안블록/상세도/시공평면도.png" alt="환경호안블록시공평면도" width={424} height={444} className="w-1/3" />
        </div>
      </section>
      {/* 규격 테이블 표*/}
      <section className="w-full border-t-2 py-5 md:py-10">
        <p className="w-full text-end text-zinc-500 mb-2">단위: mm</p>
        <table className="w-full text-center border border-zinc-300 text-sm md:text-lg">
          <thead>
            <tr className="bg-slate-200 border-b-2 border-zinc-300 ">
              <th className="py-4 px-2 border-r-2 border-zinc-300">품명</th>
              <th className="py-4 px-2  border-r-2 border-zinc-300">W</th>
              <th className="py-4 px-2 border-r-2 border-zinc-300">L</th>
              <th className="py-4 px-2 border-r-2 border-zinc-300">H</th>
              <th className="py-4 px- border-r-2 border-zinc-300">참고중량</th>
              <th className="py-4 px-2">단위수량</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-zinc-300">
              <td className="py-4 px-2 border-r-2 border-zinc-300">식생축조블록</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">1000</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">700</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">380kg</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">2장/m²</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
