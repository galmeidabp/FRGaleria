import { Art } from "../components/Art";
import { Carousel } from "../components/Carousel";
import { useArts } from "../hook/useArts";
import { CarouselSkeleton } from "../skeletons/CarouselSkeleton";

export function Home() {
  const { carouselArts, loading } = useArts()

  return (
    <div>
      {loading ? <CarouselSkeleton /> : <Carousel arts={carouselArts} />}
      <Art />
    </div>
  )
}