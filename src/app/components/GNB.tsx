"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// 상위 카테고리
const desktopMenuItems = [
  { name: "회사소개", href: "/company" },
  { name: "제품소개", href: "/product" },
  { name: "공법소개", href: "/construction" },
  { name: "시공갤러리", href: "/gallery" },
];

// 하위 카테고리
const CompanySubMenuItems = [
  { name: "경영이념", href: "/company/philosophy" },
  { name: "회사연혁", href: "/company/philosophy" },
  { name: "인증현황", href: "/company/philosophy" },
  { name: "오시는길", href: "/company/philosophy" },
];

const ProductsSubMenuItems = [
  { name: "보강토 옹벽", href: "/company/philosophy" },
  { name: "회사연혁", href: "/company/philosophy" },
  { name: "인증현황", href: "/company/philosophy" },
];

const ConstructionSubMenuItems = [
  { name: "시공단면", href: "/construction" },
  { name: "시공예시", href: "/construction" },
];

const GallerySubMenuItems = [{ name: "실제 사례", href: "/construction" }];

// 모바일 메뉴
const mobileMenuItems = [
  { name: "회사소개", href: "/company" },
  { name: "제품소개", href: "/product" },
  { name: "공법소개", href: "/construction" },
  { name: "시공갤러리", href: "/gallery" },
];

export default function GNB() {
  // 모바일 메뉴 상태 관리
  const [isOpen, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="flex mx-auto mt-10 justify-between items-center w-full z-[100] relative">
      {/* 데스크톱 메뉴 */}
      <div className="hidden md:flex w-full justify-center ">
        <header className="opacity-90 w-full  mx-auto relative z-[101]">
          <div className="relative group">
            {/* 상위 메뉴 */}
            <ul className="flex justify-center items-center mx-auto text-xl font-medium pb-4 px-16 gap-20">
              <li>
                <Link href={"/"} onClick={() => setActiveMenu(activeMenu === "home" ? "" : "home")}>
                  <Image src={"/images/logo.png"} alt="Logo" width={100} height={100} className="mr-10 py-6 max-h-[74px]" />
                  {/* TODO: 로고 바뀌면 해당 사이즈대로 최대 높이 재설정 */}
                </Link>
              </li>
              <ul className="flex w-full justify-between max-w-[960px] ">
                {desktopMenuItems.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => setActiveMenu(item.name)}
                    className={`cursor-pointer hover:font-bold transition-colors duration-200 pb-1 ${activeMenu === item.name ? "text-lime-700 font-bold border-b-2 border-lime-600" : "text-black"}`}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </ul>

            {/* 하위 메뉴 - 호버 시만 표시 */}
            <div className="absolute hidden w-full mx-auto bg-white placeholder-opacity-95 text-xl text-black pt-12 pb-16 px-16 shadow-xl border-t-2 group-hover:flex justify-center z-[9999]">
              <ul className="w-full flex justify-center gap-12">
                {/* 빈공간 채우기용 DON'T REMOVE THIS CODE. */}
                <li className="w-[140px] md:w-[120px] mr-12 py-4"></li>
                <ul className="flex w-full justify-between max-w-[960px]">
                  {/* 회사 소개 하위 카테고리 */}
                  <ul className="flex flex-col gap-9 items-center ">
                    {CompanySubMenuItems.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <li className="hover:scale-150 hover:font-semibold transition-transform duration-200 cursor-pointer">{item.name}</li>
                      </Link>
                    ))}
                  </ul>

                  {/* 제품 하위 카테고리 */}
                  <ul className="flex flex-col gap-9 items-center">
                    {ProductsSubMenuItems.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <li className="hover:scale-150 hover:font-semibold transition-transform duration-200 cursor-pointer">{item.name}</li>
                      </Link>
                    ))}
                  </ul>

                  {/* 공법소개 하위 카테고리 */}
                  <ul className="flex flex-col gap-9 items-center">
                    {ConstructionSubMenuItems.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <li className="hover:scale-150 hover:font-semibold transition-transform duration-200 cursor-pointer">{item.name}</li>
                      </Link>
                    ))}
                  </ul>

                  {/* 갤러리 하위 카테고리 */}
                  <ul className="flex flex-col gap-9 items-center">
                    {GallerySubMenuItems.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <li className="hover:scale-150 hover:font-semibold transition-transform duration-200 cursor-pointer">{item.name}</li>
                      </Link>
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
        <Link href={"/"}>
          <Image src={"/images/logo.png"} alt="Logo" width={100} height={100} className="mr-10 py-6 ml-4" />
        </Link>
        <button onClick={toggleMenu} className="px-4">
          <Image src={"/images/menu_m.png"} alt="Menu" width={32} height={30} />
        </button>

        {/* 모바일 메뉴 */}
        <nav className={`${isOpen ? "block" : "hidden"} absolute top-full right-0 w-screen bg-white shadow-lg border-t z-[9999]`}>
          <ul className="flex flex-col text-center text-xl font-medium p-8 gap-8">
            {mobileMenuItems.map((item) => (
              <Link href={item.href} onClick={toggleMenu} key={item.name}>
                <li className="border-b pb-4">{item.name}</li>
              </Link>
            ))}
          </ul>
        </nav>

        {/* TODO: 모바일 하위 카테고리 제작 */}
      </div>
    </div>
  );
}
