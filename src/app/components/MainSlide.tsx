"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "../globals.css";
import "swiper/css";
import "swiper/css/pagination";

const sliderData = [
  {
    id: 1,
    image: "/images/default_x.png",
    alt: "테스트 이미지 1",
  },
  {
    id: 2,
    image: "/images/default_x.png",
    alt: "테스트 이미지 2",
  },
  {
    id: 3,
    image: "/images/default_x.png",
    alt: "테스트 이미지 3",
  },
  {
    id: 4,
    image: "/images/default_x.png",
    alt: "테스트 이미지 4",
  },
];

export default function MainSlide() {
  return (
    <div>
      <div className="absolute top-[200px] md:top-1/3 left-0 right-0 md:right-48 z-10 text-white text-3xl sm:text-4xl md:text-5xl font-semibold">
        <div className="w-full max-w-[1440px] mx-auto px-4 flex justify-center md:justify-end">
          <div className="text-center md:text-end md:text-shadow-lg text-shadow-xl">
            <p className="mb-2">기술력과 친환경</p>
            <p>건설의 미래를 만듭니다</p>
          </div>
        </div>
      </div>
      <Swiper
        speed={2000}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* TODO: 이미지 변경 */}
        {sliderData.map((item) => (
          <SwiperSlide key={item.id} className="w-full overflow-hidden max-h-[600px] min-h-[300px]">
            <div className="w-full h-[300px] md:h-[500px] lg:h-[600px] relative">
              <Image src={item.image} alt={item.alt} fill className="object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
