import Image from "next/image";

export default function NewsCell({
  title,
  subtitle,
  thumbnail,
}: {
  title: string;
  subtitle: string;
  thumbnail: string;
}) {
  return (
    <div className="relative h-full w-full rounded-lg">
      <Image
        src={"http://localhost:3001" + thumbnail.url}
        alt={thumbnail.alt}
        // width={thumbnail.width}
        // height={thumbnail.height}
        priority
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <div className="absolute bottom-0 z-10 w-full bg-[#8484844D] text-white">
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
    </div>
  );
}
