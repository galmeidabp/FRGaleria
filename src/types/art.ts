export type ArtImage = {
  url: string
}

export type Art = {
  id: string
  title: string
  slug: string
  artist: string
  description: string
  image_url: string
  signed: string
  year: string
  width: number
  height: number
  technique: string
  highlights: boolean
  art_images: ArtImage[]
}
