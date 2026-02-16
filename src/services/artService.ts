import { supabase } from "../lib/supabase"

export async function getAllArts() {
  return supabase
    .from("arts")
    .select(`*, art_images:art_images_art_id_fkey (*), arts_artist_id_fkey(*)`)
    .order("created_at", { ascending: false })
}

export async function getCarouselArts() {
  return supabase
    .from("arts")
    .select(`*, art_images:art_images_art_id_fkey (*), arts_artist_id_fkey(*)`)
    .eq("carousel", true)
}

export async function getArtBySlug(slug: string) {
  return supabase
    .from("arts")
    .select(`*, art_images:art_images_art_id_fkey (*), arts_artist_id_fkey(*)`)
    .eq("slug", slug)
    .single()
}


{ /* único lugar que acessa supabase = queries*/}