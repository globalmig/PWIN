import Image from "next/image";

// 등록증 이미지 데이터
const certificateData = [
  { key: 1, image: "/images/certificate/certificates(1).webp", alt: "히히" },
  { key: 2, image: "/images/certificate/certificates(2).webp", alt: "히히" },
  { key: 3, image: "/images/certificate/certificates(3).webp", alt: "히히" },
  { key: 4, image: "/images/certificate/certificates(4).webp", alt: "히히" },
  { key: 5, image: "/images/certificate/certificates(5).webp", alt: "히히" },
  { key: 6, image: "/images/certificate/certificates(6).webp", alt: "히히" },
  { key: 7, image: "/images/certificate/certificates(7).webp", alt: "히히" },
  { key: 8, image: "/images/certificate/certificates(8).webp", alt: "히히" },
  { key: 9, image: "/images/certificate/certificates(9).webp", alt: "히히" },
  { key: 10, image: "/images/certificate/certificates(10).webp", alt: "히히" },
  { key: 11, image: "/images/certificate/certificates(11).webp", alt: "히히" },
  { key: 12, image: "/images/certificate/certificates(12).webp", alt: "히히" },
  { key: 13, image: "/images/certificate/certificates(13).webp", alt: "히히" },
];

export default function Certificate() {
  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center">
      <p className="text-title font-semibold">인증현황</p>
      <section className="w-full max-w-[1440px] gap-4 grid grid-cols-2 md:grid-cols-4">
        {certificateData.map((item) => (
          <Image src={item.image} alt={item.alt} width={400} height={400} key={item.key} />
        ))}
      </section>
    </div>
  );
}
