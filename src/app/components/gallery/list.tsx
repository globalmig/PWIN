"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ListProps {
  onEdit?: (item: GalleryItem) => void;
  onDelete?: (id: string) => void;
  isAuthorized?: boolean;
  galleryList?: GalleryItem[];
  setGalleryList?: React.Dispatch<React.SetStateAction<GalleryItem[]>>;
  isLoading?: boolean;
}

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  link: string;
  type: string;
  created_at: string;
}

interface FilterItem {
  key: string;
  name: string;
  type: string;
}

const filter: FilterItem[] = [
  { key: "1", name: "ALL", type: "ALL" },
  { key: "2", name: "보강토", type: "보강토" },
  { key: "3", name: "식생축조", type: "식생축조" },
  { key: "4", name: "환경호안", type: "환경호안" },
  { key: "5", name: "기타", type: "기타" },
];

export default function List({ onEdit, onDelete, isAuthorized, galleryList = [], setGalleryList, isLoading = false }: ListProps) {
  const [isSelected, setSelected] = useState<string>("ALL");
  const [localGalleryList, setLocalGalleryList] = useState<GalleryItem[]>([]);
  const [localIsLoading, setLocalIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const effectiveGalleryList = galleryList.length > 0 ? galleryList : localGalleryList;
  const effectiveIsLoading = galleryList.length > 0 ? isLoading : localIsLoading;

  const filteredList = isSelected === "ALL" ? effectiveGalleryList : effectiveGalleryList.filter((item) => item.type === isSelected);

  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => prev + 6);
        }
      },
      { threshold: 1 }
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [filteredList]);

  useEffect(() => {
    if (galleryList.length === 0 && !isAuthorized) {
      async function fetchGallery() {
        try {
          const res = await fetch("/api/gallery");
          const fetchedData = await res.json();
          const sorted = fetchedData.sort((a: GalleryItem, b: GalleryItem) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
          setLocalGalleryList(sorted);
        } catch (err) {
          console.error("갤러리 불러오기 실패", err);
        } finally {
          setLocalIsLoading(false);
        }
      }
      fetchGallery();
    } else if (galleryList.length > 0) {
      setLocalIsLoading(false);
    }
  }, [galleryList.length, isAuthorized]);

  const handleSelect = (type: string) => {
    setSelected(type);
    setVisibleCount(9);
  };

  if (effectiveIsLoading) {
    return <div className="w-full py-20 text-center text-gray-500 text-lg">시공사례를 불러오는 중입니다...</div>;
  }

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-8">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredList.slice(0, visibleCount).map((item) => (
          <div key={item.id} className="relative group rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Link href={`/gallery/${item.id}`} className="block h-96 relative">
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
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">{item.description}</p>
                </div>
                {!isAuthorized && (
                  <div className="text-lg font-medium border-2 border-white text-white group-hover:bg-white group-hover:text-black transition-all duration-300 w-4/5 h-12 rounded-lg backdrop-blur-sm translate-y-4 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 flex items-center justify-center">
                    시공사례 보기
                  </div>
                )}
              </div>
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-[#255853] px-3 py-1 rounded-full text-sm font-medium">{item.type}</div>
            </Link>

            {isAuthorized && (
              <div className="absolute bottom-4 right-4 flex gap-2 z-30">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onEdit?.(item);
                  }}
                  className="text-base bg-green-600 text-white px-4 py-2 rounded"
                >
                  수정
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    onDelete?.(item.id);
                  }}
                  className="text-base bg-red-600 text-white px-4 py-2 rounded"
                >
                  삭제
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div ref={loaderRef} className="h-10" />

      {filteredList.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">해당 필터에 맞는 시공사례가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
