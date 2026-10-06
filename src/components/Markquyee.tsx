import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface Headline {
    id: string;
    title: string;
}
const Markquyee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data = await res.json();
    const headlines: Headline[] = data.data;
    console.log(headlines);
    return (
        <div className="bg-red-700 text-white">
            <div className="flex max-w-7xl mx-auto">
                <div className="bg-red-800 py-1 px-5 font-bold">সর্বশেষ</div>
                <MarqueeText className="py-1"
                    direction='right' duration={11}>
                    {headlines.map(h => <Link href={`/news/${h.id}`} key={h.id} className='flex items-center gap-2'>
                        <span>{h.title}</span>
                        <span className='mx-5'>•</span>
                    </Link>)}
                </MarqueeText>
            </div>

        </div>
    );
};

export default Markquyee;