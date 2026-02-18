import { supabase } from "../lib/supabase"

export async function getArts(search?: string) {
  let query = supabase
    .from("arts")
    .select(
      `*,
       art_images:art_images_art_id_fkey (*),
       arts_artist_id_fkey(*)
      `
    )
    .order("created_at", { ascending: true });

  if (search && search.trim() !== "") {
    query = query.or(
      `title.ilike.%${search}%,author.ilike.%${search}%`
    );
  }

  return await query;
}

export async function getCarouselArts() {
  return supabase
    .from("arts")
    .select(
      `*,
       art_images:art_images_art_id_fkey (*),
       arts_artist_id_fkey(*)
      `
    )
    .eq("carousel", true)
    .order("carousel_order", { ascending: true, nullsFirst: false });
}


export async function getArtBySlug(slug: string) {
  return supabase
    .from("arts")
    .select(
      `*,
       art_images:art_images_art_id_fkey (*),
       arts_artist_id_fkey(*)
      `
    )
    .eq("slug", slug)
    .single();
}



{ /* único lugar que acessa supabase = queries*/ }