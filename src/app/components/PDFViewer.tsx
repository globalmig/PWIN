"use client";
import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

interface PDFViewerProps {
  pdfUrl: string;
  title?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title = "PDF 도서" }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [scale] = useState<number>(1.0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [renderedPageCount, setRenderedPageCount] = useState<number>(0);
  const flipBookRef = useRef<any>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(err: Error) {
    console.error("❌ PDF 로딩 실패:", err);
    setError("PDF를 불러올 수 없습니다.");
    setLoading(false);
  }

  const handlePageRenderSuccess = () => {
    setRenderedPageCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (renderedPageCount === numPages && numPages > 0) {
      setLoading(false);
    }

    const timeout = setTimeout(() => {
      if (renderedPageCount === 0 && numPages > 0) {
        // console.warn("🧊 PDF 렌더링 콜백이 안 왔지만 강제로 loading 해제");
        setLoading(false);
      }
    }, 1000); // 1초 후에도 렌더링 콜백 없으면 강제로 해제

    return () => clearTimeout(timeout);
  }, [renderedPageCount, numPages]);

  const prevPage = () => {
    flipBookRef.current?.pageFlip?.()?.flipPrev?.();
  };

  const nextPage = () => {
    flipBookRef.current?.pageFlip?.()?.flipNext?.();
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* 헤더 */}
      <header className="flex items-center space-x-2 px-4 ">
        <BookOpen className="h-6 w-6 text-blue-600" />
        <h1 className="text-xl font-semibold">{title}</h1>
      </header>

      {/* 에러 메시지 */}
      {error && <div className="p-4 text-red-500">❌ {error}</div>}

      {/* 로딩 표시 */}
      {loading && (
        <div className="flex flex-col items-center justify-center my-60">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4" />
          <p className="text-gray-600">
            PDF를 렌더링 중입니다...
            {numPages > 0 && <span className="ml-2 text-sm text-blue-600 font-semibold">{Math.min(100, Math.round((renderedPageCount / numPages) * 100))}%</span>}
          </p>
        </div>
      )}

      {/* 컨트롤 버튼 */}
      {!loading && numPages > 0 && (
        <div className="flex items-center space-x-4 my-2">
          <button onClick={prevPage} className="p-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <ChevronLeft />
          </button>
          <button onClick={nextPage} className="p-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700">
            <ChevronRight />
          </button>
        </div>
      )}

      {/* PDF 문서 로딩 */}
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess} onLoadError={onDocumentLoadError}>
        <HTMLFlipBook
          ref={flipBookRef}
          width={600}
          height={800}
          style={{
            backgroundColor: "white",
            opacity: loading ? 0 : 1,
            transition: "opacity 0.5s ease",
            pointerEvents: loading ? "none" : "auto",
          }}
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
          className="w-full"
        >
          {Array.from({ length: numPages }).map((_, i) => (
            <div key={i} className="flex justify-center items-center bg-white dark:bg-gray-800">
              <Page pageNumber={i + 1} scale={scale} renderTextLayer={false} renderAnnotationLayer={false} onRenderSuccess={handlePageRenderSuccess} />
            </div>
          ))}
        </HTMLFlipBook>
      </Document>
    </div>
  );
};

export default PDFViewer;
