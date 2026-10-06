import Newscard from '@/components/Newscard';
import { notFound } from 'next/navigation';
interface News{
    id:string;
    title:string;
    description:string;
    category:string;
    imageUrl:string;
    imageAlt:string
}

const CategoryPage =async ({params}:{params:{categoryid:string}}) => {
    const {categoryid}=await params
    const res=await fetch(`https://news-api-v2.vercel.app/api/category/${categoryid}`)
    const data=await res.json()
    const categoorynews:News[]=data.data
    if (!categoorynews) {
            notFound()
        }
    return (
        <div>
            <h1 className='text-2xl font-bold border-b-2 border-red-700 mb-5'>{data.title}</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    categoorynews.map(news=><Newscard key={news.id} news={news}/>)
                }
            </div>
        </div>
    );
};

export default CategoryPage;