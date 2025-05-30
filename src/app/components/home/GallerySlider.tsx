"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { link } from "fs";
import Link from "next/link";

// 시공 사례 리스트
const galleryList = [
  { id: 1, title: "시공 사례 1", content: "사례01", image: "https://swiperjs.com/demos/images/nature2.jpg", link: "/gallery/1" },
  { id: 2, title: "시공 사례 2", content: "사례02", image: "https://swiperjs.com/demos/images/nature-2.jpg", link: "/gallery/2" },
  { id: 3, title: "시공 사례 3", content: "사례03", image: "https://swiperjs.com/demos/images/nature-2.jpg", link: "/gallery/3" },
  { id: 4, title: "시공 사례 4", content: "사례04", image: "https://swiperjs.com/demos/images/nature-2.jpg", link: "/gallery/4" },
  { id: 5, title: "시공 사례 5", content: "사례05", image: "https://swiperjs.com/demos/images/nature-2.jpg", link: "/gallery/5" },
  { id: 6, title: "시공 사례 6", content: "사례06", image: "https://swiperjs.com/demos/images/nature-2.jpg", link: "/gallery/6" },
];

export default function GallerySlider() {
  return (
    <div className="flex flex-col items-center justify-center h-[500px] bg-gray-100">
      <h2 className="text-3xl md:text-4xl my-10 font-bold mb-8">시공 사례</h2>
      <div className="w-full  px-4 max-w-[1440px] ">
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
            rotate: 10,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow]}
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
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
          }}
        >
          {galleryList.map((item) => (
            <Link href={item.link} key={item.id}>
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={item.link} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.content}</p>
                  </div>
                </div>
              </SwiperSlide>
            </Link>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
