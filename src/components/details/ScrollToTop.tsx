import { useEffect } from "react"
import { useLocation } from "react-router-dom"

export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // 1 — tenta rolar o window (páginas normais)
    window.scrollTo(0, 0)

    // 2 — tenta rolar o body
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // 3 — identifica automaticamente um container que esteja scrollando
    const scrollable = [...document.querySelectorAll("*")].find(
      (el) => el.scrollTop > 0
    )

    if (scrollable) {
      scrollable.scrollTop = 0
    }
  }, [pathname])

  return null
}
