import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="flex gap-60 mx-auto bg-white opacity-90 my-10 px-10 justify-center items-center w-full max-w-[1440px] ">
        <Image src={"/images/logo.png"} alt="Logo" width={100} height={100} />
        <ul className="flex gap-20 md:block fe">
          <li>회사소개</li>
          <li>제품소개</li>
          <li>시공사례</li>
          <li>공법소개</li>
        </ul>
      </header>
    </div>
  );
}
