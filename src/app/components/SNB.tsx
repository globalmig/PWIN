"use client";
import React, { useState } from "react";
import Image from "next/image";

// 타입 정의
interface SubMenuItem {
  id: string;
  text: string;
  chars: string[];
}

interface MenuItemProps {
  href: string;
  chars: string[];
  className?: string;
}

interface SubMenuItemProps {
  item: SubMenuItem;
}

// 메뉴 데이터를 상수로 분리
const SUB_MENU_ITEMS: SubMenuItem[] = [
  { id: "01일반", text: "일반", chars: ["일", "반"] },
  { id: "02주거", text: "주거", chars: ["주", "거"] },
  { id: "03하천", text: "하천", chars: ["하", "천"] },
  { id: "04추가시공", text: "추가시공", chars: ["추", "가", "시", "공"] },
  { id: "05구조물", text: "구조물", chars: ["구", "조", "물"] },
  { id: "06콘크리트", text: "콘크리트", chars: ["콘", "크", "리", "트"] },
  { id: "07연약지반", text: "연약지반", chars: ["연", "약", "지", "반"] },
  { id: "08자연조화", text: "자연조화", chars: ["자", "연", "조", "화"] },
];

// 공통 스타일 상수
const COMMON_STYLES = {
  menuItem: "w-full flex justify-between px-5 py-2 hover:bg-slate-200 hover:font-bold cursor-pointer transition-colors",
  container: "w-full",
} as const;

// 부드러운 스크롤 함수 - 화면 중앙 정렬
const smoothScrollToCenter = (targetId: string): void => {
  const element = document.getElementById(targetId);
  if (element) {
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.pageYOffset;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;

    // 요소가 화면 정가운데 오도록 계산
    const offsetPosition = elementTop - windowHeight / 2 + elementHeight / 2;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: "smooth",
    });
  }
};

// 재사용 가능한 메뉴 아이템 컴포넌트
const MenuItem: React.FC<MenuItemProps> = ({ href, chars, className = "" }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    smoothScrollToCenter(href);
  };

  return (
    <div
      className={`${COMMON_STYLES.menuItem} ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          smoothScrollToCenter(href);
        }
      }}
    >
      {chars.map((char: string, index: number) => (
        <span key={index}>{char}</span>
      ))}
    </div>
  );
};

// 서브메뉴 아이템 컴포넌트
const SubMenuItemComponent: React.FC<SubMenuItemProps> = ({ item }) => (
  <li className={COMMON_STYLES.container}>
    <MenuItem href={item.id} chars={item.chars} />
  </li>
);

const SNB: React.FC = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState<boolean>(true);

  const toggleSubMenu = (): void => {
    setSubMenuOpen((prev: boolean) => !prev);
  };

  return (
    <nav
      className="fixed w-full max-w-28 left-10 z-10 border rounded-lg border-zinc-300 bg-white opacity-95 shadow-xl py-6 hidden lg:block"
      style={{
        top: "max(120px, 50vh - 250px)",
        transform: "translateY(0)",
        maxHeight: "calc(100vh - 140px)",
      }}
      role="navigation"
      aria-label="사이드 네비게이션"
    >
      <ul className="text-lg flex flex-col justify-between items-center">
        {/* 메인 메뉴 - 시공단면 */}
        <li className={COMMON_STYLES.container}>
          <MenuItem href="title01" chars={["시", "공", "단", "면"]} className="text-center" />
        </li>

        {/* 서브메뉴 - 시공예 */}
        <li className={`mt-2 ${COMMON_STYLES.container}`}>
          <button
            className="flex px-5 cursor-pointer w-full items-center justify-between hover:bg-slate-200 hover:font-bold py-2 rounded transition-colors duration-200"
            onClick={toggleSubMenu}
            aria-expanded={isSubMenuOpen}
            aria-controls="submenu"
          >
            <span>시공예</span>
            <Image src="/icon/arrow-down-01.svg" alt="" width={20} height={20} className={`transition-transform duration-300 ease-in-out ${isSubMenuOpen ? "rotate-180" : ""}`} />
          </button>

          {/* 서브메뉴 리스트 - 부드러운 애니메이션 */}
          <div className={` transition-all duration-300 ease-in-out ${isSubMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
            <ul id="submenu" className="flex flex-col justify-between items-center w-full mt-2 gap-2" role="menu">
              {SUB_MENU_ITEMS.map((item: SubMenuItem) => (
                <SubMenuItemComponent key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SNB;
