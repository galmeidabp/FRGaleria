import { ArtCard } from "./cards/ArtCard";

export function Art() {
  return (
    <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
      <h2 className="font-italianno text-6xl text-brown-900 ">Obras</h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:gap-16">
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
        <ArtCard />
      </div>
    </div>
  )
}