import { supabase } from "../lib/supabase"

export async function getAllArts() {
  return supabase
    .from("arts")
    .select(`*, art_images (*)`)
    .order("created_at", { ascending: false })
}

export async function getCarouselArts() {
  return supabase
    .from("arts")
    .select(`*, art_images (*)`)
    .eq("carousel", true)
}

export async function getArtBySlug(slug: string) {
  return supabase
    .from("arts")
    .select(`*, art_images (*)`)
    .eq("slug", slug)
    .single()
}


{ /* único lugar que acessa supabase = queries*/}