import { fetchNews } from "@/app/lib/_rest";
import NewsCell from "./news-cell";

export default async function News() {
  const news = await fetchNews();

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 m-2 grid h-full auto-rows-max grid-cols-6 grid-rows-2 gap-5">
      <div className="col-span-4">
        <NewsCell
          title={news[3].title}
          subtitle={news[3].subtitle}
          thumbnail={news[3].thumbnail}
        />
      </div>
      <div className="col-span-2 ">
        <NewsCell
          title={news[2].title}
          subtitle={news[2].subtitle}
          thumbnail={news[2].thumbnail}
        />
      </div>
      <div className="col-span-2 col-start-1">
        <NewsCell
          title={news[1].title}
          subtitle={news[1].subtitle}
          thumbnail={news[1].thumbnail}
        />
      </div>
      <div className="col-span-4 col-start-3">
        <NewsCell
          title={news[0].title}
          subtitle={news[0].subtitle}
          thumbnail={news[0].thumbnail}
        />
      </div>
    </div>
  );
}
