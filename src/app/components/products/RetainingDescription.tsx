import Image from "next/image";
import ProductSlide from "../ProductSlide ";

export default function RetainingDescription() {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* 제품 특징 · 적용 섹션 */}
        <section className="w-full flex flex-col md:flex-row justify-between gap-4">
          <div className="border border-zinc-300 rounded-xl w-full md:w-1/2 p-8 text-sm md:text-xl transform duration-500 ease-in-out">
            <p className="text-2xl md:text-title mb-4 md:mb-2 font-semibold">제품 특징</p>
            <ul className="list-disc ml-4">
              <li>토사유출 방지턱이 있어 토사 흘림을 방지</li>
              <li>기계화 시공으로 시공이 간편하며 공기의 단축효과가 매우 높음</li>
              <li>관통홀을 통해 식생 뿌리를 조기에 활착 유도하여 생태계복원 효과가 우수</li>
              <li>자연석 돌기와 기학적인 돌기구성으로 하천경관의 조경효과가 매우 높음</li>
            </ul>
          </div>
          <div className="border border-zinc-300 rounded-xl w-full md:w-1/2 p-8 text-sm md:text-xl transform duration-500 ease-in-out">
            <p className="text-2xl md:text-title mb-4 md:mb-2 font-semibold">적용</p>
            <ul className="list-disc ml-4">
              <li>하천 저/고수 호안공</li>
              <li>만곡부</li>
              <li>유수지</li>
              <li>도로 법면</li>
            </ul>
          </div>
        </section>
        {/* 상세도 */}
        <section className="w-full mt-5 md:mt-10 flex flex-col gap-10">
          <p className="text-center mt-10 text-3xl font-bold border-b-2 pb-5 text-green-900">보강토 250</p>
          <div className="w-full h-[200px] md:h-[400px] relative">
            <Image src="/images/products/보강토/img (1).png" alt="보강토250형 색상 별" fill className="object-contain" />
          </div>
          <div className="w-full h-[200px] md:h-[400px] relative">
            <Image src="/images/products/보강토/img (2).png" alt="보강토단면도" fill className="object-contain" />
          </div>
        </section>
        {/* 예시 이미지 */}
        <section className="w-full border-t-2 pt-5 md:pt-10 ">
          <div className="flex gap-2 w-full">
            <div className="basis-1/2">
              <Image src="/images/products/보강토/img (3).png" alt="보강토200 사용예시" width={319} height={208} className="w-full rounded-lg" />
            </div>
            <div className="basis-1/2">
              <Image src="/images/products/보강토/img (4).png" alt="보강토200 사용예시" width={319} height={208} className="w-full rounded-lg" />
            </div>
          </div>
        </section>{" "}
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
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-zinc-300">
                <td className="py-4 px-2 border-r-2 border-zinc-300">보강토 옹벽블록 (250형)</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">410</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">250</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">60kg</td>
              </tr>
              <tr>
                <td className="py-4 px-2 border-r-2 border-zinc-300">마감(캡) 블록</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">350</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">125</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">42kg</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-center mt-40 text-3xl font-bold border-b-2 pb-5 text-green-900">보강토 200</p>
        {/* 시공단면도 */}
        <section className="w-full mt-5 md:mt-10 flex flex-col gap-10">
          <div className="w-full h-[200px] md:h-[400px] relative">
            <Image src="/images/products/보강토/img (5).png" alt="보강토200 회색,적색 " fill className="object-contain" />
          </div>
          <div className="w-full h-[200px] md:h-[400px] relative">
            <Image src="/images/products/보강토/img (6).png" alt="환경호안블록시공단면도" fill className="object-contain" />
          </div>
          <div className="w-full h-[200px] md:h-[400px] relative">
            <Image src="/images/products/보강토/img (9_1).png" alt="환경호안블록시공단면도" fill className="object-contain" />
          </div>
          {/* <div className="w-full flex mt-10 border-t-2 pd-5 md:gap-4 md:pt-10">
            <Image src="/images/products/환경호안블록/상세도/평면도.png" alt="환경호안블록평면도" width={346} height={403} className="w-1/3" />
            <Image src="/images/products/환경호안블록/상세도/측면도.png" alt="환경호안블록시공측면도" width={346} height={403} className="w-1/3" />
            <Image src="/images/products/환경호안블록/상세도/시공평면도.png" alt="환경호안블록시공평면도" width={424} height={444} className="w-1/3" />
          </div> */}
        </section>
        {/* 예시 이미지 */}
        <section className="w-full border-t-2 py-5 md:py-10 ">
          <div className="flex gap-2 w-full">
            <div className="basis-1/2">
              <Image src="/images/products/보강토/img (7).png" alt="보강토200 사용예시" width={660} height={575} className="w-full rounded-lg" />
            </div>
            <div className="basis-1/2">
              <Image src="/images/products/보강토/img (8).png" alt="보강토200 사용예시" width={660} height={575} className="w-full rounded-lg" />
            </div>
          </div>
        </section>{" "}
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
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-zinc-300">
                <td className="py-4 px-2 border-r-2 border-zinc-300">보강토 옹벽블록 (200형)</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">430</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">200</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">48kg</td>
              </tr>
              <tr>
                <td className="py-4 px-2 border-r-2 border-zinc-300">마감(캡) 블록</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">350</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">100</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">34kg</td>
              </tr>
            </tbody>
          </table>
        </section>
        <Image src="/images/products/보강토/img (10).png" alt="보강토200 사용예시" width={660} height={575} quality={90} sizes="(max-width: 768px) 100vw, 50vw" className="w-full rounded-lg" />
      </div>
    </>
  );
}
