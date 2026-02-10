export function ArtCardSkeleton() {
  return (
    <div className="flex flex-col gap-3 mt-5 border-b-2 border-green-900 pb-8">

      <div className="w-72 h-72 flex items-center justify-center bg-neutral-300 relative">
        <div className="h-8 w-8 border-2 border-neutral-600 border-t-transparent rounded-full animate-spin" />
      </div>

      <div className="space-y-2">
        <div className="h-6 w-40 bg-neutral-300 animate-pulse" />
        <div className="h-4 w-32 bg-neutral-300 animate-pulse" />
        <div className="h-4 w-28 bg-neutral-300 animate-pulse" />
      </div>
    </div>
  );
}
