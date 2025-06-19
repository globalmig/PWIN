import React from "react";
import Image from "next/image";

export default function Block01Detail() {
  return (
    <>
      {/* 제품 상세 설명 */}
      <section className="px-4 w-full max-w-[1440px] mx-auto space-y-10">
        {/* 제품 특징 / 적용 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="border border-zinc-300 rounded-xl p-8 text-sm md:text-xl w-full md:w-1/2">
            <p className="text-2xl font-semibold mb-4">제품 특징</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>토사유출 방지턱이 있어 토사 흘림을 방지</li>
              <li>기계화 시공으로 시공이 간편하며 공기의 단축효과가 매우 높음</li>
              <li>관통홀을 통해 식생 뿌리를 조기에 활착 유도하여 생태계복원 효과가 우수</li>
              <li>자연석 돌기와 기학적인 돌기구성으로 하천경관의 조경효과가 매우 높음</li>
            </ul>
          </div>
          <div className="border border-zinc-300 rounded-xl p-8 text-sm md:text-xl w-full md:w-1/2">
            <p className="text-2xl font-semibold mb-4">적용</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>하천 저/고수 호안공</li>
              <li>만곡부</li>
              <li>유수지</li>
              <li>도로 법면</li>
            </ul>
          </div>
        </div>

        {/* 시공 단면도 */}
        <div className="border-t-2 pt-10 flex flex-col md:flex-row gap-6">
          {[
            { src: "/images/products/환경호안블록/상세도/평면도.png", alt: "환경호안블록 평면도" },
            { src: "/images/products/환경호안블록/상세도/측면도.png", alt: "환경호안블록 측면도" },
            { src: "/images/products/환경호안블록/상세도/시공평면도.png", alt: "환경호안블록 시공평면도" },
          ].map((img, index) => (
            <div className="w-full md:w-1/3 aspect-[3/4] relative" key={index}>
              <Image src={img.src} alt={img.alt} fill className="object-contain" />
            </div>
          ))}
        </div>

        {/* 규격 테이블 */}
        <div className="border-t-2 pt-10">
          <p className="text-right text-zinc-500 mb-2">단위: mm</p>
          <div className="overflow-x-auto">
            <table className="min-w-[600px] w-full text-center border border-zinc-300 text-sm md:text-lg">
              <thead>
                <tr className="bg-slate-200 border-b-2 border-zinc-300">
                  <th className="py-4 px-2 border-r-2">품명</th>
                  <th className="py-4 px-2 border-r-2">W</th>
                  <th className="py-4 px-2 border-r-2">L</th>
                  <th className="py-4 px-2 border-r-2">H</th>
                  <th className="py-4 px-2 border-r-2">참고중량</th>
                  <th className="py-4 px-2">단위수량</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-zinc-300">
                  <td className="py-4 px-2 border-r-2">환경블록</td>
                  <td className="py-4 px-2 border-r-2">400</td>
                  <td className="py-4 px-2 border-r-2">500</td>
                  <td className="py-4 px-2 border-r-2">200</td>
                  <td className="py-4 px-2 border-r-2">12kg</td>
                  <td className="py-4 px-2">16개</td>
                </tr>
                <tr>
                  <td className="py-4 px-2 border-r-2">유공블록</td>
                  <td className="py-4 px-2 border-r-2">300</td>
                  <td className="py-4 px-2 border-r-2">400</td>
                  <td className="py-4 px-2 border-r-2">150</td>
                  <td className="py-4 px-2 border-r-2">8kg</td>
                  <td className="py-4 px-2">20개</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
