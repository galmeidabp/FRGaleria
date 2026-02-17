import { Instagram, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <div className="bg-green-900 py-12 mt-15">
      <div className="text-beige-100 grid grid-cols-1 items-center max-w-2xs m-auto md:max-w-4xl md:grid-cols-3">

        <div className="flex flex-col items-center justify-center pb-3 mb-3 border-b md:pb-0 md:mb-0 md:border-b-0">
          <img src="./logo.svg" alt="" className="w-16 lg:w-18" />
          <p className="text-gradient-gold text-3xl font-italianno lg:text-4xl">Galeria de Arte</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 md:border-x">
          <h4 className="text-gradient-gold text-4xl font-italianno lg:text-4xl">Contato</h4>
          <a className="flex gap-2 items-center text-xs md:text-sm hover:text-yellow-100" href="mailto:frgaleriadearte@gmail.com?subject=Contato pelo site"><Mail size={18} /> frgaleriadearte@gmail.com</a>
          <a className="flex gap-2 items-center text-xs md:text-sm hover:text-yellow-100" href="https://wa.me/5581997704302?text=Olá,%20vim%20pelo%20site" target="_blank" rel="noopener noreferrer"><Phone size={18} /> 81 9999 9999</a>
          <a className="flex gap-2 items-center text-xs md:text-sm hover:text-yellow-100" href="https://www.instagram.com/frgaleriadearte/" target="_blank" rel="noopener noreferrer"><Instagram size={18} /> @frgaleriadearte</a>
        </div>

        <div className="flex flex-col items-center justify-center gap-1 mt-5">
          <h4 className="text-gradient-gold text-4xl font-italianno lg:text-4xl">Políticas</h4>
          <a className="flex gap-2 items-center text-xs md:text-sm hover:text-yellow-100" href="/privacyterms">Política de Privacidade</a>
          <a className="flex gap-2 items-center text-xs md:text-sm hover:text-yellow-100" href="/termsofuse">Termos de Uso</a>
          <a className="flex gap-2 items-center text-xs md:text-sm hover:text-yellow-100" href="/cookiepolicy">Política de Cookies</a>
          <a className="flex gap-2 items-center text-xs md:text-sm hover:text-yellow-100" href="/copyright">Direitos Autorais</a>
        </div>
 
      </div>
      <p className="flex max-w-2xs m-auto items-center justify-center text-beige-100 text-[10px] mt-10 md:max-w-2xl">&copy; 2026 FR Galeria de Arte. Todos os direitos reservados.</p>
    </div>
  )
}