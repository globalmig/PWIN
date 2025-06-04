import Image from "next/image";
import ProductSlide from "../ProductSlide ";

export default function RetainingDescription() {
  return (
    <div className="flex flex-col gap-4">
      <section className="w-full ">
        <ProductSlide />
      </section>

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
              <td className="py-4 px-2 border-r-2 border-zinc-300">환경블록</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">400</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">200</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">12kg</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">16개</td>
            </tr>
            <tr>
              <td className="py-4 px-2 border-r-2 border-zinc-300">유공블록</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">300</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">400</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">150</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">8kg</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">20개</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 예시 이미지 */}
      <section className="w-full border-t-2 pt-5 md:pt-10 ">
        <div className="flex gap-2 w-full">
          <div className="basis-1/2">
            <Image src="/images/products/환경호안블록/예시01.png" alt="환경호안블록 하천 설치" width={660} height={575} className="w-full rounded-lg" />
          </div>
          <div className="basis-1/2">
            <Image src="/images/products/환경호안블록/예시02.png" alt="환경호안블록 하천 설치" width={660} height={575} className="w-full rounded-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}
