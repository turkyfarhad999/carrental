const Loading = () => {
  return (
    <>
      {/* HERO skeleton */}
      <section className="w-full px-4 sm:px-6 md:px-8 pt-8 sm:pt-16 md:pt-24 lg:pt-36 pb-8 sm:pb-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center border-b-2 border-black">
        <div className="flex flex-col justify-center">
          <div className="h-14 w-full bg-gray-200 rounded mb-2 animate-pulse" />
          <div className="h-14 w-2/3 bg-gray-200 rounded mb-4 animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse" />
          <div className="h-4 w-4/5 bg-gray-200 rounded mb-6 animate-pulse" />
          <div className="h-12 w-48 bg-gray-200 rounded-md animate-pulse" />
        </div>
        <div className="relative w-full h-40 sm:h-60 md:h-80 lg:h-96 rounded-lg overflow-hidden bg-gray-200 animate-pulse order-first md:order-last" />
      </section>

      {/* FLEET preview skeleton */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-0 py-10 sm:py-16 md:py-20">
        <div className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <span className="w-1 h-5 bg-black inline-block" />
            <div className="h-7 w-32 bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="border-2 border-black rounded-lg overflow-hidden flex flex-col justify-between"
              >
                <div className="relative h-40 sm:h-48 w-full bg-gray-200 animate-pulse" />
                <div className="p-3 sm:p-4 md:p-5">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
                    <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <div className="h-4 w-20 bg-gray-200 rounded mb-4 animate-pulse" />
                </div>
                <div className="px-3 sm:px-4 md:px-5 pb-3 sm:pb-4 md:pb-5">
                  <div className="h-9 w-full bg-gray-200 rounded-md animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Loading;