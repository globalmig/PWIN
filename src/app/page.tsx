import Image from "next/image";
import Link from "next/link";
import MainSlide from "./components/MainSlide";

import ProductSlider02 from "./components/home/ProductSlider02";

export default function Home() {
  return (
    <div>
      <section>
        <MainSlide />
        <ProductSlider02 />
      </section>
    </div>
  );
}
