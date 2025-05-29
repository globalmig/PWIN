"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const sliderData = [
  {
    id: 1,
    image: "/images/testImg.png",
    alt: "테스트 이미지 1",
  },
  {
    id: 2,
    image: "/images/testImg.png",
    alt: "테스트 이미지 2",
  },
  {
    id: 3,
    image: "/images/testImg.png",
    alt: "테스트 이미지 3",
  },
  {
    id: 4,
    image: "/images/testImg.png",
    alt: "테스트 이미지 4",
  },
];

export default function MainSlide() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* TODO: 이미지 변경 */}
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <Image src={item.image} alt={item.alt} width={500} height={500} className="w-full overflow-hidden max-h-[500px]"></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
