import Link from "next/link";
import Image from "next/image";

// 회사소개 카테고리 리스트
const companyList = [
  {
    id: 1,
    name: "CEO 인사말",
    link: "/company/philosophy",
    image: "/images/testImg.png",
  },
  {
    id: 2,
    name: "회사연혁",
    link: "/company/history",
    image: "/images/testImg.png",
  },
  {
    id: 3,
    name: "인증현황",
    link: "/company/cert",
    image: "/images/testImg.png",
  },
  {
    id: 4,
    name: "오시는 길",
    link: "/company/location",
    image: "/images/testImg.png",
  },
];

export default function CompanyList() {
  return (
    <div>
      {/* pc 버전 */}
      <ul className="md:flex gap-4 items-center justify-center text-xl font-medium py-20 px-16 hidden">
        {companyList.map((item) => (
          <li className="flex flex-col items-center gap-2" key={item.id}>
            <Link href={item.link}>
              <Image src={item.image} alt="테스트 이미지" width={200} height={200} className="rounded-full overflow-hidden w-36 h-36" />
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>

      {/* 모바일 버전  */}
      <ul className="flex flex-col gap-4 w-full items-center justify-center text-xl font-medium py-20 md:hidden">
        {companyList.map((item) => (
          <li className="flex flex-col items-center gap-2 w-full relative" key={item.id}>
            <Link href={item.link} className="w-full px-4">
              <div className="relative w-full h-[200px] bg-black rounded-md overflow-hidden mb-2">
                <Image src={item.image} alt={item.name} fill sizes="100vw" className="object-cover rounded-md" />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl">{item.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
