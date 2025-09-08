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

  const prevPage = () => (isMobile ? mobileRef.current : pcRef.current)?.pageFlip()?.flipPrev();
  const nextPage = () => (isMobile ? mobileRef.current : pcRef.current)?.pageFlip()?.flipNext();

  // PC: blank + cover
  const pcImages = ["/images/book/blank.png", "/images/book/cover.png", ...images.filter((src) => !src.includes("cover") && !src.includes("blank"))];
  if (pcImages.length % 2 !== 0) pcImages.push("/images/book/blank.png");

  // Mobile: cover부터 단독
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

      {/* ✅ PC 버전: 3:4 비율 고정 컨테이너 */}
      <div className={`${isMobile ? "hidden" : "block"} w-full max-w-screen-lg`}>
        <div className="relative w-full aspect-[3/4] bg-white">
          <div className="absolute inset-0">
            <HTMLFlipBook
              ref={pcRef}
              // 중요: flipbook 내부도 '고정 비율' 사용
              size="fixed"
              autoSize={false}
              width={600} // 3:4 비율 (600x800)
              height={1000}
              minWidth={300}
              maxWidth={2000}
              minHeight={400}
              maxHeight={2000}
              showCover={false}
              usePortrait={false}
              drawShadow={false}
              maxShadowOpacity={0}
              flippingTime={600}
              startPage={0}
              startZIndex={0}
              clickEventForward={false}
              useMouseEvents={true}
              swipeDistance={30}
              disableFlipByClick={false}
              // 컨테이너 채우기 (중요)
              className="!w-fit !h-fit"
              style={{ width: "100%", height: "100%", backgroundColor: "white" }}
              mobileScrollSupport={false}
              showPageCorners={false}
            >
              {pcImages.map((src, i) => (
                <div key={i} className="w-fit h-full flex justify-center items-center bg-white">
                  <img src={src} alt={`page-${i + 1}`} className="w-fit h-full object-contain" />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      </div>

      {/* ✅ 모바일 버전: 2:3(=300x450) 비율 고정 컨테이너 */}
      <div className={`${isMobile ? "block" : "hidden"} w-full h-fit`}>
        <div className="relative w-full h-fit max-w-md mx-auto bg-white">
          <div className="absolute inset-0">
            <HTMLFlipBook
              ref={mobileRef}
              size="fixed"
              autoSize={false}
              width={300} // 2:3 비율 (300x450)
              height={450}
              showCover={true}
              usePortrait={true}
              minWidth={200}
              maxWidth={600}
              minHeight={300}
              maxHeight={900}
              flippingTime={500}
              drawShadow={false}
              startPage={0}
              startZIndex={0}
              maxShadowOpacity={0}
              clickEventForward={false}
              useMouseEvents={true}
              swipeDistance={30}
              disableFlipByClick={false}
              className="!w-full !h-full"
              style={{ width: "100%", height: "100%", backgroundColor: "white" }}
              mobileScrollSupport={false}
              showPageCorners={false}
            >
              {mobileImages.map((src, i) => (
                <div key={i} className="w-full h-fit flex justify-center items-center bg-white">
                  <img src={src} alt={`page-${i + 1}`} className="w-full h-fit object-contain" />
                </div>
              ))}
            </HTMLFlipBook>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
