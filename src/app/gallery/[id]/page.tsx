"use client";
import ProductSlider02 from "@/app/components/home/ProductSlider02";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Block01Detail from "@/app/components/gallery/Block03Detail";

// 타입 정의
interface GalleryItem {
  id: string;
  title: string;
  created_at: string;
  content: string;
  images: string[];
  link: string;
  type: string;
}

export default function GalleryDetail() {
  const { id } = useParams();
  const [galleryItem, setGalleryItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    async function fetchGalleryDetail() {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();

        const item = data.find((item: any) => String(item.id) === String(id));
        setGalleryItem(item);
      } catch (err) {
        console.error("데이터 불러오기 실패", err);
      }
    }

    if (id) fetchGalleryDetail();
  }, [id]);

  const itemDetails = [
    { key: 1, title: "NAME", name: galleryItem?.type },
    { key: 2, title: "DATE", name: galleryItem?.created_at },
    { key: 3, title: "TYPE", name: galleryItem?.type },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full  text-white px-4 md:px-20 relative">
        <Image src={galleryItem?.images?.[0] || "/images/default_x.png"} alt={galleryItem?.title || "gallery image"} fill className="absolute object-cover z-[-2] blur-sm" />
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black opacity-50 z-[-1]" />
        <div className="h-96 md:h-screen flex flex-col justify-center items-center md:items-start max-w-[1440px] mx-auto">
          <h1 className="text-5xl mb-4 md:text-8xl md:mb-6">{galleryItem?.title}</h1>
          <p className="hidden md:block text-3xl mb-20">자연과 구조물의 조화를 이끄는, 평원산업 작업을 확인해 보세요</p>
          <p className="md:hidden text-lg mb-10">자연과 구조물의 조화 평원산업 사례</p>
          <div className="flex flex-row flex-wrap gap-6 mt-4">
            {itemDetails.map((item) => (
              <div className="flex flex-col border-l-2 pl-6" key={item.key}>
                <p className="text-lg font-semibold">{item.title}</p>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 실제 시공 사진 - TODO: 데이터 연결 / 데이터에 따라 바뀌는 영역 */}
      <section className="px-4 py-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {galleryItem?.images?.map((imgSrc, index) => (
          <div key={index} className="w-full aspect-[3/2] overflow-hidden rounded-3xl shadow-md relative">
            <Image src={imgSrc || "/images/default_x.png"} alt={`시공사례 이미지 ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </section>

      <Block01Detail />

      <section>
        <ProductSlider02 />
      </section>
    </>
  );
}
