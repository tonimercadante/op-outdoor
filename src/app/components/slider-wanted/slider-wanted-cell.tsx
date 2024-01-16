export default function SliderWantedCell({
  wanted,
  bounty,
  color,
}: {
  wanted: string;
  bounty: string;
  color: string;
}) {
  return (
    <div className="flex w-[20rem] items-start justify-center gap-4 rounded-xl bg-[#FFFFFFCC] px-5 py-2">
      <div className="min-h-14 min-w-14 flex-1 rounded-full bg-red-200"></div>
      <div className="flex flex-[2] flex-col  ">
        <span>{wanted}</span>
        <span>{bounty}</span>
        <div
          style={{ backgroundColor: color }}
          className="h-1 w-14 rounded-xl"
        ></div>
      </div>
    </div>
  );
}
