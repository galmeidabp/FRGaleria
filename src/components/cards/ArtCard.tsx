export function ArtCard() {
  return (
    <div className="flex flex-col gap-3 mt-5 border-b-2 border-green-900 lg:gap-8">
      <div className="w-72 h-72 flex items-center justify-center md:w-79 md:h-79 lg:w-104 lg:h-104">
        <img src="./gatinho.png" alt="" className="w-auto h-auto max-w-full max-h-full object-contain" />
      </div>
      <div>
        <h3 className="font-inika font-semibold text-lg text-brown-900 md:text-xl lg:text-3xl">Título do Quadro de Gatinho</h3>
        <ul className="text-sm leading-[1.3] text-brown-900 font-inter lg:text-lg">
          <li>Artista Sobrenome</li>
          <li>Ano: 1999</li>
          <li>Técnica: Óleo sobre tela</li>
          <li>Dimensões: 73,7 x 72,1 cm</li>
        </ul>
        <button className="text-green-900 font-inika font-bold bg-transparent border-2 mb-10 border-green-900 rounded-md py-2 px-12 text-lg mt-5 lg:py-4 lg:px-16 lg:text-2xl hover:bg-green-900 hover:text-white hover:cursor-pointer">Adquirir</button>
      </div>
    </div>
  )
}