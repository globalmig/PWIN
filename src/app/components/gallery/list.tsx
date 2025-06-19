"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// 타입 정의
interface GalleryItem {
  id: string;
  title: string;
  content: string;
  images: string[];
  link: string;
  type: string;
}

interface FilterItem {
  key: string;
  name: string;
  type: string;
}

// 필터 목록 (고정)
const filter: FilterItem[] = [
  { key: "1", name: "ALL", type: "ALL" },
  { key: "2", name: "보강토", type: "보강토" },
  { key: "3", name: "식생축조", type: "식생축조" },
  { key: "4", name: "환경호안", type: "환경호안" },
  { key: "5", name: "기타", type: "기타" },
];

export default function List() {
  const [isSelected, setSelected] = useState<string>("ALL");
  const [galleryList, setGalleryList] = useState<GalleryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        setGalleryList(data);
      } catch (err) {
        console.error("갤러리 불러오기 실패", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchGallery();
  }, []);

  const handleSelect = (type: string) => setSelected(type);

  const filteredList = isSelected === "ALL" ? galleryList : galleryList.filter((item) => item.type === isSelected);

  if (isLoading) {
    return <div className="w-full py-20 text-center text-gray-500 text-lg">시공사례를 불러오는 중입니다...</div>;
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-8">
      {/* 필터 버튼 */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {filter.map((item) => (
          <button
            key={item.key}
            onClick={() => handleSelect(item.type)}
            type="button"
            className={`border border-[#255853] px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:shadow-lg ${
              isSelected === item.type ? "text-white bg-[#255853] shadow-md" : "text-[#255853] hover:bg-[#255853] hover:text-white"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* 갤러리 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredList.map((item) => (
          <Link href={`/gallery/${item.id}`} key={item.id} className="block">
            <div className="group rounded-xl h-96 relative overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              {/* 이미지 */}
              <Image
                src={item.images?.[0] || "/images/default_x.png"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300" />

              <div className="relative z-10 flex flex-col justify-between items-center h-full p-8">
                <div className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight drop-shadow-lg my-8 group-hover:-translate-y-2 transition-transform duration-300">{item.title}</h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">{item.content}</p>
                </div>

                <button
                  className="text-lg font-medium border-2 border-white text-white group-hover:bg-white group-hover:text-black transition-all duration-300 w-4/5 h-12 rounded-lg backdrop-blur-sm translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100"
                  type="button"
                >
                  시공사례 보기
                </button>
              </div>

              <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-[#255853] px-3 py-1 rounded-full text-sm font-medium">{item.type}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* 필터 결과 없음 */}
      {filteredList.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">해당 필터에 맞는 시공사례가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
