import { useParams } from "react-router-dom"
import { useArts } from "../hook/useArts"
import { DetailsCard } from "./cards/DetailsCard"
import { Button } from "./details/Button"
import { ErrorPage } from "../errors/ErrorPage"
import { DetailsCardSkeleton } from "../skeletons/DetailsCardSkeleton"
import { ChevronDown, Info } from "lucide-react"
import { useState } from "react"

export function ArtDetails() {
  const { slug } = useParams<{ slug: string }>()
  const { arts, loading } = useArts()
  const [open, setOpen] = useState(false)

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
            <li className="mb-3 underline">{art.arts_artist_id_fkey?.name ?? "Artista desconhecido"}</li>
            <li className="mb-3"><strong>Ano:</strong> {art.year}</li>
            <li className="mb-3"><strong>Técnica:</strong> {art.technique}</li>
            <li className="mb-3">
              <strong>Dimensões:</strong>{" "}
              {art.width} x {art.height}
              {art.depth ? ` x ${art.depth}` : ""} cm
            </li>
            <li className="mb-5">{art.description}</li>
          </ul>


          <a href={`https://wa.me/5581997704302?text=${message}`} target="_blank">
            <Button>Adquirir</Button>
          </a>

        </div>
      </div>

      <div className="mt-25">
        <button
          onClick={() => setOpen(!open)}
          className="w-full p-3 text-md flex items-center justify-between rounded-md hover:cursor-pointer hover:bg-gray-100 md:text-lg"
        >
          <div className="flex gap-2 md:gap-3"><Info /> Saiba mais sobre o autor</div>

          <ChevronDown
            className={`
        transition-transform duration-300
        ${open ? "rotate-180" : ""}
      `}
          />
        </button>

        <div
          className={`
      overflow-hidden transition-all duration-500 ease-in-out
      ${open ? "max-h-full opacity-100" : "max-h-0 opacity-0"}
    `}
        >
          <p className="p-5 text-gray-800 rounded-md">
            {art.arts_artist_id_fkey?.bio}
          </p>
        </div>
      </div>

    </div>
  )
}
