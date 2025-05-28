import Image from "next/image";
import Link from "next/link";
import MainSlide from "./conponents/MainSlide";

export default function Home() {
  return (
    <div>
      <section>
        <MainSlide />
        <p> 안녕하세요?</p>
      </section>
    </div>
  );
}
