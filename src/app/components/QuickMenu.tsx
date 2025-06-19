"use client";
import { useState } from "react";

const menuItems = [
  {
    id: 1,
    title: "카타로그 다운로드",
    link: "/pwin_catalog.pdf",
    download: "평원산업 카타로그",
  },
  {
    id: 2,
    title: "E-book 바로가기",
    link: "/ebook",
  },
];

const CONTACT_INFO = {
  phone: "031-584-0023~5",
  fax: "031-584-0023",
  hours: "평일: 07:00 ~ 18:00",
};

export default function QuickMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className="fixed bottom-32 right-0 z-20 h-72 shadow-lg ">
      {/* 메뉴 토글 버튼 */}
      <button
        onClick={toggleMenu}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 
                   bg-green-700 hover:bg-green-800 text-white 
                   px-4 py-20 h-80 rounded-l-lg 
                   transition-colors duration-200 z-20 shadow-lg "
        aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
      >
        <span className="inline-block transform transition-transform duration-300">{isOpen ? "평원 산업 >" : "평원 산업<"}</span>
      </button>

      {/* 메뉴 컨텐츠 */}
      <div
        className={`absolute right-10 top-1/2 transform -translate-y-1/2 
                    flex flex-col transition-all duration-500 ease-in-out shadow-xl
                    ${isOpen ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95 pointer-events-none"}`}
      >
        {/* 메뉴 링크들 */}
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className={`bg-green-600 hover:bg-gray-800 text-white w-48 py-3 px-4 
                        rounded-lg cursor-pointer mb-1
                        transform transition-all duration-500 ease-in-out
                        ${isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
            style={{
              transitionDelay: isOpen ? `${200 + index * 100}ms` : "0ms",
            }}
          >
            <a href={item.link} {...(item.download && { download: item.download })} className="block w-full h-full">
              <p className="hover:text-green-300 transition-colors duration-200">{item.title}</p>
            </a>
          </div>
        ))}

        {/* 운영시간 및 전화연결 */}
        <div className="bg-zinc-100 text-lime-950 w-48 py-3 px-4 rounded-t-lg">
          <p>운영시간</p>
          <p>{CONTACT_INFO.hours}</p>
        </div>

        {/* 연락처 정보 */}
        <div
          className={`bg-green-100 text-lime-950 w-48 py-3 px-4  mb-1
                      transform transition-all duration-500 ease-in-out
                      ${isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
          style={{ transitionDelay: isOpen ? "100ms" : "0ms" }}
        >
          <p>
            ☎ {CONTACT_INFO.phone} <br />
            Fax {CONTACT_INFO.fax}
          </p>
        </div>
        <a
          href={`tel:${CONTACT_INFO.phone.replace(/[~-]/g, "")}`}
          className="bg-green-900 hover:bg-green-800 text-white w-48 py-3 px-4 
                     rounded-b-xl transition-colors duration-200"
        >
          <p>☎ 전화 연결하기</p>
        </a>
      </div>
    </section>
  );
}
