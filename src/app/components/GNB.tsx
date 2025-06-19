"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

// TODO:GNB 선택값 오류 수정
// TODO: 경로 수정해야함
// 상위 카테고리
const desktopMenuItems = [
  { key: 1, name: "회사소개", href: "/company" },
  { key: 2, name: "제품소개", href: "/products" },
  { key: 3, name: "공법소개", href: "/construction" },
  { key: 4, name: "시공갤러리", href: "/gallery" },
];

// 하위 카테고리
const CompanySubMenuItems = [
  { key: 5, name: "경영이념", href: "/company" },
  { key: 6, name: "회사연혁", href: "/company#history" },
  { key: 7, name: "인증현황", href: "/company#certificate" },
  { key: 8, name: "오시는길", href: "/company#location" },
];

const ProductsSubMenuItems = [
  { key: 9, name: "보강토 옹벽", href: "/products", type: "retaining" },
  { key: 10, name: "식생축조블록", href: "/products", type: "masonry" },
  { key: 11, name: "환경호안블록", href: "/products", type: "eco" },
];

const ConstructionSubMenuItems = [
  { key: 12, name: "시공단면", href: "/construction" },
  { key: 13, name: "시공예시", href: "/construction#title02" },
];

const GallerySubMenuItems = [{ key: 14, name: "실제 사례", href: "/gallery" }];

// 모바일 메뉴
const mobileMenuItems = [
  { key: 15, name: "회사소개", href: "/company" },
  { key: 16, name: "제품소개", href: "/products" },
  { key: 17, name: "공법소개", href: "/construction" },
  { key: 18, name: "시공갤러리", href: "/gallery" },
];

export default function GNB() {
  // 모바일 메뉴 상태 관리
  const [isOpen, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const router = useRouter();
  const handleClick = (type: string) => {
    router.push(`/products?type=${type}`);
  };

  return (
    <div className="">
      <div className="flex mx-auto mt-10 justify-between items-center w-full z-[100] relative">
        {/* 데스크톱 메뉴 */}
        <div className="hidden md:flex w-full justify-center ">
          <header className="opacity-90 w-full  mx-auto relative z-[101]">
            <div className="relative group">
              {/* 상위 메뉴 */}
              <ul className="flex justify-center items-center mx-auto text-xl font-medium pb-4 pr-16 gap-20">
                <li>
                  <Link href={"/"} onClick={() => setActiveMenu(activeMenu === "home" ? "" : "home")} prefetch={true}>
                    <Image
                      src={"/images/pwinLogo7.svg"}
                      alt="Logo"
                      width={200}
                      height={400}
                      className="mr-10
                     py-4 max-h-[74px] "
                      priority
                    />

                    {/* TODO: 로고 바뀌면 해당 사이즈대로 최대 높이 재설정 */}
                  </Link>
                </li>
                <ul className="flex w-full justify-between max-w-[960px] ">
                  {desktopMenuItems.map((item) => (
                    <li
                      key={item.key}
                      onClick={() => setActiveMenu(item.name)}
                      className={`cursor-pointer hover:font-bold transition-colors duration-200 pb-1 ${activeMenu === item.name ? "text-lime-700 font-bold border-b-2 border-lime-600" : "text-black"}`}
                    >
                      <Link href={item.href} prefetch={true}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </ul>

              {/* 하위 메뉴 - 호버 시만 표시 */}
              <div className="absolute hidden w-full mx-auto bg-white placeholder-opacity-95 text-xl text-black pt-12 pb-16 px-16 shadow-xl border-t-2 group-hover:flex justify-center z-[9999]">
                <ul className="w-full flex justify-center gap-10">
                  {/* 빈공간 채우기용 DON'T REMOVE THIS CODE. */}
                  <li className="w-[140px] md:w-[160px] mr-12 py-4"></li>
                  <ul className="flex w-full justify-between max-w-[960px]">
                    {/* 회사 소개 하위 카테고리 */}
                    <ul className="flex flex-col gap-9 items-center ">
                      {CompanySubMenuItems.map((item) => (
                        <li className="hover:scale-150 hover:font-semibold transition-transform duration-200 cursor-pointer" key={item.key}>
                          <Link href={item.href} prefetch={true}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* 제품 하위 카테고리 */}
                    <ul className="flex flex-col gap-9 items-center">
                      {ProductsSubMenuItems.map((item) => (
                        <li className="hover:scale-150 hover:font-semibold transition-transform duration-200 cursor-pointer" onClick={() => handleClick(item.type as string)} key={item.key}>
                          {item.name}
                        </li>
                      ))}
                    </ul>

                    {/* 공법소개 하위 카테고리 */}
                    <ul className="flex flex-col gap-9 items-center">
                      {ConstructionSubMenuItems.map((item) => (
                        <li className="hover:scale-150 hover:font-semibold transition-transform duration-200 cursor-pointer" key={item.key}>
                          <Link href={item.href} prefetch={true}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* 갤러리 하위 카테고리 */}
                    <ul className="flex flex-col gap-9 items-center">
                      {GallerySubMenuItems.map((item) => (
                        <li className="hover:scale-150 hover:font-semibold transition-transform duration-200 cursor-pointer" key={item.key}>
                          <Link href={item.href} prefetch={true}>
                            {item.name}{" "}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </ul>
                </ul>
              </div>
            </div>
          </header>
        </div>

        {/* 모바일 햄버거 메뉴 버튼 - md 사이즈 이하에서만 표시 */}
        <div className="md:hidden relative z-[102] flex w-full justify-between">
          <div className="w-[10%]" />
          <Link href={"/"} prefetch={true}>
            <Image src="/images/pwinLogo6.svg" alt="Logo" width={120} height={120} className="mr-10 py-6 ml-4" priority />
          </Link>
          <button onClick={toggleMenu} className="px-4">
            <Image src={"/images/menu_m.png"} alt="Menu" width={32} height={30} />
          </button>

          {/* 모바일 메뉴 */}
          <nav className={`${isOpen ? "block" : "hidden"} absolute top-full right-0 w-screen bg-white shadow-lg border-t z-[9999]`}>
            <ul className="flex flex-col text-center text-xl font-medium p-8 gap-8">
              {mobileMenuItems.map((item) => (
                <li className="border-b pb-4" key={item.key}>
                  <Link href={item.href} onClick={toggleMenu} prefetch={true}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* TODO: 모바일 하위 카테고리 제작 */}
        </div>
      </div>
    </div>
  );
}
