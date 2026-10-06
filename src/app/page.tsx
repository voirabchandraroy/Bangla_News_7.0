import Mainnews from "@/components/Mainnews";
import Mostread from "@/components/Mostread";
import Newscard from "@/components/Newscard";

interface Section {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;

  const otherSections: Section[] = sections.slice(1);

  return (
    <div>
      
      <div className="grid gap-5 mt-5 grid-cols-3 ">
        {/* news sections */}
        <div className="col-span-2">
          <Mainnews news={mainNews} />

          <div className="grid gap-5 mt-5">
            {otherSections.map((os) =>
              <div className=" pb-1" key={os.curationId}>
                <h1 className="border-b-2 border-red-700 font-bold text-lg">{os.title}</h1>
                <div className="grid mt-3 grid-cols-3 gap-5">
                  {
                    os.articles.map(news => <Newscard key={news.id} news={news} />)
                  }
                </div>
                <div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-1">
          <Mostread />

        </div>
      </div>
    </div>

  );
}
