import { useEffect, useState } from "react";
import { Art } from "../components/Art";
import { Carousel } from "../components/Carousel";
import { useArts } from "../hook/useArts";
import { CarouselSkeleton } from "../skeletons/CarouselSkeleton";
import { useArtSearch } from "../hook/useArtSearch";

export function Home() {
  const { arts, carouselArts, loading } = useArts();

  const { query, setQuery, filteredArts } = useArtSearch(arts);

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  const totalPages = Math.ceil(filteredArts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentArts = filteredArts.slice(startIndex, endIndex);

  return (
    <div>
      {loading ? <CarouselSkeleton /> : <Carousel arts={carouselArts} />}

      <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
        <input
          type="text"
          className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-green-900"
          placeholder="Pesquisar por obra ou autor..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div id="arts-start"><Art arts={currentArts} loading={loading} /></div>

      {!loading && filteredArts.length > 0 && (
        <div className="flex items-center justify-center gap-6 mt-20">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`text-xl transition-opacity ${currentPage === 1
                ? "opacity-30 cursor-not-allowed"
                : "hover:scale-110 cursor-pointer hover:bg-gray-300 w-5 hover:rounded-md"
              }`}
          >
            ‹
          </button>

          <div className="flex gap-3">
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              const isActive = page === currentPage;

              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${isActive
                      ? "bg-green-900"
                      : "bg-gray-300 hover:bg-green-500"
                    }`}
                />
              );
            })}
          </div>

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`text-xl transition-opacity ${currentPage === totalPages
                ? "opacity-30 cursor-not-allowed"
                : "hover:scale-110 cursor-pointer hover:bg-gray-300 w-5 hover:rounded-md"
              }`}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
