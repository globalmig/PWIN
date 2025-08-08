"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  {
    id: 1,
    title: "카탈로그 다운로드",
    link: "/pwin_catalog_250808.pdf",
    download: "평원산업 카탈로그",
    color: "bg-red-700",
  },
  {
    id: 2,
    title: "E-book 바로가기",
    link: "/ebook",
    color: "bg-orange-500",
  },
];

const CONTACT_INFO = {
  phone: "031-584-0023~5",
  fax: "031-584-0026",
  hours: "평일: 07:00 ~ 17:00",
  hours2: "주말 : 07:00 ~ 15:00",
};

export default function QuickMenu() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  if (pathname.startsWith("/manager")) return null;
  if (pathname.startsWith("/ebook")) return null;

  return (
    <section className="fixed bottom-64 md:bottom-32 right-2 md:right-0 z-20 h-auto md:h-72">
      {/* 토글 버튼 */}
      <button
        onClick={toggleMenu}
        className="absolute right-0 top-1/2 md:top-1/2 transform -translate-y-1/2
                   bg-green-800 hover:bg-green-900 text-white 
                   px-3 py-3 md:px-4 md:py-20  md:h-[350px] rounded-l-lg  
                   transition-colors duration-200 z-20 shadow-lg"
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
      >
        <span className="text-sm md:text-base block transform transition-transform duration-300">{isOpen ? ">" : "<"}</span>
      </button>

      {/* 메뉴 컨텐츠 */}
      <div
        className={`absolute right-10 md:right-10 top-1/2 transform -translate-y-1/2 
                    flex flex-col transition-all duration-500 ease-in-out shadow-xl
                    ${isOpen ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95 pointer-events-none"}`}
      >
        {menuItems.map((item, index) => {
          const isDisabled = pathname === item.link;
          return (
            // from-green-500 to-emerald-500
            <div
              key={item.id}
              className={` ${item.color} hover:bg-gray-700  text-white w-44 md:w-48 py-2 md:py-3 px-3 md:px-4
                rounded-lg cursor-pointer mb-1
                transform transition-all duration-500 ease-in-out
                ${isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
              style={{ transitionDelay: isOpen ? `${200 + index * 100}ms` : "0ms" }}
            >
              {isDisabled ? (
                <div className="block w-full h-full cursor-not-allowed">
                  <p>{item.title}</p>
                </div>
              ) : (
                <a href={item.link} {...(item.download && { download: item.download })} className="block w-full h-full">
                  <p className="hover:text-green-300 transition-colors duration-200">{item.title}</p>
                </a>
              )}
            </div>
          );
        })}
        <div className="bg-zinc-100 shadow-xl border text-lime-950 w-44 md:w-48 py-2 px-3 rounded-t-lg text-sm md:text-base">
          <p className="text-base md:text-xl font-bold">이메일</p>
          <p>pwin@naver.com</p>
        </div>

        {/* 운영 시간 */}
        <div className="bg-zinc-100 shadow-xl border text-lime-950 w-44 md:w-48 py-2 px-3  text-sm md:text-base">
          <p className="text-base md:text-xl font-bold">업무시간</p>
          <p>{CONTACT_INFO.hours}</p>
          <p>{CONTACT_INFO.hours2}</p>
        </div>

        {/* 연락처 */}
        <div
          className={`bg-zinc-100 border text-lime-950 w-44 md:w-48 py-2 px-3 text-sm md:text-base
                      transform transition-all duration-500 ease-in-out
                      ${isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          style={{ transitionDelay: isOpen ? "100ms" : "0ms" }}
        >
          <p>
            <strong>전화</strong> {CONTACT_INFO.phone} <br />
            <strong>팩스</strong> {CONTACT_INFO.fax} <br />
          </p>
        </div>

        {/* 전화 연결 */}
        <a
          href="/call"
          className="bg-yellow-500 hover:bg-gray-700  hover:text-green-400 text-white w-44 md:w-48 py-2 px-3 
                     rounded-b-xl text-sm md:text-base transition-colors duration-200"
        >
          <p>☎ 전화 연결하기</p>
        </a>
      </div>
    </section>
  );
}
