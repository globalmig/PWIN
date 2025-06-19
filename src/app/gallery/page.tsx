import List from "../components/gallery/list";

export default function Gallery() {
  return (
    <div>
      <div className="w-fit mx-auto mt-20 md:mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-medium border-b-2 mb-2 border-lime-700 px-6 pb-2">시공갤러리</h2>
        <p className="text-xl text-zinc-400">PWIN GALLERY</p>
      </div>

      <List />
    </div>
  );
}
