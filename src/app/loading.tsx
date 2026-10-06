const Loading = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-5">
        {/* ঘুরন্ত স্পিনার */}
        <div className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-20 w-20 rounded-full bg-red-700 opacity-20 animate-ping"></span>
          <span className="loading loading-spinner w-16 text-red-700"></span>
        </div>

        {/* লেখা */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-red-700">লোড হচ্ছে...</h2>
          <p className="text-gray-500 text-sm mt-1">অনুগ্রহ করে একটু অপেক্ষা করুন</p>
        </div>

        {/* তিনটা লাফানো ডট */}
        <div className="flex gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-700 animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-red-700 animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-red-700 animate-bounce"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;