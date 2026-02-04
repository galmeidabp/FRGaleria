import type { Art } from "../../types/art"
import { Link } from "react-router-dom"
import { Button } from "../details/Button"

type ArtCardProps = {
  art: Art
}

export function ArtCard({ art }: ArtCardProps) {
  return (
    <div className="flex flex-col gap-3 mt-5 border-b-2 border-green-900 pb-8">
      <div className="w-72 h-72 flex items-center justify-center">
        <img src={art.image_url} alt={art.title} className="w-full h-full object-contain" />
      </div>

      <div>
        <h3 className="font-semibold text-lg md:text-3xl">{art.title}</h3>

        <ul className="text-sm mb-5 lg:text-lg">
          <li className="underline">{art.artist}</li>
          <li><strong>Ano:</strong> {art.year}</li>
          <li><strong>Técnica:</strong> {art.technique}</li>
          <li><strong>Dimensões:</strong> {art.width} x {art.height} cm</li>
        </ul>

        <Link to={`/obras/${art.slug}`}>
          <Button variant="secondary">Adquirir</Button>
        </Link>
      </div>
    </div>
  )
}
