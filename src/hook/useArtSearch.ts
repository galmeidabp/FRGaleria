import { useState, useMemo } from "react";
import type { Art } from "../types/art";

export function useArtSearch(arts: Art[]) {
  const [query, setQuery] = useState("");

  function normalize(str: string) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  const filteredArts = useMemo(() => {
    const q = normalize(query);

    return arts.filter((art) => {
      const title = normalize(art.title);
      const author = normalize(art.arts_artist_id_fkey?.name ?? "");

      return title.includes(q) || author.includes(q);
    });
  }, [arts, query]);

  return { query, setQuery, filteredArts };
}

