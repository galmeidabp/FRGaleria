import type { Art } from "../../types/art"
import { Link } from "react-router-dom"
import { Button } from "../details/Button"
import { useEffect, useState } from "react"

type ArtCardProps = {
  art: Art
}

export function ArtCard({ art }: ArtCardProps) {
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
      <div className="flex flex-col gap-3 mt-5 border-b-2 border-green-900 pb-8">
        <div className="w-72 h-72 flex items-center justify-center">
          <img src={art.image_url} alt={art.title} className="w-full h-full object-contain" />
        </div>

        <div>
          <h3 className="font-semibold text-lg md:text-3xl">{art.title}</h3>

          <ul className="text-sm mb-5 lg:text-lg">
            <li>{art.arts_artist_id_fkey?.name}</li>
            <li><strong>Ano:</strong> {art.year}</li>
            <li><strong>Técnica:</strong> {art.technique}</li>
            <li>
              <strong>Dimensões:</strong>{" "}
              {art.width} x {art.height}
              {art.depth ? ` x ${art.depth}` : ""} cm
            </li>
            <li><strong>Assinado:</strong> {art.signed}</li>
            <li><button onClick={() => setOpen(true)} className="text-green-900 underline cursor-pointer hover:text-green-900/70">Biografia do autor</button></li>
          </ul>

          


          <Link to={`/obras/${art.slug}`}>
            <Button variant="secondary">Mais informações</Button>
          </Link>
        </div>
      </div>



      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60"
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
    </>
  )
}
