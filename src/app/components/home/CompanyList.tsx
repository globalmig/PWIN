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
      <ul className="flex gap-4 items-center justify-center text-xl font-medium py-20 px-16 ">
        {companyList.map((item) => (
          <Link href={item.link} key={item.id}>
            <li className="flex flex-col items-center gap-2">
              <Image src={item.image} alt="테스트 이미지" width={200} height={200} className="rounded-full overflow-hidden w-36 h-36" />
              <p>{item.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
