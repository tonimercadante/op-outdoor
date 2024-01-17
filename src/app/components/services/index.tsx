import { fetchContainers } from "@/app/lib/_rest";
import Image from "next/image";

export default async function Services() {
  const services = await fetchContainers("serviceslist");
  console.log(services[0].relations[0]);
  return (
    <div className="flex h-full">
      {services[0].relations.map((service) => (
        <div className="relative flex flex-col gap-5" key={service.id}>
          <div className="flex flex-col gap-2 ">
            <div>{service.relation.value["Title"]}</div>
            <div>{service.relation.value["description"]}</div>
          </div>

          <div>{service.relation.value["anchor"]}</div>
          <Image
            src={
              "http://localhost:3001" + service.relation.value.serviceIcon.url
            }
            alt={""}
            width={service.relation.value.serviceIcon.width}
            height={service.relation.value.serviceIcon.height}
            className="absolute -top-[52%] left-1/2 flex -translate-x-1/2 "
          />
        </div>
      ))}
    </div>
  );
}
