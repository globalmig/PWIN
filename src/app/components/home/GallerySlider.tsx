"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Pagination, EffectCoverflow, Navigation } from "swiper/modules";
import Link from "next/link";
import { useState } from "react";

// TODO: 이미지 변경
// 시공 사례 리스트
const galleryList = [
  { id: 1, title: "시공 사례 1", content: "사례01-01", image: "https://swiperjs.com/demos/images/nature-2.jpg", link: "/gallery/1", type: "블록01" },
  { id: 2, title: "시공 사례 2", content: "사례02-01", image: "https://swiperjs.com/demos/images/nature-2.jpg", link: "/gallery/2", type: "블록01" },
  { id: 3, title: "시공 사례 3", content: "사례03-03", image: "https://swiperjs.com/demos/images/nature-2.jpg", link: "/gallery/3", type: "블록03" },
  { id: 4, title: "시공 사례 4", content: "사례04-02", image: "https://swiperjs.com/demos/images/nature-2.jpg", link: "/gallery/4", type: "블록02" },
  { id: 5, title: "시공 사례 5", content: "사례05-02", image: "https://swiperjs.com/demos/images/nature-2.jpg", link: "/gallery/5", type: "블록02" },
  { id: 6, title: "시공 사례 6", content: "사례06-01", image: "https://swiperjs.com/demos/images/nature-2.jpg", link: "/gallery/6", type: "블록01" },
];

const filter = [
  { key: 1, name: "ALL", type: "ALL" },
  { key: 2, name: "블록01", type: "블록01" },
  { key: 3, name: "블록02", type: "블록02" },
  { key: 4, name: "블록03", type: "블록03" },
];

export default function GallerySlider() {
  const [isSelected, setSelected] = useState("ALL");
  const Selected = (type: string) => {
    setSelected(type);
  };

  const filteredList = isSelected === "ALL" ? galleryList : galleryList.filter((item) => item.type === isSelected);

  return (
    <div className="flex flex-col items-center justify-center h-[500px] my-48 px-4">
      <div className="my-10 md:mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-medium border-b-2 mb-2 border-lime-700 px-6 pb-2">시공 사례</h2>
        <p className="text-xl text-zinc-400">CONSTRUCTION GALLERY</p>
      </div>
      <div
        className="relative w-full max-w-[1440px] rounded-xl py-12 pl-6"
        style={{
          background: "linear-gradient(90deg, #2e502b 3.26%, #40853a 104.31%), #FFF",
        }}
      >
        <div>
          {/* 필터 */}
          <div className="flex gap-4 justify-center">
            {filter.map((item) => (
              <button
                className={`border border-white  px-6 py-4 rounded-xl font-bold ${isSelected === item.type ? "text-[#255853] bg-white " : "text-[#e5fcf9]"}`}
                onClick={() => Selected(item.type as string)}
                key={item.key}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* 시공 사례 리스트 슬라이드 */}
          <Swiper
            effect={"coverflow"}
            speed={800}
            grabCursor={true}
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={4.5}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 50,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={true}
            navigation={true}
            modules={[Pagination, EffectCoverflow, Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2.5,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 15,
              },
            }}
          >
            {filteredList.map((item) => (
              <SwiperSlide key={item.id}>
                <Link href={item.link}>
                  <div className="card-container relative w-full h-96 flex justify-center items-center [perspective:1000px] group ">
                    <div className="card [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-700 w-[300px]">
                      {/* 카드 앞면 */}
                      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden [backface-visibility:hidden]">
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.content}</p>
                        </div>
                      </div>

                      {/* 카드 뒷면 */}
                      <div className="bg-white absolute left-0 right-0 top-0 bottom-0 rounded-lg shadow-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        {/* <img src={item.image} alt={item.title} className="w-full h- object-cover " /> */}
                        <div className="p-4 absolute top-2">
                          <h3 className="text-3xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-gray-600 text-lg">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* 스크롤 섹션 */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-5 flex items-center">
          <div className="flex animate-marquee whitespace-nowrap">
            {/* 첫 번째 텍스트 */}
            <div className="flex items-center shrink-0 gap-10">
              <span className="text-white font-medium text-[300px] ">PWIN</span>
              <span className="text-white font-medium text-[300px]">PWIN</span>
              <span className="text-white font-medium  text-[300px] pr-10">PWIN</span>
            </div>
            {/* 두 번째 텍스트 (동일한 복사본) */}
            <div className="flex items-center shrink-0 gap-10">
              <span className="text-white font-medium text-[300px]">PWIN</span>
              <span className="text-white font-medium text-[300px] ">PWIN</span>
              <span className="text-white font-medium text-[300px] ">PWIN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
