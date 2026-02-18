import { useEffect, useState } from "react"
import type { Art } from "../types/art"
import { getArts, getCarouselArts } from "../services/artService"

export function useArts(search?: string) {
  const [arts, setArts] = useState<Art[]>([]);
  const [carouselArts, setCarouselArts] = useState<Art[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data: artsData } = await getArts(search ?? "");
      const { data: carouselData } = await getCarouselArts();

      if (artsData) setArts(artsData);
      if (carouselData) setCarouselArts(carouselData);

      setLoading(false);
    };

    fetchData();
  }, [search]);

  return { arts, carouselArts, loading };
}



{/* hook de dominio (domain hook) - centraliza a lógica de carregamento de obras, como uma api interna */ }
{/* ESTADO + CACHE + LOADING*/ }