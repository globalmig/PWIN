import Image from "next/image";

export default function MasonryDescription() {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* 제품 특징 · 적용 섹션 */}
        <section className="w-full flex flex-col md:flex-row justify-between gap-4">
          <div className="border border-zinc-300 rounded-xl w-full md:w-1/2 p-8 text-sm md:text-xl transform duration-500 ease-in-out">
            <p className="text-2xl md:text-title mb-4 md:mb-2 font-semibold">제품 특징</p>
            <ul className="list-disc ml-4">
              <li>시공이 간편하며 공기의 단축 효과가 높고 철, 성토부에 적용성이 높아 경제성이 우수하다.</li>
              <li>전면의 식재공간에 다양한 식재구성으로 동식물의 생육과 서식공간을 제공하여 조기에 하천 생태계를 복원할 수 있다.</li>
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
          <p className="text-center mt-10 text-xl md:text-3xl font-bold border-b-2 pb-5 text-green-900">축조블록 (타원형)</p>
          {/* 블록 색상별 섹션 */}
          <div className="block relative mt-10">
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/products/식생축조/gray.png" alt="식생축조" width={400} height={400} />
              {/* <p className="text-center mt-6 ">[ 회색 ]</p> */}
            </div>
          </div>

          {/* 시공단면도 */}
          <section className="blueprint relative mt-20">
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/products/식생축조/blueprint.png" alt="식생축조 설계도" width={1400} height={400} />
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
                  <td className="py-4 px-2 border-r-2 border-zinc-300">식생 축조블록(타원형)</td>
                  <td className="py-4 px-2 border-r-2 border-zinc-300">1000</td>
                  <td className="py-4 px-2 border-r-2 border-zinc-300">700</td>
                  <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
                  <td className="py-4 px-2 border-r-2 border-zinc-300">370kg</td>
                  <td className="py-4 px-2 border-r-2 border-zinc-300">2장/m²</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* 예시 이미지 */}
          <div className="w-full border-t-2 pt-5 md:pt-10 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
              <div className="basis-1/2">
                <Image src="/images/products/식생축조/example_01.png" alt="보강토200 사용예시" width={319} height={208} className="w-full rounded-lg" />
              </div>
              <div className="basis-1/2">
                <Image src="/images/products/식생축조/example_02.png" alt="보강토200 사용예시" width={319} height={208} className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 시공입체도 */}
      <section className="w-full mt-10 md:mt-32">
        <p className="text-center mt-10 text-xl md:text-3xl font-bold border-b-2 pb-5 text-green-900">시공단면도 및 조립도</p>

        <div className="grid grid-cols-1 md:grid-cols-2  mt-10 ">
          <div className="w-full flex justify-center mt-10">
            <Image src="/images/products/식생축조/blueprint_02.png" alt="시공단면도" width={700} height={500} className="w-full rounded-lg" />
          </div>
          <div className="w-full flex justify-center mt-10">
            <Image src="/images/products/식생축조/blueprint_03.png" alt="조립도" width={386} height={510} className="w-full md:max-w-[60%] rounded-lg" />
          </div>
        </div>
      </section>

      {/* 축조블록 */}
      <section className="w-full mt-10 md:mt-32">
        <p className="text-center mt-10 text-xl md:text-3xl font-bold border-b-2 pb-5 text-green-900">축조블록 (평면형)</p>
        <div className="block relative mt-10">
          <div className="flex flex-col items-center justify-center">
            <Image src="/images/products/식생축조/gray.png" alt="식생축조" width={400} height={400} />
          </div>
        </div>

        {/* 설계도 01 */}
        <div className="flex flex-col mt-10 ">
          <div className="w-full flex justify-center mt-10">
            <Image src="/images/products/식생축조/blueprint_plane_01.png" alt="시공단면도" width={700} height={500} className="w-full max-w-[70%] rounded-lg" />
          </div>
          <div className="text-wrap flex w-full max-w-[90%] px-10 justify-between mx-auto items-center">
            <p className="w-full max-w-[60%] md:pl-10 text-center">[ 평면도 ]</p>
            <p className="w-full max-w-[40%] pl-4 md:pl-0 text-center">[ 평면도 ]</p>
          </div>
        </div>

        {/* 설계도 02 */}
        <div className="flex flex-col mt-10 ">
          <div className="w-full flex justify-center mt-10">
            <Image src="/images/products/식생축조/blueprint_plane_02.png" alt="시공단면도" width={700} height={500} className="w-full md:max-w-[70%] rounded-lg" />
          </div>
          <div className="text-wrap flex w-full md:max-w-[90%] md:px-10 justify-between mx-auto items-center">
            <p className="w-full max-w-[40%] text-center">[ 코너블록(좌측) ]</p>
            <p className="w-full max-w-[40%] text-center">[ 코너블록(우측) ]</p>
            <p className="w-full max-w-[20%] md:pr-10 lg:pr-32 text-center">[ 반블록 ]</p>
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

          {/* 축조블록 평면형 */}
          <tbody>
            <tr className="border-b-2 border-zinc-300">
              <td className="py-4 px-2 border-r-2 border-zinc-300">식생 축조블록(타원형)</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">1000</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">700</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">370kg</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">2장/m²</td>
            </tr>
          </tbody>

          {/* 축조블록 평면형 코너블록 */}
          <tbody>
            <tr className="border-b-2 border-zinc-300">
              <td className="py-4 px-2 border-r-2 border-zinc-300">축조블록(평면형) 코너블록</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">1000</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">310kg</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">2장/m²</td>
            </tr>
          </tbody>

          {/* 축조블록 평면형 반블록 */}
          <tbody>
            <tr className="border-b-2 border-zinc-300">
              <td className="py-4 px-2 border-r-2 border-zinc-300">축조블록(평면형) 반블록</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">700</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">500</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">200kg</td>
              <td className="py-4 px-2 border-r-2 border-zinc-300">4장/m²</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 예시 이미지 */}
      <section className="w-full  pt-5 md:pt-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          <div className="basis-1/2">
            <Image src="/images/products/식생축조/example_plane_01.png" alt="보강토200 사용예시" width={319} height={208} className="w-full rounded-lg" />
          </div>
          <div className="basis-1/2">
            <Image src="/images/products/식생축조/example_plane_02.png" alt="보강토200 사용예시" width={319} height={208} className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* 조립도 */}
      <section className="w-full mt-10 md:mt-32">
        <p className="text-center mt-10 text-xl md:text-3xl font-bold border-b-2 pb-5 text-green-900">조립도</p>
        <div className=" mt-10 ">
          <div className="w-full flex justify-center mt-10">
            <Image src="/images/products/식생축조/design_plane.png" alt="조립도" width={700} height={500} className="w-full md:max-w-[50%] rounded-lg" />
          </div>
        </div>
      </section>

      {/* 시공순서 */}
      <section className="w-full mt-10 md:mt-32">
        <p className="text-center mt-10 text-xl md:text-3xl font-bold border-b-2 pb-5 text-green-900">시공순서</p>
        <div className="block relative mt-10">
          <div className="flex flex-col items-center justify-center">
            <Image src="/images/products/식생축조/process.png" alt="식생축조" width={1400} height={774} />
          </div>
        </div>
      </section>
    </>
  );
}
