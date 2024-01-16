import SliderWantedCell from "./slider-wanted-cell";
type Bounty = {
  name: string;
  bounty: string;
  color: string;
};

export default function SliderWantedWrapper({
  bountys,
}: {
  bountys: Bounty[];
}) {
  return (
    <div className="flex items-center justify-center">
      {/* 1. */}
      <div className="relative h-20 w-[200%] overflow-hidden ">
        {/* 2. */}
        <div className="animate absolute left-0 flex h-20 w-[200%] items-center justify-around gap-20">
          {/* 3 */}
          {bountys.map((bounty, index) => (
            <SliderWantedCell
              key={index}
              wanted={bounty.name}
              bounty={bounty.bounty}
              color={bounty.color}
            />
          ))}
          {bountys.map((bounty, index) => (
            <SliderWantedCell
              key={index}
              wanted={bounty.name}
              bounty={bounty.bounty}
              color={bounty.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
