import gatinho from "../../assets/gatinho.png"

export function CarouselCard() {
  return (
    <div className="flex gap-3 flex-col max-w-2xs m-auto py-10 md:max-w-2xl md:py-18 md:flex-row md:items-center md:gap-10 lg:max-w-4xl">
      <img className="w-72 rounded-md shadow-[0_12px_25px_rgba(0,0,0,0.25)] lg:w-auto" src={gatinho} alt="Imagem de gatinho dormindo em cima de um piano" />

      <div>
        <h1 className="font-inika text-2xl mb-1 text-brown-900 lg:text-4xl">Quadro em destaque </h1>
        <p className="text-brown-900 font-inter hidden font-semibold mt-2 lg:block lg:mb-4 lg:text-lg">Noite Estrelada traduz a visão emocional de Van Gogh sobre o céu noturno, usando pinceladas intensas e movimento quase hipnótico. A obra não busca realismo, mas sim expressar sentimentos profundos, como inquietação e contemplação, transformando a paisagem em algo quase vivo.</p>
        <ul className="text-sm leading-[1.3] text-brown-900 font-inter font-semibold lg:text-md">
          <li>Artista Sobrenome</li>
          <li>Ano: 1999</li>
          <li>Técnica: Óleo sobre tela</li>
          <li>Dimensões: 73,7 x 72,1 cm</li>
        </ul>
        <button className="text-white font-inika bg-green-900 border-2 border-green-900 rounded-md py-3 px-12 text-lg mt-3 hover:bg-transparent hover:text-green-900 hover:font-bold hover:cursor-pointer">Adquirir</button>
      </div>
    </div>
  )
}