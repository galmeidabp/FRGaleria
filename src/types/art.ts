export type ArtImage = {
  url: string
}

export type Artist = {
  id: string
  name: string
  bio?: string
  birth?: number | null
  death?: number | null
}

export type Art = {
  id: string
  title: string
  slug: string
  artist_id: string
  description: string
  image_url: string
  signed: string
  year: string
  width: number
  height: number
  depth: number
  technique: string
  highlights: boolean
  art_images_art_id_fkey?: ArtImage[]
  arts_artist_id_fkey: Artist | null
}
