import React, { useRef, useEffect, useState } from "react";
import HTMLFlipBookOriginal from "react-pageflip";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

// ✅ 타입 확장
type CustomFlipBookProps = React.ComponentProps<typeof HTMLFlipBookOriginal> & {
  startPage?: number;
  startZIndex?: number;
};

const HTMLFlipBook = React.forwardRef<any, CustomFlipBookProps>((props, ref) => <HTMLFlipBookOriginal ref={ref} {...props} />);
HTMLFlipBook.displayName = "HTMLFlipBook";

// ✅ 모바일 판단 훅
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);
  return isMobile;
}

// ✅ props
interface PDFViewerProps {
  images: string[];
  title?: string;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ images, title = "E-Book" }) => {
  const isMobile = useIsMobile();
  const pcRef = useRef<any>(null);
  const mobileRef = useRef<any>(null);

  const prevPage = () => {
    (isMobile ? mobileRef.current : pcRef.current)?.pageFlip()?.flipPrev();
  };
  const nextPage = () => {
    (isMobile ? mobileRef.current : pcRef.current)?.pageFlip()?.flipNext();
  };

  // ✅ PC용: blank + cover, cover는 오른쪽
  const pcImages = ["/images/book/blank.png", "/images/book/cover.png", ...images.filter((src) => !src.includes("cover") && !src.includes("blank"))];
  if (pcImages.length % 2 !== 0) pcImages.push("/images/book/blank.png");

  // ✅ 모바일용: cover부터 단독 순서
  const mobileImages = images.filter((src) => !src.includes("blank"));

  return (
    <div className="w-full flex flex-col items-center">
      <header className="flex items-center space-x-2 px-4 mb-2">
        <BookOpen className="h-6 w-6 text-blue-600" />
        <h1 className="text-xl font-semibold">{title}</h1>
      </header>

      <div className="flex items-center space-x-4 mb-4">
        <button onClick={prevPage} className="p-2 border rounded hover:bg-gray-200">
          <ChevronLeft />
        </button>
        <button onClick={nextPage} className="p-2 border rounded hover:bg-gray-200">
          <ChevronRight />
        </button>
      </div>

      {/* ✅ PC 버전 */}
      <div className={`${isMobile ? "hidden" : "block"} w-full max-w-screen-lg`}>
        <HTMLFlipBook
          ref={pcRef}
          size="stretch" // ✅ 자동 맞춤 비율
          usePortrait={false} // ✅ 두 페이지 보여주기
          width={600} // ✅ 무시됨 (stretch 덕에)
          height={800}
          minWidth={300}
          maxWidth={2000}
          minHeight={400}
          maxHeight={2000}
          maxShadowOpacity={0}
          autoSize={true} // ✅ 컨테이너 크기에 맞게
          className="w-full h-auto" // ✅ 컨테이너 기준으로 늘어남
          style={{ backgroundColor: "white" }}
          showCover={false}
          drawShadow={false}
          flippingTime={600}
          startPage={0}
          startZIndex={0}
          mobileScrollSupport={true}
          showPageCorners={true}
          clickEventForward={false}
          useMouseEvents={true}
          swipeDistance={30}
          disableFlipByClick={false}
        >
          {pcImages.map((src, i) => (
            <div key={i} className="flex justify-center items-center bg-white">
              <img src={src} alt={`page-${i + 1}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      {/* ✅ 모바일 버전 */}
      <div className={`${isMobile ? "block" : "hidden"} w-full`}>
        <HTMLFlipBook
          ref={mobileRef}
          width={300}
          height={450}
          size="stretch"
          style={{ backgroundColor: "white" }}
          showCover={true}
          usePortrait={true}
          minWidth={300}
          maxWidth={600}
          minHeight={400}
          maxHeight={900}
          flippingTime={500}
          drawShadow={false}
          startPage={0}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0}
          clickEventForward={false}
          useMouseEvents={true}
          swipeDistance={30}
          disableFlipByClick={false}
          className="w-full"
          mobileScrollSupport={false}
          showPageCorners={false}
        >
          {mobileImages.map((src, i) => (
            <div key={i} className="flex justify-center items-center bg-white">
              <img src={src} alt={`page-${i + 1}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default PDFViewer;
