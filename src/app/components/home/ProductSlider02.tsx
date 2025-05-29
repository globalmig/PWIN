"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

const products = [
  {
    id: 1,
    name: "제품 1",
    image: "/images/testImg.png",
    description: "이것은 제품 1의 설명입니다.",
  },
  {
    id: 2,
    name: "제품 2",
    image: "/images/testImg.png",
    description: "이것은 제품 2의 설명입니다.",
  },
  {
    id: 3,
    name: "제품 3",
    image: "/images/testImg.png",
    description: "이것은 제품 3의 설명입니다.",
  },
  {
    id: 4,
    name: "제품 4",
    image: "/images/testImg.png",
    description: "이것은 제품 3의 설명입니다.",
  },
  {
    id: 5,
    name: "제품 5",
    image: "/images/testImg.png",
    description: "이것은 제품 3의 설명입니다.",
  },
  {
    id: 6,
    name: "제품 6",
    image: "/images/testImg.png",
    description: "이것은 제품 3의 설명입니다.",
  },
  {
    id: 7,
    name: "제품 7",
    image: "/images/testImg.png",
    description: "이것은 제품 3의 설명입니다.",
  },
];

export default function ProductSlider02() {
  return (
    <div className="flex flex-col items-center justify-center h-[500px] bg-gray-100">
      <h2 className="text-4xl font-bold mb-20">제품소개</h2>
      <div className="w-full  px-20">
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Image src={product.image} alt={product.name} width={500} height={500} className="w-full overflow-hidden max-h-[500px] rounded-md relative" />
              <div className="hidden">
                <div className="bg-slate-500 opacity-90 rounded-full shadow-lg w-[65%] h-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white text-xl ">
                  <p>상세보기</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-4 text-center">{product.name}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
