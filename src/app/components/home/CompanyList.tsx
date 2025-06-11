import Link from "next/link";
import Image from "next/image";

// TODO: 사진 변경해야함
// 회사소개 카테고리 리스트
const companyList = [
  {
    id: 1,
    name: "CEO",
    link: "/company",
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
    link: "/company/certificate",
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
    <div className="flex flex-col items-center justify-center w-full px-4  my-28 ">
      <div className="my-10 md:mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-medium border-b-2 mb-2 border-lime-700 px-6 pb-2">회사 소개</h2>
        <p className="text-xl text-zinc-400">ABOUT PWIN</p>
      </div>
      {/* pc 버전 */}
      <ul className="md:flex md:flex-row flex-col gap-3 items-center justify-between mx-auto  text-xl font-medium pb-20 px-4 hidden w-full max-w-[1440px]">
        {companyList.map((item) => (
          <li className="flex flex-col items-center flex-1  hover:flex-[2] transition-all duration-500 ease-in-out" key={item.id}>
            <Link href={item.link}>
              <div className="relative">
                <Image src={item.image} alt="테스트 이미지" width={500} height={400} className="overflow-hidden h-[400px] rounded-lg w-full object-cover" />
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  text-2xl  lg:text-4xl font-bold text-shadow-xl">{item.name}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* 모바일 버전  */}
      <ul className="flex flex-col gap-4 w-full items-center justify-center text-xl font-medium py-20 md:hidden">
        {companyList.map((item) => (
          <li className="flex flex-col items-center gap-2 w-full relative" key={item.id}>
            <Link href={item.link} className="w-full px-4">
              <div className="relative w-full h-[200px] shadow-sm rounded-md overflow-hidden mb-2">
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
