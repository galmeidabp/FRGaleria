import { Art } from "../components/Art";
import { Carousel } from "../components/Carousel";
import { useArts } from "../hook/useArts";

export function Home() {
  const {carouselArts} = useArts()

  return (
    <div>
      <Carousel arts={carouselArts} />
      <Art />
    </div>
  )
}