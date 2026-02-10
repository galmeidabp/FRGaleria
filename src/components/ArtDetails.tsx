import { useParams } from "react-router-dom"
import { useArts } from "../hook/useArts"
import { DetailsCard } from "./cards/DetailsCard"
import { Button } from "./details/Button"
import { ErrorPage } from "../errors/ErrorPage"
import { DetailsCardSkeleton } from "../skeletons/DetailsCardSkeleton"

export function ArtDetails() {
  const { slug } = useParams<{ slug: string }>()
  const { arts, loading } = useArts()


  const art = arts.find(item => item.slug === slug)
  if (loading) {
    return (
      <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
        <div className="grid grid-cols-1 text-brown-900 font-inter lg:grid-cols-[2fr_1.6fr]">
          <DetailsCardSkeleton />
        </div>
      </div>
    );
  }
  
  if (!art) {
    return <ErrorPage />
  }

  const message = encodeURIComponent(`Olá! Gostaria de adquirir o quadro "${art.title}"`)

  return (
    <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
      <div className="grid grid-cols-1 text-brown-900 font-inter lg:grid-cols-[2fr_1.6fr]">

        <DetailsCard art={art} />

        <div className="p-0 mt-10 rounded-md md:p-10 md:mt-0">
          <h3 className="font-semibold text-lg mb-5 md:text-3xl">{art.title}</h3>

          <ul className="text-sm mb-5 lg:text-lg">
            <li className="mb-3 underline">{art.artist}</li>
            <li className="mb-3"><strong>Ano:</strong> {art.year}</li>
            <li className="mb-3"><strong>Técnica:</strong> {art.technique}</li>
            <li className="mb-3"><strong>Dimensões:</strong> {art.width} x {art.height} cm</li>
            <li className="mb-5">{art.description}</li>
          </ul>

          <a href={`https://wa.me/5581997704302?text=${message}`} target="_blank">
            <Button>Adquirir</Button>
          </a>
        </div>

      </div>
    </div>
  )
}
