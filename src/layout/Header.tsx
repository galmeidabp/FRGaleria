import { ChevronRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { LinkHeaders } from "../components/details/LinksHeader";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  function toggleMenu() {
    setOpenMenu((atualState) => !atualState)
  }

  return (
    <div className="bg-green-900">
      <div className="flex justify-between max-w-2xs gap-3 m-auto items-center py-3 md:max-w-2xl lg:max-w-4xl">

        <a href="/" className="flex gap-3 items-center">
          <img src="/logo.svg" alt="" className="w-12 md:w-16" />
          <p className="text-gradient-gold text-2xl font-italianno md:text-4xl">
            Galeria de Arte
          </p>
        </a>

        <ul className="hidden gap-5 text-lg md:flex">
          <li><LinkHeaders path="/" name="Home" /></li>
          <li><LinkHeaders path="/contact" name="Contato" /></li>
          <li><LinkHeaders path="/info" name="Informações" /></li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Abrir menu"
            aria-expanded={openMenu}
          >
            <Menu size={24} className="text-beige-100" />
          </button>
        </div>

      </div>

      {openMenu && (
        <div className="fixed inset-0 bg-black/60 z-40" onClick={toggleMenu} />
      )}

      <nav
        className={`${openMenu ? "translate-x-0" : "translate-x-full"} 
      fixed right-0 top-0 w-50 h-screen flex flex-col 
      bg-green-900 z-50 transform transition-transform duration-300`}
      >

        <div className="flex justify-between items-start m-3 underline-gold-sm pb-2">
          <a href="/">
            <img src="/logo.svg" alt="" className="w-14" />
            <p className="text-gradient-gold text-2xl font-italianno">
              Galeria de Arte
            </p>
          </a>

          <button
            className="flex items-center justify-center"
            onClick={toggleMenu}
            aria-expanded={openMenu}
          >
            <X size={23} className="text-white" />
          </button>
        </div>

        <ul className="flex flex-col p-5 gap-3">
          <li onClick={toggleMenu} className="underline-gold-sm flex items-center justify-between pb-2">
            <LinkHeaders path="/" name="Home" />
            <ChevronRight className="text-beige-100" size={16} />
          </li>

          <li onClick={toggleMenu} className="underline-gold-sm flex items-center justify-between pb-2">
            <LinkHeaders path="/artists" name="Artistas" />
            <ChevronRight className="text-beige-100" size={16} />
          </li>

          <li onClick={toggleMenu} className="underline-gold-sm flex items-center justify-between pb-2">
            <LinkHeaders path="/contact" name="Contato" />
            <ChevronRight className="text-beige-100" size={16} />
          </li>

          <li onClick={toggleMenu} className="underline-gold-sm flex items-center justify-between pb-2">
            <LinkHeaders path="/info" name="Informações" />
            <ChevronRight className="text-beige-100" size={16} />
          </li>
        </ul>
      </nav>
    </div>
  )

}