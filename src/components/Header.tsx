export function Header() {
  return (
    <div className="bg-green-900">
      <div className="flex justify-center max-w-md m-auto items-center py-5 md:max-w-3xl md:justify-between md:px-5 lg:max-w-6xl">
        <div className="flex gap-3 items-center">
          <img src="/logo.svg" alt="" className="w-16" />
          <p className="text-gradient-gold text-4xl font-italianno">Galeria de Arte</p>
        </div>

        <ul className="hidden gap-5 text-l font-inter md:flex">
          <li className="beige-100 relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,#dcc285,#be8e34,#e2c16f,#a1843d)] after:transition-transform after:duration-300 focus:outline-none  hover:after:scale-x-100 focus:after:scale-x-100"><a href="#">Home</a></li>
          <li className="beige-100 relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,#dcc285,#be8e34,#e2c16f,#a1843d)] after:transition-transform after:duration-300 focus:outline-none  hover:after:scale-x-100 focus:after:scale-x-100"><a href="#">Contato</a></li>
          <li className="beige-100 relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[linear-gradient(90deg,#dcc285,#be8e34,#e2c16f,#a1843d)] after:transition-transform after:duration-300 focus:outline-none  hover:after:scale-x-100 focus:after:scale-x-100"><a href="#">Quem somos</a></li>
        </ul>
      </div>
    </div> 
  )
}