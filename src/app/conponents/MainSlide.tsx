"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
        <SwiperSlide>
          <Image src="/images/testImg.png" alt="테스트 이미지" width={500} height={500} className="w-full overflow-hidden max-h-[500px]"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/testImg.png" alt="테스트 이미지" width={500} height={500} className="w-full overflow-hidden max-h-[500px]"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/testImg.png" alt="테스트 이미지" width={500} height={500} className="w-full overflow-hidden max-h-[500px]"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/images/testImg.png" alt="테스트 이미지" width={500} height={500} className="w-full overflow-hidden max-h-[500px]"></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
