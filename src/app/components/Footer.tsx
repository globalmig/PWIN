import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex w-full mx-auto justify-center items-start gap-10 pt-10 bg-slate-200 mt-10 md:mt-20 px-4 ">
      <div className="relative  w-40 h-auto aspect-[3/1]  max-w-[1440px] ">
        <Image src="/images/logo3.svg" alt="Logo" fill className="object-contain" />
      </div>
      <div>
        <p>평원산업 | 대표: 김범준</p>
        <p>경기도 가평군 청평면 상지로 11-111 (상천리 321-2)</p>
        <p>전화 031-584-0023~5 | Fax 031-584-0026</p>
        <p>이메일 pwin@naver.com</p>

        <div className=" text-gray-400 text-sm py-8">
          <Link href={"/manager"}>관리자페이지</Link>
          <p>
            © 2025 PYEONGWON INDUSTRY. <br className="block md:hidden" />
            All rights reserved.
          </p>
          <a href="https://mig.kr/">DESIGN & Development BY GLOBAL MIG</a>
        </div>
      </div>
    </div>
  );
}
