"use client";

import { Suspense, useEffect, useState } from "react";
import Image from "next/image";
import EcoDescription from "../components/products/EcoDescription";
import MasonryDescription from "../components/products/MasonryDescription";
import RetainingDescription from "../components/products/RetainingDescription";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

const blockData = [
  { key: 1, title: "보강토 옹벽 블록", img: "/images/products/보강토_옹벽블록_btn.png", alt: "보강토옹벽블록버튼", desc: "하천 저/고수 호안공, 만곡부, 유수지, 도로 법면", type: "retaining" },
  { key: 2, title: "식생축조 블록", img: "/images/products/식생축조블록_btn.png", alt: "식생축조블록버튼", desc: "소하천, 도로, 법면 절/성토부", type: "masonry" },
  { key: 3, title: "환경호안 블록", img: "/images/products/환경호안블록_btn.png", alt: "환경호안블록버튼", desc: "도로 절개지, 산사태 방지 시설, 산업단지, 교량 접근로 사면", type: "eco" },
];

export default function Product() {
  const searchParams = useSearchParams();
  const [selectedBlock, setSelectedBlock] = useState("retaining");

  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      setSelectedBlock(type);
    }
  }, [searchParams]);

  const router = useRouter();

  const handleSelect = (value: string) => {
    setSelectedBlock(value);
    router.push(`/products?type=${value}`);
  };

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
        <div className="w-full max-w-[1440px] mx-auto flex flex-col justify-center items-center gap-5 px-4 ">
          <section className="w-full max-w-[1440px] h-[370px] md:h-[520px] bg-[url('/images/products/bg.png')] bg-cover bg-center text-center pt-10 md:pt-20 rounded-3xl px-4">
            <h1 className="text-title font-semibold">Environment Company for the next Generation</h1>
            <p>보강토 옹벽블록, 축조블록 생산/제조 전문기업</p>

            {/* 블록별 버튼 */}
            <div className="itemList flex w-full gap-4">
              {blockData.map((item) => (
                <li
                  key={item.key}
                  className={`relative group w-1/3 h-20 md:h-40 mt-28 md:mt-48 shadow-lg rounded-xl border-zinc-100 flex flex-col justify-center items-center transform duration-200 ease-in-out hover:brightness-90 cursor-pointer
  ${selectedBlock === item.type ? "bg-[#3A7D44] text-white text-3xl" : "bg-white text-black"}
`}
                  onClick={() => handleSelect(item.type)}
                >
                  <div
                    className={`absolute transform duration-700 ease-in-out
    ${selectedBlock === item.type ? "-top-20 md:-top-32" : "-top-16 md:-top-28"}
  `}
                  >
                    <Image
                      src={item.img}
                      alt={item.alt}
                      width={160}
                      height={160}
                      className={`transform duration-700 ease-in-out
      w-[100px] md:w-[160px]
      ${selectedBlock === item.type ? "w-[140px] md:w-[180px]" : "w-[120px] md:w-[170px]"}
    `}
                    />
                  </div>
                  <p className="text-sm px-2 md:text-2xl font-bold  transform duration-500 ease-in-out">{item.title}</p>
                  <p className="w-full text-sm text-center mt-4  md:block hidden transform duration-500 ease-in-out">{item.desc}</p>
                </li>
              ))}
            </div>
          </section>

          <section className="w-full">
            {selectedBlock === "retaining" && <RetainingDescription />}
            {selectedBlock === "masonry" && <MasonryDescription />}
            {selectedBlock === "eco" && <EcoDescription />}
          </section>
        </div>
      </motion.div>
    </Suspense>
  );
}
