// components/PDFViewer.tsx
"use client";
import React, { useState, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import { BookOpen, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

// PDF.js 워커 설정
pdfjs.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title = "PDF 도서" }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState<number>(1.0);
  const [error, setError] = useState<string | null>(null);
  const flipBookRef = useRef<any>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(err: Error) {
    console.error(err);
    setError("PDF를 불러올 수 없습니다.");
  }

  const zoomIn = () => setScale((s) => Math.min(2, s + 0.2));
  const zoomOut = () => setScale((s) => Math.max(0.5, s - 0.2));
  const prevPage = () => flipBookRef.current.pageFlip().flipPrev();
  const nextPage = () => flipBookRef.current.pageFlip().flipNext();

  return (
    <div className="w-full flex flex-col items-center ">
      {/* 헤더 */}
      <header className="flex items-center space-x-2 p-4">
        <BookOpen className="h-6 w-6 text-blue-600" />
        <h1 className="text-xl font-semibold">{title}</h1>
      </header>

      {/* 에러 메시지 */}
      {error && <div className="p-4 text-red-500">❌ {error}</div>}

      {/* 컨트롤 버튼 */}
      <div className="flex items-center space-x-4 my-2">
        <button onClick={prevPage} className="p-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <ChevronLeft />
        </button>
        <button onClick={zoomOut} className="p-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <ZoomOut />
        </button>
        <span className="text-sm">{Math.round(scale * 100)}%</span>
        <button onClick={zoomIn} className="p-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <ZoomIn />
        </button>
        <button onClick={nextPage} className="p-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <ChevronRight />
        </button>
      </div>

      {/* FlipBook */}
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError}>
        {numPages > 0 && (
          <HTMLFlipBook
            ref={flipBookRef}
            width={600}
            height={800}
            drawShadow
            showCover={true}
            size="stretch"
            minWidth={600}
            maxWidth={600}
            minHeight={800}
            maxHeight={800}
            flippingTime={600}
            mobileScrollSupport={false}
            clickEventForward={false}
            useMouseEvents={true}
            swipeDistance={30}
            startPage={0}
            startZIndex={0}
            autoSize={true}
            maxShadowOpacity={1}
            usePortrait={false}
            showPageCorners={true}
            disableFlipByClick={false}
            className="w-full "
            style={{}}
          >
            {Array.from({ length: numPages }).map((_, i) => (
              <div key={i} className="flex justify-center items-center bg-white dark:bg-gray-800">
                <Page pageNumber={i + 1} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} />
              </div>
            ))}
          </HTMLFlipBook>
        )}
      </Document>
    </div>
  );
};

export default PDFViewer;
