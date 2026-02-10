export function DetailsCardSkeleton() {
  return (
    <div className="w-full">

      {/* MAIN IMAGE */}
      <div className="relative w-[288px] h-[288px] m-auto overflow-hidden md:w-115 md:h-100 bg-neutral-300 animate-pulse">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 border-2 border-neutral-600 border-t-transparent rounded-full animate-spin absolute" />
      </div>

      {/* INDICATORS */}
      <div className="flex justify-center gap-2 mt-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" />
        ))}
      </div>

      {/* THUMBS */}
      <div className="flex gap-2 justify-center mt-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="w-16 h-16 rounded-md bg-neutral-300 animate-pulse"
          />
        ))}
      </div>

    </div>
  );
}
