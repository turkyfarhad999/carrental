const Loading = () => {
  return (
    <section className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto px-6 py-20">
      {/* Header skeleton */}
      <div className="flex items-center gap-2 mb-8">
        <span className="w-1 h-5 bg-black inline-block" />
        <div className="h-7 w-32 bg-gray-200 rounded animate-pulse" />
      </div>

      {/* Card grid skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="border-2 border-black rounded-lg overflow-hidden flex flex-col justify-between"
          >
            <div className="relative h-56 w-full bg-gray-200 animate-pulse" />

            <div className="p-5">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="h-5 w-24 bg-gray-200 rounded mb-5 animate-pulse" />
            </div>

            {/* Edit/Delete button row skeleton */}
            <div className="px-5 pb-5 flex gap-3">
              <div className="h-10 flex-1 bg-gray-200 rounded-md animate-pulse" />
              <div className="h-10 flex-1 bg-gray-200 rounded-md animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Loading;