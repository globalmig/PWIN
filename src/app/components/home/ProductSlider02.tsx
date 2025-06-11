"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "환경호안 블록",
    image: "/images/products/환경호안블록.png",

    description: "이것은 제품 1의 설명입니다.",
    type: "eco",
  },
  {
    id: 2,
    name: "식생 축조블록",
    image: "/images/products/식생축조블록.png",
    description: "이것은 제품 2의 설명입니다.",
    type: "masonry",
  },
  {
    id: 3,
    name: "보강토 옹벽블록 (회색)",
    image: "/images/products/보강토_옹벽블록_gray.png",
    description: "이것은 제품 3의 설명입니다.",
    type: "retaining",
  },
  {
    id: 4,
    name: "보강토 옹벽블록 (적색)",
    image: "/images/products/보강토_옹벽블록_red.png",
    description: "이것은 제품 3의 설명입니다.",
    type: "retaining",
  },
  {
    id: 5,
    name: "보강토 옹벽블록 (황토색)",
    image: "/images/products/보강토_옹벽블록_yellow.png",
    description: "이것은 제품 3의 설명입니다.",
    type: "retaining",
  },
  {
    id: 6,
    name: "보강토 옹벽블록 (흑색)",
    image: "/images/products/보강토_옹벽블록_black.png",
    description: "이것은 제품 3의 설명입니다.",
    type: "retaining",
  },
  {
    id: 7,
    name: "제품 7",
    image: "/images/products/보강토_옹벽블록_yellow.png",
    description: "이것은 제품 3의 설명입니다.",
    type: "retaining",
    // TODO: 추가 제품으로 수정
  },
];

export default function ProductSlider02() {
  const router = useRouter();
  const handleClick = (type: string) => {
    router.push(`/products?type=${type}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-[500px]  w-full px-4 my-10">
      <div className="my-10 md:mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-medium border-b-2 mb-2 border-lime-700 px-6 pb-2">제품소개</h2>
        <p className="text-xl text-zinc-400">PWIN PRODUCTS</p>
      </div>

      <div className="w-full max-w-[1440px]">
        <Swiper
          slidesPerView={1}
          // centeredSlides={true}
          speed={1600}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={2}
          modules={[Autoplay, Navigation]}
          pagination={{
            clickable: true,
          }}
          navigation={true}
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
              slidesPerView: 4,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative group w-full  mx-auto cursor-pointer max-w-[300px]" onClick={() => handleClick(product.type as string)}>
                <Image src={product.image} alt={product.name} width={530} height={420} className="w-full h-auto object-cover rounded-md" />
                <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black bg-opacity-60 rounded-md transition-opacity">
                  <p className="text-white text-xl">상세보기</p>
                </div>
                <h3 className="text-lg font-semibold mt-4 text-center">{product.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
