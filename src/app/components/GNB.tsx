"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const desktopMenuItems = [
  { key: 1, name: "회사소개", href: "/company" },
  { key: 2, name: "제품소개", href: "/products" },
  { key: 3, name: "공법소개", href: "/construction" },
  { key: 4, name: "시공사례", href: "/gallery" },
];

const CompanySubMenuItems = [
  { key: 5, name: "경영이념", href: "/company" },
  { key: 6, name: "회사연혁", href: "/company#history" },
  { key: 7, name: "인증현황", href: "/company#certificate" },
  { key: 8, name: "오시는길", href: "/company#location" },
];

const ProductsSubMenuItems = [
  { key: 9, name: "보강토블록", href: "/products", type: "retaining" },
  { key: 10, name: "캡블록", href: "/products", type: "cap" },
  { key: 11, name: "축조블록", href: "/products", type: "masonry" },
  { key: 12, name: "호안블록", href: "/products", type: "eco" },
];

const ConstructionSubMenuItems = [
  { key: 13, name: "시공단면", href: "/construction" },
  { key: 14, name: "시공예시", href: "/construction#title02" },
];

const GallerySubMenuItems = [{ key: 15, name: "실제사례", href: "/gallery" }];

const mobileMenuItems = [
  { key: 16, name: "회사소개", href: "/company" },
  { key: 17, name: "제품소개", href: "/products" },
  { key: 18, name: "공법소개", href: "/construction" },
  { key: 19, name: "시공사례", href: "/gallery" },
];

export default function GNB() {
  const [isOpen, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");
  const [openSubMenu, setOpenSubMenu] = useState("");
  const router = useRouter();
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleClick = (type: string) => {
    setActiveMenu("제품소개");
    setOpen(false);
    router.push(`/products?type=${type}`);
  };

  return (
    <div>
      <div className="flex mx-auto mt-10 justify-between items-center w-full z-[100] relative ">
        <div className="hidden md:flex w-full justify-center">
          <header className="opacity-90 w-full mx-auto relative z-[101]">
            <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
              <ul className="flex justify-center items-center mx-auto text-xl font-medium pb-4 pr-16 gap-20">
                <li>
                  <Link
                    href="/"
                    onClick={() => {
                      setActiveMenu("");
                      setOpen(false);
                      setOpenSubMenu("");
                    }}
                  >
                    <Image src="/images/logo4.svg" alt="Logo" width={250} height={400} className="mr-10 py-4 max-h-[74px] px-4" priority />
                  </Link>
                </li>
                <ul className="flex w-full justify-between max-w-[960px]">
                  {desktopMenuItems.map((item) => (
                    <li
                      key={item.key}
                      onClick={() => setActiveMenu(item.name)}
                      className={`cursor-pointer hover:font-bold transition-colors duration-200 pb-1 ${activeMenu === item.name ? "text-lime-700 font-bold border-b-2 border-lime-600" : "text-black"}`}
                    >
                      <Link href={item.href} onClick={() => setOpen(false)}>
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </ul>

              <div
                className={`absolute w-full mx-auto bg-white text-xl text-black pt-12 pb-16 px-16 shadow-xl border-t-2 z-[9999] transition-all duration-200 ${
                  isOpen ? "flex" : "hidden"
                } justify-center`}
              >
                <ul className="w-full flex justify-center gap-10">
                  <li className="w-[140px] md:w-[160px] mr-12 py-4"></li>
                  <ul className="flex w-full justify-between max-w-[960px]">
                    <ul className="flex flex-col gap-9 items-center">
                      {CompanySubMenuItems.map((item) => (
                        <li key={item.key}>
                          <Link
                            href={item.href}
                            onClick={() => {
                              setActiveMenu("회사소개");
                              setOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className="flex flex-col gap-9 items-center">
                      {ProductsSubMenuItems.map((item) => (
                        <li key={item.key}>
                          <button onClick={() => handleClick(item.type as string)} className="hover:font-semibold">
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <ul className="flex flex-col gap-9 items-center">
                      {ConstructionSubMenuItems.map((item) => (
                        <li key={item.key}>
                          <Link
                            href={item.href}
                            onClick={() => {
                              setActiveMenu("공법소개");
                              setOpen(false);
                            }}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <ul className="flex flex-col gap-9 items-center">
                      {GallerySubMenuItems.map((item) => (
                        <li key={item.key}>
                          <Link
                            href={item.href}
                            onClick={() => {
                              setActiveMenu("시공사례");
                              setOpen(false);
                            }}
                          >
                            {item.name}
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

        <div className="md:hidden relative z-[102] flex w-full justify-between">
          <div className="w-[10%]" />
          <Link
            href="/"
            onClick={() => {
              setActiveMenu("");
              setOpen(false);
              setOpenSubMenu("");
            }}
          >
            <Image src="/images/logo4.svg" alt="Logo" width={160} height={120} className="mr-10 pb-6 ml-4" priority />
          </Link>
          <button onClick={toggleMenu} className="px-4 pb-6">
            <Image src="/images/menu_m.png" alt="Menu" width={32} height={30} />
          </button>

          <nav className={`${isOpen ? "block" : "hidden"} absolute top-full right-0 w-screen bg-white shadow-lg border-t z-[9999]`}>
            <ul className="flex flex-col text-left text-xl font-medium p-8 gap-10">
              <li>
                <Link href="/gallery" onClick={() => setOpenSubMenu(openSubMenu === "회사소개" ? "" : "회사소개")} className="w-full text-center">
                  <p className="w-full text-center">회사소개</p>
                </Link>
                {openSubMenu === "회사소개" && (
                  <ul className="text-base text-gray-600 mt-2">
                    {CompanySubMenuItems.map((item) => (
                      <li key={item.key} className="py-4 text-center">
                        <Link
                          href={item.href}
                          onClick={() => {
                            setOpen(false);
                            setOpenSubMenu("");
                            setActiveMenu("회사소개");
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => setOpenSubMenu(openSubMenu === "제품소개" ? "" : "제품소개")} className="w-full text-center">
                  제품소개
                </button>
                {openSubMenu === "제품소개" && (
                  <ul className="text-base text-gray-600 mt-2">
                    {ProductsSubMenuItems.map((item) => (
                      <li key={item.key} className="py-4 text-center">
                        <button
                          onClick={() => {
                            handleClick(item.type as string);
                            setOpenSubMenu("");
                          }}
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => setOpenSubMenu(openSubMenu === "공법소개" ? "" : "공법소개")} className="w-full text-center">
                  공법소개
                </button>
                {openSubMenu === "공법소개" && (
                  <ul className="text-base text-gray-600 mt-2">
                    {ConstructionSubMenuItems.map((item) => (
                      <li key={item.key} className="py-4 text-center">
                        <Link
                          href={item.href}
                          onClick={() => {
                            setOpen(false);
                            setOpenSubMenu("");
                            setActiveMenu("공법소개");
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <button onClick={() => setOpenSubMenu(openSubMenu === "시공사례" ? "" : "시공사례")} className="w-full  text-center">
                  시공사례
                </button>
                {openSubMenu === "시공사례" && (
                  <ul className="text-base text-gray-600 mt-2">
                    {GallerySubMenuItems.map((item) => (
                      <li key={item.key} className=" text-center my-4">
                        <Link
                          href={item.href}
                          onClick={() => {
                            setOpen(false);
                            setOpenSubMenu("");
                            setActiveMenu("시공사례");
                          }}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
