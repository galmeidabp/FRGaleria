import type { ComponentType } from "react"

export interface LinkProps {
  path: string,
  name: string,
  Icon?: ComponentType<{ className?: string }>
}

export function LinkHeaders({ path, name, Icon }: LinkProps) {
  return (
    <a className="text-beige-100 relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,#dcc285,#be8e34,#e2c16f,#a1843d)] after:transition-transform after:duration-300 focus:outline-none  hover:after:scale-x-100 focus:after:scale-x-100 hover:text-yellow-100" href={path}>
      {Icon && <Icon className="h-4 w-4" />}
      {name}
    </a>
  )
}