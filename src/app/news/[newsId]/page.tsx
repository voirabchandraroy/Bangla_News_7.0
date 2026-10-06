import { notFound } from "next/navigation";

type Block =
    | { type: 'text'; text: string }
    | {
          type: 'image';
          url: string;
          width?: number;
          height?: number;
          altText?: string;
          caption?: string | null;
          copyrightHolder?: string;
      };

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('bn-BD', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

const NewsDetails = async ({ params }: { params: { newsId: string } }) => {
    const { newsId } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);
    const data = await res.json();
    const news = data.data;

    if (!news) {
        notFound()
    }

    const blocks: Block[] = news.body ?? [];

    return (
        <article className="mx-auto max-w-3xl px-4 py-8">
            {/* Header */}
            <header className="mb-6">
                <h1 className="text-3xl font-bold leading-snug md:text-4xl">{news.title}</h1>

                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-600">
                    {news.byline?.map((b: { name: string; role?: string }) => (
                        <span key={b.name}>
                            {b.name}
                            {b.role ? `, ${b.role}` : ''}
                        </span>
                    ))}
                    {news.firstPublished && (
                        <time dateTime={news.firstPublished}>{formatDate(news.firstPublished)}</time>
                    )}
                    {news.source && <span>সূত্র: {news.source}</span>}
                </div>
            </header>

            {/* Body */}
            <div className="space-y-5 text-lg leading-8">
                {blocks.map((block, i) => {
                    if (block.type === 'image') {
                        return (
                            <figure key={i} className="my-6">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={block.url}
                                    alt={block.altText || news.title}
                                    width={block.width}
                                    height={block.height}
                                    loading="lazy"
                                    className="h-auto w-full rounded-lg"
                                />
                                {(block.caption || block.copyrightHolder) && (
                                    <figcaption className="mt-2 text-sm text-gray-600">
                                        {block.caption}
                                        {block.copyrightHolder && (
                                            <span className="block text-xs text-gray-500">
                                                © {block.copyrightHolder}
                                            </span>
                                        )}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    }

                    // text block: \n কে নতুন লাইন হিসেবে দেখাতে whitespace-pre-line
                    return (
                        <p key={i} className="whitespace-pre-line">
                            {block.text}
                        </p>
                    );
                })}
            </div>

            {/* Tags */}
            {news.tags?.length > 0 && (
                <footer className="mt-10 flex flex-wrap gap-2 border-t pt-4">
                    {news.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                        >
                            {tag}
                        </span>
                    ))}
                </footer>
            )}
        </article>
    );
};

export default NewsDetails;