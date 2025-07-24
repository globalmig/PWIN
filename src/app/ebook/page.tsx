// src/app/ebook/page.tsx
"use client"; // App Router를 사용하는 경우

import dynamic from "next/dynamic";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// 동적 import로 SSR 이슈 방지 (올바른 경로 사용)
const PDFViewer = dynamic(() => import("../components/PDFViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-screen w-12 border-b-2 border-blue-600 mb-4"></div>
        {/* <p className="text-gray-600">PDF 뷰어를 불러오는 중...</p> */}
      </div>
    </div>
  ),
});

export default function Ebook() {
  return (
    <div className="w-full">
      <PDFViewer
        title="평원산업 카타로그"
        images={[
          "/images/book/blank.png",
          "/images/book/cover.png",
          "/images/book/page1.png",
          "/images/book/page2.png",
          "/images/book/page3.png",
          "/images/book/page4.png",
          "/images/book/page5.png",
          "/images/book/page6.png",
          "/images/book/page7.png",
          "/images/book/page8.png",
          "/images/book/page9.png",
          "/images/book/page10.png",
          "/images/book/page11.png",
          "/images/book/page12.png",
          "/images/book/page13.png",
          "/images/book/page14.png",
          "/images/book/page15.png",
          "/images/book/page16.png",
          "/images/book/page17.png",
          "/images/book/blank.png",
        ]}
      />
    </div>
  );
}
