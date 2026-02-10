import { useArts } from "../hook/useArts";
import { ArtCardSkeleton } from "../skeletons/ArtCardSkeleton";
import { ArtCard } from "./cards/ArtCard";
import { MainTitle } from "./details/MainTitle";

export function Art() {
  const { arts, loading, error } = useArts();

  return (
    <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
      <MainTitle title="Obras" />

      {error && <p>Erro ao carregar as obras.</p>}

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
