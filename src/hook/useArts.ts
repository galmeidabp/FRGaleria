import { useEffect, useState } from "react"
import type { Art } from "../types/art"
import { getAllArts, getCarouselArts } from "../services/artService"

export function useArts() {
  const [arts, setArts] = useState<Art[]>([])
  const [carouselArts, setCarouselArts] = useState<Art[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const { data: allArts } = await getAllArts()
      const { data: carousel } = await getCarouselArts()

      if (allArts) setArts(allArts)
      if (carousel) setCarouselArts(carousel)

      setLoading(false)
    }

    fetchData()
  }, [])

  return { arts, carouselArts, loading }
}


{/* hook de dominio (domain hook) - centraliza a lógica de carregamento de obras, como uma api interna */ }
{/* ESTADO + CACHE + LOADING*/ }