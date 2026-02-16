import { useEffect, useState } from "react"
import type { Art } from "../../types/art"

type DetailsCardProps = {
  art: Art
}

export function DetailsCard({ art }: DetailsCardProps) {
  const images = [
    art.image_url,
    ...(art.art_images_art_id_fkey ?? []).map(img => img.url)
  ].filter(Boolean)
  
  const [current, setCurrent] = useState(0)
  const [zoomOpen, setZoomOpen] = useState(false)
  const [scale, setScale] = useState(1)

  function next() {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  function prev() {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  function handleWheel(e: WheelEvent) {
    e.preventDefault()
    setScale((prev) => {
      const next = prev - e.deltaY * 0.001
      return Math.min(Math.max(next, 1), 3)
    })
  }

  useEffect(() => {
    if (!zoomOpen) return

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [zoomOpen])

  return (
    <div className="w-full">
      {/* MAIN IMAGE */}
      <div className="relative w-[288px] h-[288px] group flex justify-center m-auto overflow-hidden md:w-115 md:h-100">
        <img
          src={images[current]}
          onClick={() => {
            setZoomOpen(true)
            setScale(1)
          }}
          className="object-contain max-h-full max-w-full cursor-zoom-in transition-all duration-500"
        />

        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black/60 text-white rounded-full w-10 h-10">❮</button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-black/60 text-white rounded-full w-10 h-10">❯</button>
      </div>

      {/* INDICATORS */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full ${i === current ? "bg-brown-900 scale-125" : "bg-brown-400"}`}
          />
        ))}
      </div>

      {/* THUMBS */}
      <div className="flex gap-2 justify-center mt-4">
        {images.map((img, i) => (
          <img
            key={img}
            src={img}
            onClick={() => setCurrent(i)}
            className={`w-16 h-16 object-cover cursor-pointer rounded-md ${i === current ? "ring-2 ring-brown-900 scale-105" : "opacity-70"}`}
          />
        ))}
      </div>

      {/* ZOOM */}
      {zoomOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center" onClick={() => setZoomOpen(false)}>
          <img
            src={images[current]}
            style={{ transform: `scale(${scale})` }}
            className="max-w-[90%] max-h-[90%] object-contain cursor-zoom-out"
          />
        </div>
      )}
    </div>
  )
}
