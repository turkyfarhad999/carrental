const Loading = () => {
  return (
    <section className="w-11/12 md:w-4/5 lg:w-3/5 mx-auto px-6 py-16">
      {/* Back link skeleton */}
      <div className="h-4 w-28 bg-gray-200 rounded mb-8 animate-pulse" />

      <div className="grid md:grid-cols-2 gap-10 border-2 border-black rounded-lg overflow-hidden">
        {/* Image skeleton */}
        <div className="relative h-72 md:h-full min-h-[320px] w-full bg-gray-200 animate-pulse" />

        {/* Details skeleton */}
        <div className="p-6 md:p-8 flex flex-col">
          <div className="h-3 w-32 bg-gray-200 rounded mb-3 animate-pulse" />
          <div className="h-9 w-3/4 bg-gray-200 rounded mb-4 animate-pulse" />
          <div className="h-8 w-32 bg-gray-200 rounded mb-6 animate-pulse" />

          {/* Spec grid skeleton */}
          <div className="grid grid-cols-2 gap-4 mb-6 border-y border-gray-200 py-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <div className="h-3 w-16 bg-gray-200 rounded mb-2 animate-pulse" />
                <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>

          {/* Description skeleton */}
          <div className="space-y-2 mb-8 flex-1">
            <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-3 w-2/3 bg-gray-200 rounded animate-pulse" />
          </div>

          {/* CTA skeleton */}
          <div className="h-12 w-full bg-gray-200 rounded-md animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Loading;