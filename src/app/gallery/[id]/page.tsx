"use client";
import ProductSlider02 from "@/app/components/home/ProductSlider02";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Block01Detail from "@/app/components/gallery/Block03Detail";

// 타입 정의
interface GalleryItem {
  id: string;
  title: string;
  created_at: string;
  description: string;
  images: string[];
  link: string;
  type: string;
}

export default function GalleryDetail() {
  const router = useRouter();
  const { id } = useParams();
  const [ids, setIds] = useState<number[]>([]);
  const [galleryItem, setGalleryItem] = useState<GalleryItem | null>(null);
  const [minId, setMinId] = useState<number | null>(null);
  const [maxId, setMaxId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchGalleryDetail() {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();
        const item = data.find((item: any) => String(item.id) === String(id));

        setGalleryItem(item);

        const fetchedIds = data.map((item: any) => Number(item.id)).sort((a, b) => a - b);
        setIds(fetchedIds);

        const min = Math.min(...fetchedIds);
        const max = Math.max(...fetchedIds);
        setMinId(min);
        setMaxId(max);
      } catch (err) {
        console.error("데이터 불러오기 실패", err);
      }
    }

    if (id) fetchGalleryDetail();
  }, [id]);

  const itemDetails = [
    { key: 2, title: "DATE", name: galleryItem?.created_at?.split("T")[0] },
    { key: 3, title: "TYPE", name: galleryItem?.type },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full text-white px-4 md:px-20 relative">
        <Image src={galleryItem?.images?.[0] || "/images/default_x.png"} alt={galleryItem?.title || "gallery image"} fill className="absolute object-cover z-[-2]" />
        {/* 어두운 오버레이 */}
        {/* <div className="flex w-full justify-between z-20 top-10 pt-10">
          <button
            className={`text-white text-7xl ${ids.length && Number(id) === ids[0] ? "opacity-30 cursor-not-allowed" : ""}`}
            disabled={ids.length && Number(id) === ids[0]}
            onClick={() => {
              if (ids.length && id) {
                const currentIndex = ids.findIndex((itemId) => itemId === Number(id));
                if (currentIndex > 0) {
                  const prevId = ids[currentIndex - 1];
                  router.replace(`/gallery/${prevId}`, { scroll: false, shallow: false });
                }
              }
            }}
          >
            {"<"}
          </button>

          <button
            className={`text-white text-7xl ${ids.length && Number(id) === ids[ids.length - 1] ? "opacity-30 cursor-not-allowed" : ""}`}
            disabled={!!(ids.length && Number(id) === ids[ids.length - 1])}
            onClick={() => {
              if (ids.length && id) {
                const currentIndex = ids.findIndex((itemId) => itemId === Number(id));
                if (currentIndex !== -1 && currentIndex < ids.length - 1) {
                  const nextId = ids[currentIndex + 1];
                  router.replace(`/gallery/${nextId}`, { scroll: false, shallow: false });
                }
              }
            }}
          >
            {">"}
          </button>
        </div> */}

        <div className="absolute inset-0 bg-black opacity-70 z-[-1]" />
        <div className="h-96 md:h-screen flex flex-col px-5 justify-center items-start md:items-start max-w-[1440px] mx-auto">
          <h1 className="text-4xl w-[86%] mb-4 md:text-8xl md:mb-6">{galleryItem?.title}</h1>
          <p className="hidden md:block text-3xl mb-20">자연과 구조물의 조화를 이끄는, 평원산업 작업을 확인해 보세요</p>
          <p className="md:hidden text-lg mb-10 mt-4">자연과 구조물의 조화 평원산업 사례</p>
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

      <section className="px-4 py-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {galleryItem?.images?.map((imgSrc, index) => (
          <div key={index} className="w-full aspect-[3/2] overflow-hidden rounded-3xl relative">
            <Image src={imgSrc || "/images/default_x.png"} alt={`시공사례 이미지 ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </section>

      <p className="w-full max-w-[1440px] mx-auto px-4">{galleryItem?.description}</p>

      <section>
        <ProductSlider02 />
      </section>
    </>
  );
}
