import { useState } from "react";
import { Art } from "../components/Art";
import { Carousel } from "../components/Carousel";
import { useArts } from "../hook/useArts";
import { CarouselSkeleton } from "../skeletons/CarouselSkeleton";

export function Home() {
  const { arts, carouselArts, loading } = useArts()

  const itemsPerPage = 20
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(arts.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentArts = arts.slice(startIndex, endIndex)


  return (
    <div>
      {loading ? <CarouselSkeleton /> : <Carousel arts={carouselArts} />}
      <Art arts={currentArts} />
      <div className="flex items-center justify-center gap-6 mt-20">
        <button
          onClick={() =>
            setCurrentPage((p) => Math.max(p - 1, 1))
          }
          disabled={currentPage === 1}
          className={`
      text-xl transition-opacity
      ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : "hover:scale-110 cursor-pointer hover:bg-gray-300 w-5 hover:rounded-md"}
    `}
        >
          ‹
        </button>

        <div className="flex gap-3">
          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1
            const isActive = page === currentPage

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`
            w-3 h-3 rounded-full transition-all duration-200
            ${isActive
                    ? "bg-green-900"
                    : "bg-gray-300 hover:bg-green-500"}
          `}
              />
            )
          })}
        </div>

        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`
      text-xl transition-opacity
      ${currentPage === totalPages ? "opacity-30 cursor-not-allowed" : "hover:scale-110 cursor-pointer hover:bg-gray-300 w-5 hover:rounded-md"}
    `}
        >
          ›
        </button>
      </div>
    </div>
  )
}