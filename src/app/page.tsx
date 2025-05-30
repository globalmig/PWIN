import MainSlide from "./components/MainSlide";

import ProductSlider02 from "./components/home/ProductSlider02";
import CompanyList from "./components/home/CompanyList";
import GallerySlider from "./components/home/GallerySlider";

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
        <GallerySlider />
      </section>
      <section>
        <CompanyList />
      </section>
    </div>
  );
}
