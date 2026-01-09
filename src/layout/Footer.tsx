import { Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <div className="bg-green-900 py-12 mt-15">
      <div className="beige-100 grid grid-cols-1 max-w-2xs m-auto md:max-w-2xl md:grid-cols-2">

        <div className="flex flex-col items-center justify-center border-r-0 border-b pb-5 mb-5 md:border-b-0 md:border-r">
          <img src="./logo.svg" alt="" className="w-16 lg:w-18" />
          <p className="text-gradient-gold text-3xl font-italianno lg:text-4xl">Galeria de Arte</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-1">
          <h4 className="text-gradient-gold text-4xl font-italianno lg:text-4xl">Nos contate</h4>
          <a className="flex gap-2 items-center text-sm hover:text-yellow-100" href="#"><Mail size={18} /> frgaleriadearte@gmail.com</a>
          <a className="flex gap-2 items-center text-sm hover:text-yellow-100" href="#"><Phone size={18} /> 81 9999 9999</a>
          <a className="flex gap-2 items-center text-sm hover:text-yellow-100" href="#"><Instagram size={18} /> @frgaleriadearte</a>
        </div>
 
      </div>
      <p className="flex max-w-2xs m-auto items-center justify-center beige-100 text-xs mt-10 md:max-w-2xl">&copy; 2026 FR Galeria de Arte. Todos os direitos reservados.</p>
    </div>
  )
}