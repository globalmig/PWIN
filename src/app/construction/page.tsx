import Image from "next/image";
import SNB from "../components/SNB";

const technique = [
  { key: 11, title: "성토부 시공예", img: "/images/construction/technique01.png", alt: "성토부 시공예" },
  { key: 22, title: "절토부 시공예", img: "/images/construction/technique02.png", alt: "절토부 시공예" },
];

const explain = [
  {
    key: 1,
    img: "/images/construction/explanation/construction01.png",
    alt: "일반적인 옹벽",
    name: "01일반",
    title: "1. 일반적인 옹벽",
    sub: "가장 보편적으로 시공하는 옹벽이며 활용도가 높고 기존 콘크리트 옹벽에 비해 미관이 수려하고 시공성 및 경제성이 뛰어난 유형",
  },
  {
    key: 2,
    img: "/images/construction/explanation/construction02.png",
    alt: "주거환경을 고려한 옹벽",
    name: "02주거",
    title: "2. 주거환경을 고려한 옹벽",
    sub: "위압감을 주는 높은 옹벽을 분할 시공하고 주민들을 위한 안전 휀스를 설치하며 자연환경과 어우러지도록 식재를 심는 유형",
  },
  {
    key: 3,
    img: "/images/construction/explanation/construction03.png",
    alt: "하천용 옹벽",
    name: "03하천",
    title: "3. 하천용 옹벽",
    sub: "여름철 빠른 수해복구 또는 양생이 힘든 하천변이나 물이 유입될 수 있는 저수지 주변을 위해 시공하며 부직포 및 잡석으로 보강토사의 유실을 방지하고 블록 전면부에 호박돌로 물의 유속을 감소시켜 구조물 손상에 관한 제반 문제를 해결한 유형",
  },
  {
    key: 4,
    img: "/images/construction/explanation/construction04.png",
    alt: "기존 콘크리트 옹벽, 상부 추가시공 옹벽",
    name: "04추가시공",
    title: "4. 기존 콘크리트 옹벽, 상부 추가시공 옹벽",
    sub: "기존 콘크리트 옹벽 배변부를 앵커 및 그리드로 안정화하고 보강토옹벽을 상부에 시공하는 방법으로 기존 부지공사 후 추가로 부지를 확보할 수 있는 매우 유용한 유형",
  },
  {
    key: 5,
    img: "/images/construction/explanation/construction05.png",
    alt: "구조물에 접한 옹벽",
    name: "05구조물",
    title: "5. 구조물에 접한 옹벽",
    sub: "옹벽 후면부에 구조물이 접해있어 보강재의 길이가 충분치 않는 부분에 시공하며 구조물 벽체에 앵커를 설치하고 보강재를 결속하여 안정화 시킨 유형",
  },
  {
    key: 6,
    img: "/images/construction/explanation/construction06.png",
    alt: "보강토 상단부 콘크리트, 기초 시공 옹벽",
    name: "06콘크리트",
    title: "6. 보강토 상단부 콘크리트, 기초 시공 옹벽",
    sub: "보강토 옹벽 상단부에 도로 및 기타 구조물(방음벽, 방호벽)등을 시공하는 방법으로 상단부의 어떤 구조물 설치도 가능한 유형",
  },
  {
    key: 7,
    img: "/images/construction/explanation/construction07.png",
    alt: "연약지반 치환 옹벽",
    name: "07연약지반",
    title: "7. 연약지반 치환 옹벽",
    sub: "습지, 논바닥, 하천변에 주로 시공하며 연약지반의 정도에 따라 치환 높이를 조정하고 치관그리드를 포설해주어 안정화된 옹벽을 시공하는 유형",
  },
  {
    key: 8,
    img: "/images/construction/explanation/construction08.png",
    alt: "자연의 조화를 위한 식생 옹벽",
    name: "08자연조화",
    title: "8. 자연의 조화를 위한 식생 옹벽",
    sub: "보강토 블록 전면에 녹화식물을 자라게 하여 주위의 자연환경과 조화를 이루도록 하며 옹벽 전면에 기울기를 주어 자연스럽게 보이도록 시공한 유형",
  },
];

export default function Construction() {
  return (
    <div className="w-full max-w-[1000px] mx-auto flex flex-col justify-center items-center px-4 my-10 md:my-20">
      {/* 네비게이션 */}
      <SNB />

      {/* 시공단면 섹션 */}
      <section id="title01" className="w-full mb-10">
        <h2 className="text-2xl md:text-5xl mb-4 transform duration-500 ease-in-out font-bold text-center">블록식 보강토 옹벽 시공단면</h2>
        <p className="text-base md:text-lg mb-2 md:mb-10 text-center">평원산업은 선진화 된 기술력으로 친환경 제품개발에 앞장서겠습니다.</p>

        {/* 성토부 시공예, 절토부 시공예 section */}
        <div className="flex flex-col md:flex-row w-full">
          {technique.map((item) => (
            <figure className="flex flex-col justify-center w-full gap-2 my-0 md:my-11" key={item.key}>
              <figcaption className="w-full text-xl md:text-3xl font-semibold mt-4 text-center text-[#3D7D38]">{item.title}</figcaption>
              <div className="w-full">
                <Image src={item.img} alt={item.alt} width={400} height={300} className="w-full" />
              </div>
            </figure>
          ))}
        </div>
      </section>

      {/* 시공예 섹션 */}
      <section id="title02" className="explanation">
        <h2 className="text-2xl md:text-5xl mb-4 transform duration-500 ease-in-out font-bold text-center">블록식 보강토 옹벽 시공예</h2>
        <p className="text-base md:text-lg mb-4 md:mb-10 text-center">평원산업은 선진화 된 기술력으로 친환경 제품개발에 앞장서겠습니다.</p>
        {explain.map((item) => (
          <figure id={item.name} className={`${item.name} flex md:flex-row flex-col-reverse justify-between w-full gap-4 my-4 md:my-11`} key={item.key}>
            <figcaption className="w-full md:w-1/2">
              <h3 className="text-xl md:text-3xl font-semibold mb-4 text-[#3D7D38]">{item.title}</h3>
              <p className="text-lg md:text-2xl text-[#161616]">{item.sub}</p>
            </figcaption>
            <Image src={item.img} alt={item.alt} width={475} height={393} className="w-full md:w-1/2" />
          </figure>
        ))}
      </section>
    </div>
  );
}
