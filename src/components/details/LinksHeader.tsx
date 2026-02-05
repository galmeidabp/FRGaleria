export interface LinkProps {
  path: string,
  name: string,
}

export function LinkHeaders({ path, name }: LinkProps) {
  return (
    <a className="text-beige-100 relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full md:after:origin-left md:after:scale-x-0 md:after:bg-[linear-gradient(90deg,#dcc285,#be8e34,#e2c16f,#a1843d)] md:after:transition-transform md:after:duration-300 focus:outline-none  hover:after:scale-x-100 focus:after:scale-x-100 hover:text-yellow-100" href={path}>
      {name}
    </a>
  )
}