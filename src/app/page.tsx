import Image from "next/image";
import SliderWantedWrapper from "./components/slider-wanted/slider-wanted-wrapper";
import News from "@/app/components/news";
import { fetchNews } from "./lib/_rest";
import Installations from "./components/installations";

type Bounty = {
  name: string;
  bounty: string;
  color: string;
};

export default async function Home() {
  const data: Bounty[] = [
    {
      name: "Black Beard",
      bounty: "300.000.000",
      color: "#E54F14",
    },
    {
      name: "Eustass Kid",
      bounty: "243.000.000",
      color: "#E54F14",
    },
    {
      name: "Crocodile",
      bounty: "130.000.000",
      color: "#F2AF00",
    },
    {
      name: "Katakuri",
      bounty: "92.000.000",
      color: "#FDF642",
    },
    {
      name: "Doflamingo",
      bounty: "50.000.000",
      color: "#54B6EB",
    },
  ];

  return (
    <main className="w-full">
      <div className="mt-10 w-full">
        <SliderWantedWrapper bountys={data} />
      </div>
      <div className="mx-auto h-[536px] max-w-4xl">
        <h1 className="mx-auto">News</h1>
        <div className="relative mx-auto pt-[50%]">
          <News />
        </div>
      </div>
      <div className="mt-20 flex flex-1 items-center justify-center">
        <button
          className="w-full max-w-[540px] shrink-0 rounded-xl bg-[#271fc7] py-2 text-white "
          style={{
            background:
              "linear-gradient(90deg, rgba(38,31,199,1) 0%, rgba(10,0,239,1) 35%, rgba(31,10,239,1) 65%, rgba(81,95,224,1) 100%)",
          }}
        >
          Alistar-se agora mesmo
        </button>
      </div>
      <div className="mt-20 flex h-[400px] w-full flex-1 items-center justify-center">
        <Installations />
      </div>
    </main>
  );
}
