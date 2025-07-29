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
              <li>소하천</li>
              <li>도로</li>
              <li>법면 절/성토부</li>
            </ul>
          </div>
        </section>
        {/* 상세도 */}
        <section className="w-full mt-5 md:mt-10 flex flex-col gap-10">
          <p className="text-center mt-10 text-xl md:text-3xl font-bold border-b-2 pb-5 text-green-900">보강토 옹벽블록 (250형)</p>
          {/* 블록 색상별 섹션 */}
          <div className="blockList grid grid-cols-2 md:grid-cols-4 relative mt-10">
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/products/보강토/gray.png" alt="보강토250형 회색" width={200} height={200} />
              <p className="text-center mt-6 ">회색</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/products/보강토/red.png" alt="보강토250형 적색" width={200} height={200} />
              <p className="text-center mt-6 ">적색(주문생산)</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/products/보강토/yellow.png" alt="보강토250형 황토색 주문생산 상품" width={200} height={200} />
              <p className="text-center mt-6 ">황토색(주문생산)</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/products/보강토/black.png" alt="보강토250형 흑색 주문생산 상품" width={200} height={200} />
              <p className="text-center mt-6 ">흑색(주문생산)</p>
            </div>
          </div>

          {/* 시공단면도 */}

          <section className="blockList grid grid-cols-1 md:grid-cols-2 relative mt-20">
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/products/보강토/상세도1.png" alt="보강토250형 회색" width={600} height={600} />
              <div className="flex justify-between w-full px-0 md:px-8 mb-20 md:mb-0">
                <p className="text-center mt-6 w-full ">정면도</p>
                <p className="text-center mt-6 w-full">측면도</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/products/보강토/상세도2.png" alt="보강토250형 회색" width={600} height={600} />
              <div className="flex justify-between w-full px-0 md:px-8 mt-10">
                <p className="text-center mt-6 w-full ">정면도</p>
                <p className="text-center mt-6 w-full">측면도</p>
              </div>
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
                  <th className="py-4 px- border-r-2 border-zinc-300">단위 수량</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b-2 border-zinc-300">
                  <td className="py-4 px-2 border-r-2 border-zinc-300">보강토 옹벽블록 (250형)</td>
                  <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
                  <td className="py-4 px-2 border-r-2 border-zinc-300">410</td>
                  <td className="py-4 px-2 border-r-2 border-zinc-300">250</td>
                  <td className="py-4 px-2 border-r-2 border-zinc-300">60kg</td>
                  <td className="py-4 px-2 border-r-2 border-zinc-300">8장/m²</td>
                </tr>
              </tbody>
            </table>
          </section>
          {/* 예시 이미지 */}
          <div className="w-full border-t-2 pt-5 md:pt-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
              <div className="basis-1/2">
                <Image src="/images/products/보강토/example_01.png" alt="보강토200 사용예시" width={319} height={208} className="w-full rounded-lg" />
              </div>
              <div className="basis-1/2">
                <Image src="/images/products/보강토/example_02.png" alt="보강토200 사용예시" width={319} height={208} className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 시공입체도 */}
      <section className="w-full mt-10 md:mt-32">
        <p className="text-center mt-10 text-xl md:text-3xl font-bold border-b-2 pb-5 text-green-900">시공입체도</p>
        <div className="w-full flex justify-center mt-10">
          <Image src="/images/products/보강토/보강토시공입체도.png" alt="보강토시공입체도" width={1000} height={674} className="w-full md:max-w-[60%] rounded-lg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 ">
          <div className="w-full flex justify-center mt-10">
            <Image src="/images/products/보강토/size.png" alt="보강토시공입체도" width={1000} height={674} className="w-full md:max-w-[80%] rounded-lg" />
          </div>
          <div className="w-full flex justify-center mt-10">
            <Image src="/images/products/보강토/grid.png" alt="보강토시공입체도" width={1000} height={674} className="w-full md:max-w-[80%] rounded-lg" />
          </div>
        </div>
      </section>

      {/* 시공순서 */}
      <section className="w-full mt-10 md:mt-32">
        <p className="text-center mt-10 text-xl md:text-3xl font-bold border-b-2 pb-5 text-green-900">시공순서</p>
        <div className="w-full flex justify-center mt-10">
          <Image src="/images/products/보강토/process.png" alt="시공순서" width={1000} height={1000} className="w-full  rounded-lg" />
        </div>
      </section>
    </>
  );
}
