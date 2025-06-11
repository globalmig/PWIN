"use client";
import { useState } from "react";

const lightLink = [
  { key: 1, title: "카타로그 다운로드", link: "/pwin_catalog.pdf", dw: "평원산업 카타로그" },
  { key: 2, title: "E-book 바로가기", link: "/ebook" },
  { key: 3, title: "전화 연결하기", link: "tel:0315840023" },
];

export default function QuickMenu() {
  const [isOpen, setOpen] = useState(true);

  const openMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <section>
        <div className="fixed bottom-32 right-0 z-10 h-72">
          {/* 메뉴 버튼 */}
          <button
            onClick={openMenu}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-700 hover:bg-green-800 text-white px-2 py-10 rounded-l-lg transition-colors duration-200 z-20"
          >
            <span className={`inline-block transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>{isOpen ? "<" : "<"}</span>
          </button>

          {/* 활성화 했을때 menu */}
          <div
            className={`
            absolute right-10 top-1/2 transform -translate-y-1/2
            flex flex-col gap-1 
            transition-all duration-500 ease-in-out
            ${isOpen ? "translate-x-0 opacity-100 scale-100" : "translate-x-full opacity-0 scale-95 pointer-events-none"}
          `}
          >
            {/* 연락처 정보 */}
            <div
              className={`
              bg-black text-white w-48 py-3 px-4 rounded-lg
              transform transition-all duration-500 ease-in-out
              ${isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}
            `}
              style={{ transitionDelay: isOpen ? "100ms" : "0ms" }}
            >
              <p>
                ☎ 031-584-0023~5 <br />
                Fax 031-584-0023
              </p>
            </div>

            {/* 메뉴 링크들 */}
            {lightLink.map((item, index) => (
              <div
                className={`
                  bg-black hover:bg-gray-800 text-white w-48 py-3 px-4 rounded-lg
                  transform transition-all duration-500 ease-in-out cursor-pointer
                  ${isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}
                `}
                style={{
                  transitionDelay: isOpen ? `${200 + index * 100}ms` : "0ms",
                }}
                key={item.key}
              >
                <a href={item.link} {...(item.dw ? { download: item.dw } : {})}>
                  <p className="hover:text-green-300 transition-colors duration-200">{item.title}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
