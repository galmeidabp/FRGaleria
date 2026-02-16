import { Instagram, Mail, Phone } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { MainTitle } from "../components/details/MainTitle";

export function Contact() {
  return (
    <>
      <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <MainTitle title="Nos contate" />
            <p className="text-sm text-gray-500 mb-5">Tem alguma dúvida, proposta ou ideia para compartilhar? Estamos prontos para te ouvir.</p>
            <ul className="flex flex-col text-sm gap-3 text-gray-800 lg:text-md">
              <li><a className="flex gap-2 items-center hover:text-green-900" href="mailto:frgaleriadearte@gmail.com?subject=Contato pelo site"><Mail className="text-beige-100" /> frgaleriadearte@gmail.com</a></li>
              <li><a className="flex gap-2 items-center hover:text-green-900" href="https://wa.me/5581997704302?text=Olá,%20vim%20pelo%20site" target="_blank" rel="noopener noreferrer"><Phone className="text-beige-100" /> +55 81 99770 4302</a></li>
              <li><a className="flex gap-2 items-center hover:text-green-900" href="https://www.instagram.com/frgaleriadearte/" target="_blank" rel="noopener noreferrer"><Instagram className="text-beige-100" /> @frgaleriadearte</a></li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  )
}