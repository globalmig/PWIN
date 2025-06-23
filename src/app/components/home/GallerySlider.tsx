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
  // 1보강토 리스트
  { id: 1, title: "보강토(멀티)", content: "가평군 상면 연화리 전원주택단지 조성공사", image: "/images/main/type01/1.webp", link: "/gallery/43", type: "보강토" },
  { id: 11, title: "보강토(적색)", content: "가평 쁘띠프랑스 이태리마을 옹벽공사", image: "/images/main/type01/2.webp", link: "/gallery/44", type: "보강토" },
  { id: 111, title: "보강토(멀티)", content: "가평군 상면 행현리 단지조성", image: "/images/main/type01/3.webp", link: "/gallery/37", type: "보강토" },
  { id: 1111, title: "보강토(흑색)", content: "남양주시 화도읍 가곡리 단지조성", image: "/images/main/type01/4.webp", link: "/gallery/16", type: "보강토" },
  { id: 11111, title: "보강토(회색+흑색)", content: "춘천 신북 전원주택단지 조성공사", image: "/images/main/type01/5.webp", link: "/gallery/3", type: "보강토" },
  { id: 111111, title: "보강토(회색+적색)", content: "남양주시 화도읍 마석우리 전원주택 단지조성", image: "/images/main/type01/6.webp", link: "/gallery/15", type: "보강토" },

  // 2식생축조 리스트
  { id: 2, title: "축조블록(타원형)", content: "남양주 조안면 삼봉리 옹벽공사", image: "/images/main/type02/1.jpg", link: "/gallery/1014", type: "식생축조" },
  { id: 22, title: "축조블록(타원형)", content: "양평군 양평읍 회현리 축조공사", image: "/images/main/type02/2.jpg", link: "/gallery/1025", type: "식생축조" },
  { id: 222, title: "축조블록(타원형)", content: "남양주 별내면 광적리 묘역조성공사", image: "/images/main/type02/3.jpg", link: "/gallery/1022", type: "식생축조" },
  { id: 2222, title: "축조블록(타원형)", content: "포천시 내촌면 신팔리 절토사면 옹벽공사", image: "/images/main/type02/4.jpg", link: "/gallery/1030", type: "식생축조" },
  { id: 22222, title: "축조블록(타원형)", content: "양평군 옥천면 용천리 절토사면 옹벽공사", image: "/images/main/type02/5.jpg", link: "/gallery/1026", type: "식생축조" },
  { id: 222222, title: "축조블록(타원형)", content: "남양주 수동면 외방리 절토사면 옹벽공사", image: "/images/main/type02/6.webp", link: "/gallery/1012", type: "식생축조" },

  // 3 환경리스트
  { id: 3, title: "환경호안블록", content: "별내 용암천 지방하천 정비사업", image: "/images/main/type03/1.webp", link: "/gallery/10000", type: "환경호안" },
];

const filter = [
  { key: 1, name: "ALL", type: "ALL" },
  { key: 2, name: "보강토", type: "보강토" },
  { key: 3, name: "식생축조", type: "식생축조" },
  { key: 4, name: "환경호안", type: "환경호안" },
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
