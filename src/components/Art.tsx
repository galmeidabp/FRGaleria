import { ArtCardSkeleton } from "../skeletons/ArtCardSkeleton";
import type { Art } from "../types/art";
import { ArtCard } from "./cards/ArtCard";
import { MainTitle } from "./details/MainTitle";

interface ArtProps {
  arts: Art[];
  loading: boolean;
}

export function Art({ arts, loading }: ArtProps) {
  return (
    <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
      <MainTitle title="Obras" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:gap-16">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
            <ArtCardSkeleton key={i} />
          ))
          : arts.map((art) => (
            <ArtCard key={art.id} art={art} />
          ))}
      </div>
    </div>
  );
}
