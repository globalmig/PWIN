"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GNB() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="flex mx-auto bg-white opacity-90 mt-10 justify-between items-center w-full max-w-[1440px]">
      <Link href={"/"}>
        <Image src={"/images/logo.png"} alt="Logo" width={100} height={100} className="mr-10 py-6" />
      </Link>

      {/* 데스크톱 메뉴 */}
      <div className="hidden md:flex w-full justify-center">
        <header className="bg-white opacity-90 w-full max-w-[1000px] mx-auto">
          <div className="relative group">
            {/* 상위 메뉴 */}
            <ul className="flex justify-between text-xl font-medium py-6 px-16">
              <li>
                <Link href="/company">회사소개</Link>
              </li>
              <li>
                <Link href="/product">제품소개</Link>
              </li>
              <li>
                <Link href="/construction">공법소개</Link>
              </li>
              <li>
                <Link href="/gallery">시공갤러리</Link>
              </li>
            </ul>

            {/* 하위 메뉴 - 호버 시만 표시 */}
            <div className="absolute left-0 w-full bg-white placeholder-opacity-95 text-base text-black py-8 px-16 shadow-xl border-t-2 rounded-b-2xl hidden group-hover:flex justify-between z-10">
              <ul className="flex flex-col gap-4 items-center">
                <li>
                  <Link href="/company/philosophy">경영이념</Link>
                </li>
                <li>
                  <Link href="/company/history">회사연혁</Link>
                </li>
                <li>
                  <Link href="/company/cert">인증현황</Link>
                </li>
                <li>
                  <Link href="/company/location">오시는 길</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-4 items-center">
                <li>
                  <Link href="/product/1">보강토</Link>
                </li>
                <li>
                  <Link href="/product/2">식생축조블록</Link>
                </li>
                <li>
                  <Link href="/product/3">환경호안블록</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-4 items-center">
                <li>
                  <Link href="/construction/1">시공단면</Link>
                </li>
                <li>
                  <Link href="/construction/2">시공예</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-4 items-center">
                <li>
                  <Link href="/gallery/1">보강토 옹벽 블록</Link>
                </li>
                <li>
                  <Link href="/gallery/2">식생축조블록</Link>
                </li>
                <li>
                  <Link href="/gallery/3">환경호안블록</Link>
                </li>
                <li>
                  <Link href="/gallery/4">기타</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>

      {/* 모바일 햄버거 메뉴 버튼 - md 사이즈 이하에서만 표시 */}
      <div className="md:hidden relative">
        <button onClick={toggleMenu} className="p-2">
          <Image src={"/images/menu_m.png"} alt="Menu" width={30} height={30} />
        </button>

        {/* 모바일 메뉴 */}
        <nav className={`${isOpen ? "block" : "hidden"} absolute top-full right-0 w-screen bg-white shadow-lg border-t z-20`}>
          <ul className="flex flex-col text-center text-xl font-medium p-4 gap-4">
            <li className="border-b pb-2">
              <Link href="/company" onClick={toggleMenu}>
                회사소개
              </Link>
            </li>
            <li className="border-b pb-2">
              <Link href="/product" onClick={toggleMenu}>
                제품소개
              </Link>
            </li>
            <li className="border-b pb-2">
              <Link href="/construction" onClick={toggleMenu}>
                공법소개
              </Link>
            </li>
            <li>
              <Link href="/gallery" onClick={toggleMenu}>
                시공갤러리
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
