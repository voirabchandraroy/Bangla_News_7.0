import Image from "next/image";
import Link from "next/link";
interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string

}
const Mainnews = ({ news }: { news: News[] }) => {
    const firstNews = news[0];
    const otherNews = news.slice(1);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
            <Link href={`/news/${firstNews.id}`}>
                <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                    <figure className="overflow-hidden bg-gray-200">
                        <Image
                            className="w-full h-56 object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                            height={600}
                            width={600}
                            src={firstNews.imageUrl}
                            alt={firstNews.imageAlt}
                        />
                    </figure>
                    <div className="p-4">
                        <p className="mb-2 text-xs font-semibold text-red-600">{firstNews.category}</p>
                        <h2 className="text-lg font-bold leading-snug text-gray-900">{firstNews.title}</h2>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">{firstNews.description}</p>
                    </div>
                </div>
            </Link>
            <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white divide-y divide-gray-200">
                {otherNews.slice(0, 4).map((on) => (

                    <Link href={`/news/${on.id}`} key={on.id} className="flex flex-1 flex-col justify-center px-4 py-3">
                        <p className="mb-1.5 text-xs font-semibold text-red-600">{on.category}</p>
                        <div className="text-base font-semibold leading-snug text-gray-900 hover:text-red-600 cursor-pointer">{on.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Mainnews;