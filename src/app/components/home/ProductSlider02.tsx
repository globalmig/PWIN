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
import { FaSearchPlus } from "react-icons/fa";

const products = [
  {
    id: 4,
    name: "보강토블록 (회색)",
    image: "/images/products/보강토/gray_.png",
    description: "이것은 제품 3의 설명입니다.",
    type: "retaining",
  },
  {
    id: 5,
    name: "보강토블록 (적색)",
    image: "/images/products/보강토/red_.png",
    description: "이것은 제품 3의 설명입니다.",
    type: "retaining",
  },
  {
    id: 6,
    name: "보강토블록 (황토색)",
    image: "/images/products/보강토/yellow_.png",
    description: "이것은 제품 3의 설명입니다.",
    type: "retaining",
  },
  {
    id: 7,
    name: "보강토블록 (흑색)",
    image: "/images/products/보강토/black_.png",
    description: "이것은 제품 3의 설명입니다.",
    type: "retaining",
  },

  {
    id: 8,
    name: "캡블록(회색)",
    image: "/images/products/캡블록/gray.png",
    description: "이것은 제품 3의 설명입니다.",
    type: "cap",
  },
  {
    id: 9,
    name: "캡블록(적색)",
    image: "/images/products/캡블록/red.png",
    description: "이것은 제품 3의 설명입니다.",
    type: "cap",
  },
  {
    id: 10,
    name: "캡블록(흑색)",
    image: "/images/products/캡블록/black.png",
    description: "이것은 제품 3의 설명입니다.",
    type: "cap",
  },

  {
    id: 2,
    name: "축조블록(타원형)",
    image: "/images/products/식생축조/gray.png",
    description: "이것은 제품 2의 설명입니다.",
    type: "masonry",
  },
  {
    id: 3,
    name: "축조블록(평면형)",
    image: "/images/products/식생축조/gray_plane.png",
    description: "이것은 제품 3의 설명입니다.",
    type: "masonry",
  },
  {
    id: 1,
    name: "호안블록",
    image: "/images/products/환경호안블록/gray.png",
    description: "이것은 제품 1의 설명입니다.",
    type: "eco",
  },
];

export default function ProductSlider02() {
  const router = useRouter();
  const handleClick = (type: string) => {
    router.push(`/products?type=${type}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-[500px]  w-full px-4  md:my-10">
      <div className="my-4 md:my-10  text-center">
        <h2 className="text-4xl md:text-5xl font-medium border-b-2 mb-2 border-lime-700 px-6 pb-2">제품 소개</h2>
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
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 5.5,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative group w-full  mx-auto cursor-pointer max-w-[300px]" onClick={() => handleClick(product.type as string)}>
                <div className="w-full h-[200px] md:h-[300px]">
                  <Image src={product.image} alt={product.name} fill className="w-full h-auto object-contain rounded-md" />
                </div>

                <div className="absolute inset-0 hidden group-hover:flex items-center justify-center gap-2 bg-black bg-opacity-60 rounded-md transition-opacity">
                  <FaSearchPlus color="white" size={30} />
                  <p className="text-white text-xl">상세보기</p>
                </div>
                <h3 className="text-sm md:text-lg font-semibold mt-4 text-center">{product.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
