import { Link } from "react-router-dom"
import { Button } from "../details/Button"
import type { Art } from "../../types/art"
import { useEffect, useState } from "react"

type CarouselCardProps = {
  art: Art
}

export function CarouselCard({ art }: CarouselCardProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])
  return (
    <>
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${art.image_url})` }}
      >

        <div className="absolute inset-0 bg-[#BCA086]/80 pointer-events-none z-0"></div>

        <div className="relative z-20 flex h-full items-center justify-center">


          <div className="flex gap-3 flex-col max-w-2xs m-auto py-10 md:max-w-2xl md:py-18 md:flex-row md:items-center md:gap-10 lg:max-w-4xl">
            <div className="w-72 h-72 flex shrink-0 items-center justify-center lg:w-88 lg:h-88">
              <img className="max-w-full max-h-full object-contain rounded-md shadow-[0_14px_25px_rgba(0,0,0,0.25)]" src={art.image_url} alt={art.title} />
            </div>

            <div>
              <h1 className="text-2xl mb-1 text-brown-900 lg:text-4xl">{art.arts_artist_id_fkey?.name}</h1>
              <p className="text-xl text-brown-900">{art.title}</p>
              <p className="text-brown-900 font-inter font-semibold my-2 lg:block lg:mb-4 lg:text-lg">{art.description}</p>
              <ul className="text-sm leading-[1.3] mb-5 text-brown-900 font-inter font-semibold lg:text-md">
                <li><strong>Ano: </strong>{art.year}</li>
                <li><strong>Técnica: </strong> {art.technique}</li>
                <li>
                  <strong>Dimensões:</strong>{" "}
                  {art.width} x {art.height}
                  {art.depth ? ` x ${art.depth}` : ""} cm
                </li>
                <li><strong>Assinado:</strong> {art.signed}</li>
                <li><button onClick={() => setOpen(true)} className="text-green-900 underline cursor-pointer hover:text-green-900/70">Biografia do autor</button></li>
              </ul>
              <Link to={`/obras/${art.slug}`}>
                <Button>Mais informações</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <div className="relative z-50 bg-white w-[90%] max-w-2xl max-h-[75vh] md:max-h-[40vh] rounded-xl shadow-lg p-6 flex flex-col">
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
    </>
  )
}