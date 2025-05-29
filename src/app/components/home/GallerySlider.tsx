"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow } from "swiper/modules";

export default function GallerySlider() {
  return (
    <div className="flex flex-col items-center justify-center h-[500px] bg-gray-100">
      <h2 className="text-4xl font-bold mb-8">시공 사례</h2>
      <div className="w-full  px-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
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
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt="Nature 2" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">제품 1</h3>
                <p className="text-gray-600 text-sm">이것은 제품 1의 설명입니다.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="Nature 3" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">제품 2</h3>
                <p className="text-gray-600 text-sm">이것은 제품 2의 설명입니다.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="Nature 4" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">제품 3</h3>
                <p className="text-gray-600 text-sm">이것은 제품 3의 설명입니다.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt="Nature 5" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">제품 4</h3>
                <p className="text-gray-600 text-sm">이것은 제품 4의 설명입니다.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="Nature 6" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">제품 5</h3>
                <p className="text-gray-600 text-sm">이것은 제품 5의 설명입니다.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="Nature 7" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">제품 6</h3>
                <p className="text-gray-600 text-sm">이것은 제품 6의 설명입니다.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="Nature 8" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">제품 7</h3>
                <p className="text-gray-600 text-sm">이것은 제품 7의 설명입니다.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="Nature 9" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">제품 8</h3>
                <p className="text-gray-600 text-sm">이것은 제품 8의 설명입니다.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
