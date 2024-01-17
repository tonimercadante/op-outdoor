import { fetchContainers, fetchNews } from "@/app/lib/_rest";
import Image from "next/image";

export default async function Installations() {
  const installations = await fetchContainers("newsgallery");

  return (
    <div className="flex h-full w-full items-center justify-center gap-3">
      {installations[0].relations.map((installation) => (
        <div
          className="relative flex h-full w-60 items-center justify-center text-white"
          key={installation.id}
        >
          <span className="z-50">{installation.relation.value["Name"]}</span>
          <Image
            src={
              "http://localhost:3001" +
              installation.relation.value.locationImage.url
            }
            alt={""}
            fill
            // width={installation.relation.value.locationImage.width}
            // height={installation.relation.value.locationImage.height}
          />
        </div>
      ))}
    </div>
  );
}
