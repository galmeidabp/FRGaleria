import { Breadcrumbs, Typography, Link as MUILink } from "@mui/material"
import { Link as RouterLink, useLocation } from "react-router-dom"

/* dicionário para acentos */
const dictionary: Record<string, string> = {
  info: "Informações",
  contact: "Contato",
}

/* formatador */
const formatLabel = (segment: string) => {
  const clean = decodeURIComponent(segment).toLowerCase()

  if (dictionary[clean]) return dictionary[clean]

  return clean
    .replace(/-/g, " ")
    .replace(/\b\w/g, l => l.toUpperCase())
}

export function Breadcrumb() {
  const location = useLocation()

  const pathnames = location.pathname
    .split("/")
    .filter(Boolean)

  if (pathnames.length === 0) return null // não mostrar na home

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ py: 2 }}>
      {/* Home */}
      <MUILink
        component={RouterLink}
        to="/"
        underline="hover"
        color="inherit"
      >
        Home
      </MUILink>

      {pathnames.map((segment, index) => {
        const path = "/" + pathnames.slice(0, index + 1).join("/")
        const isLast = index === pathnames.length - 1

        return isLast ? (
          <Typography color="text.primary" key={path}>
            {formatLabel(segment)}
          </Typography>
        ) : (
          <MUILink
            key={path}
            component={RouterLink}
            to={path}
            underline="hover"
            color="inherit"
          >
            {formatLabel(segment)}
          </MUILink>
        )
      })}
    </Breadcrumbs>
  )
}
