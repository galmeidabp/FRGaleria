import { useParams } from "react-router-dom"
import { useArts } from "../hook/useArts"
import { DetailsCard } from "./cards/DetailsCard"
import { Button } from "./details/Button"
import { ErrorPage } from "../errors/ErrorPage"
import { DetailsCardSkeleton } from "../skeletons/DetailsCardSkeleton"
import { useEffect, useState } from "react"
import { formatPrice } from "../utils/formatPrice"

export function ArtDetails() {
  const { slug } = useParams<{ slug: string }>()
  const { arts, loading } = useArts()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

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
    <div className="max-w-2xs m-auto my-16 md:max-w-2xl lg:max-w-4xl">
      <div className="grid grid-cols-1 text-brown-900 font-inter lg:grid-cols-[2fr_1.6fr]">

        <DetailsCard art={art} />

        <div className="p-0 mt-10 rounded-md md:p-10 md:mt-0">
          <h3 className="font-semibold text-lg mb-5 md:text-3xl">{art.title}</h3>

          <ul className="text-sm mb-3 lg:text-lg">
            <li><button className="mb-3 underline text-green-900 cursor-pointer" onClick={() => setOpen(true)}>{art.arts_artist_id_fkey?.name ?? "Artista desconhecido"}</button></li>

            <li className="mb-3"><strong>Ano:</strong> {art.year}</li>
            <li className="mb-3"><strong>Técnica:</strong> {art.technique}</li>
            <li className="mb-3">
              <strong>Dimensões:</strong>{" "}
              {art.width} x {art.height}
              {art.depth ? ` x ${art.depth}` : ""} cm
            </li>
            <li className="mb-3">{art.description}</li>
          </ul>

          <p className="mb-3 text-2xl font-semibold">{formatPrice(art.price)}</p>

          <a href={`https://wa.me/558191313343?text=${message}`} target="_blank">
            <Button>Adquirir</Button>
          </a>

        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60 "
            onClick={() => setOpen(false)}
          />

          <div className="relative z-50 bg-white w-[90%] max-w-2xl max-h-[80vh] rounded-xl shadow-lg p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col gap-0 text-2xl font-semibold md:flex-row md:gap-3">
                <h2>
                  {art.arts_artist_id_fkey?.name}
                </h2>
                {(art.arts_artist_id_fkey?.birth || art.arts_artist_id_fkey?.death) && (
                  <p className="text-xl">
                    (
                    {art.arts_artist_id_fkey?.birth}
                    {art.arts_artist_id_fkey?.death
                      ? ` — ${art.arts_artist_id_fkey.death}`
                      : ""}
                    )
                  </p>
                )}
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-black text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto pr-2">
              <p className="whitespace-pre-line text-gray-700">
                {art.arts_artist_id_fkey?.bio || "Biografia não disponível."}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
