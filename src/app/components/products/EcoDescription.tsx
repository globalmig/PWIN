import Image from "next/image";

export default function EsoDescription() {
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
          <p className="text-center mt-10 text-xl md:text-3xl font-bold border-b-2 pb-5 text-green-900">호안블록</p>
          {/* 블록 색상별 섹션 */}
          <div className="blockList relative ">
            <div className="flex flex-col items-center justify-center gap-10">
              <Image src="/images/products/환경호안블록/gray.png" alt="호안블록 회색" width={400} height={200} />
              {/* <p className="text-center mt-6 ">[ 회색 ]</p> */}
              <Image src="/images/products/환경호안블록/blueprint.png" alt="호안블록 설계도" width={1400} height={500} className="w-full md:max-w-[80%]" />
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
            {/* 호안 200 */}
            <tbody>
              <tr className="border-b-2 border-zinc-300">
                <td className="py-4 px-2 border-r-2 border-zinc-300">호안블록(200형)</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">1000</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">1000</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">200</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">260kg</td>
                <th className="py-4 px- border-r-2 border-zinc-300">1장/m²</th>
              </tr>
            </tbody>

            {/* 호안 250 */}
            <tbody>
              <tr className="border-b-2 border-zinc-300">
                <td className="py-4 px-2 border-r-2 border-zinc-300">호안블록(250형)</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">340</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">125</td>
                <td className="py-4 px-2 border-r-2 border-zinc-300">39kg</td>
                <th className="py-4 px- border-r-2 border-zinc-300">1장/m²</th>
              </tr>
            </tbody>
          </table>
        </section>
        {/* 예시 이미지 */}
        <div className="w-full border-t-2 pt-5 md:pt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
            <div className="basis-1/2">
              <Image src="/images/products/환경호안블록/example_01.png" alt="보강토200 사용예시" width={319} height={208} className="w-full rounded-lg" />
            </div>
            <div className="basis-1/2">
              <Image src="/images/products/환경호안블록/example_02.png" alt="보강토200 사용예시" width={319} height={208} className="w-full rounded-lg" />
            </div>
          </div>
        </div>

        {/* 시공입체도 */}
        <section className="w-full mt-5 md:mt-10 flex flex-col gap-10">
          <p className="text-center mt-10 text-xl md:text-3xl font-bold border-b-2 pb-5 text-green-900">시공입체도</p>

          <div className="flex flex-col items-center justify-center gap-10">
            <Image src="/images/products/환경호안블록/design.png" alt="시공입체도" width={1075} height={603} className="w-full md:max-w-[60%]" />
          </div>
        </section>
      </div>
    </>
  );
}
