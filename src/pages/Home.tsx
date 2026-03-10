import { useEffect, useState } from "react";
import { Art } from "../components/Art";
import { Carousel } from "../components/Carousel";
import { useArts } from "../hook/useArts";
import { CarouselSkeleton } from "../skeletons/CarouselSkeleton";
import { useArtSearch } from "../hook/useArtSearch";
import { SlidersHorizontal } from "lucide-react";

type SortType = "" | "price-asc" | "price-desc" | "name";

export function Home() {
  const { arts, carouselArts, loading } = useArts();
  const { query, setQuery, filteredArts } = useArtSearch(arts);

  const [sort, setSort] = useState("");
  const [openFilter, setOpenFilter] = useState(false);

  const itemsPerPage = 20;

  const [currentPage, setCurrentPage] = useState(() => {
    const saved = sessionStorage.getItem("savedPage");
    if (saved) {
      sessionStorage.removeItem("savedPage");
      return Number(saved);
    }
    return 1;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const sortedArts = [...filteredArts].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "name") return a.title.localeCompare(b.title);
    return 0;
  });

  const handleSort = (value: SortType) => {
    setSort(value);
    setCurrentPage(1);
    setOpenFilter(false);
  };

  const totalPages = Math.ceil(sortedArts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentArts = sortedArts.slice(startIndex, endIndex);


  return (
    <div>
      {loading ? <CarouselSkeleton /> : <Carousel arts={carouselArts} />}

      <div className="max-w-2xs m-auto flex gap-4 mt-16 md:max-w-2xl lg:max-w-4xl">

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

        <div className="relative">
          <button
            onClick={() => setOpenFilter((prev) => !prev)}
            className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-200"
          >
            <SlidersHorizontal size={16} />
            <span className="hidden md:inline">Filtrar</span>
          </button>

          {openFilter && (
            <ul className="absolute right-0 mt-2 w-48 bg-white py-4 border border-gray-200 rounded-md shadow-md z-10">
              <li
                onClick={() => handleSort("")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Nenhum filtro
              </li>
              <li
                onClick={() => handleSort("price-asc")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Preço: menor → maior
              </li>
              <li
                onClick={() => handleSort("price-desc")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Preço: maior → menor
              </li>
              <li
                onClick={() => handleSort("name")}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                Nome A → Z
              </li>
            </ul>
          )}
        </div>

      </div>

      <div id="arts-start">
        <Art arts={currentArts} loading={loading} currentPage={currentPage} />
      </div>

      {!loading && sortedArts.length > 0 && (
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
