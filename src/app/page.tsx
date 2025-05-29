import Image from "next/image";
import Link from "next/link";
import MainSlide from "./components/MainSlide";
import ProductSlider01 from "./components/home/GallerySlider";
import ProductSlider02 from "./components/home/ProductSlider02";
import CompanyList from "./components/home/CompanyList";

export default function Home() {
  return (
    <div>
      <section>
        <MainSlide />
      </section>
      <section>
        <ProductSlider02 />
      </section>
      <section>
        <ProductSlider01 />
      </section>
      <section>
        <CompanyList />
      </section>
    </div>
  );
}
