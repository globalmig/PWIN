// src/app/ebook/page.tsx
"use client"; // App Router를 사용하는 경우

import dynamic from "next/dynamic";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// 동적 import로 SSR 이슈 방지 (올바른 경로 사용)
const PDFViewer = dynamic(() => import("../components/PDFViewer"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600">PDF 뷰어를 불러오는 중...</p>
      </div>
    </div>
  ),
});

export default function Ebook() {
  return (
    <div className="w-full h-screen">
      {/* 
      <PDFViewer pdfUrl={"/pwin_catalog.pdf"} title="평원산업 카타로그" /> */}
      <PDFViewer pdfUrl={"/flipbook_sample.pdf"} title="평원산업 카타로그" />
    </div>
  );
}
