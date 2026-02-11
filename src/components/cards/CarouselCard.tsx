import { Link } from "react-router-dom"
import { Button } from "../details/Button"
import type { Art } from "../../types/art"

type CarouselCardProps = {
  art: Art
}

export function CarouselCard({art}: CarouselCardProps ) {
  return (
    <div
      className="relative w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${art.image_url})` }}
    >

      <div className="absolute inset-0 bg-[#BCA086]/80"></div>

      <div className="relative z-10 flex h-full items-center justify-center">


        <div className="flex gap-3 flex-col max-w-2xs m-auto py-10 md:max-w-2xl md:py-18 md:flex-row md:items-center md:gap-10 lg:max-w-4xl">
          <div className="w-72 h-72 flex shrink-0 items-center justify-center lg:w-88 lg:h-88">
            <img className="max-w-full max-h-full object-contain rounded-md shadow-[0_14px_25px_rgba(0,0,0,0.25)]" src={art.image_url} alt={art.title} />
          </div>

          <div>
            <h1 className="text-2xl mb-1 text-brown-900 lg:text-4xl">{art.arts_artist_id_fkey?.name}</h1>
            <p className="text-xl text-brown-900">{art.title}</p>
            <p className="text-brown-900 font-inter hidden font-semibold mt-2 lg:block lg:mb-4 lg:text-lg">{art.description}</p>
            <ul className="text-sm leading-[1.3] mb-5 text-brown-900 font-inter font-semibold lg:text-md">
              <li><strong>Ano: </strong>{art.year}</li>
              <li><strong>Técnica: </strong> {art.technique}</li>
              <li><strong>Dimensões: </strong>{art.width} x {art.height} cm</li>
            </ul>
            <Link to={`/obras/${art.slug}`}>
              <Button>Adquirir</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}