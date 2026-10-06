import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

const Newscard = ({ news }: { news: News }) => {
    return (
        <Link href={`/news/${news.id}`}>
            <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                <figure className="overflow-hidden bg-gray-200">
                    <Image
                        className="w-full h-56 object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                        height={600}
                        width={600}
                        src={news.imageUrl}
                        alt={news.imageAlt}
                    />
                </figure>
                <div className="p-4">
                    <p className="mb-2 text-xs font-semibold text-red-600">{news.category}</p>
                    <h2 className="text-lg font-bold leading-snug text-gray-900">{news.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600 line-clamp-3">{news.description}</p>
                </div>
            </div>
        </Link>

    );
};

export default Newscard;