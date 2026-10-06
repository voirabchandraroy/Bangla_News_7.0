'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* বড় 404 লেখা */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-red-700 tracking-widest">
          404
        </h1>

        {/* লাল ব্যাজ */}
        <div className="bg-red-700 text-white px-3 py-1 text-sm rounded rotate-6 inline-block -mt-4 mb-6">
          পেজ পাওয়া যায়নি
        </div>

        <h2 className="text-2xl font-bold mb-2">
          উফ! এই পেজটা খুঁজে পাচ্ছি না
        </h2>
        <p className="text-gray-500 mb-8">
          তুমি যে পেজটা খুঁজছ সেটা হয়তো সরিয়ে ফেলা হয়েছে, নাম বদলে গেছে,
          অথবা লিংকটা ভুল।
        </p>

        {/* বাটন */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="btn border-none bg-red-700 hover:bg-red-800 text-white px-8"
          >
            হোমে ফিরে যাও
          </Link>
          <button
            onClick={() => router.back()}
            className="btn btn-outline border-red-700 text-red-700 hover:bg-red-700 hover:border-red-700 hover:text-white px-8"
          >
            পেছনে যাও
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;