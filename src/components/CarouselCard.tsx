import gatinho from "../assets/gatinho.png"

export function CarouselCard() {
  return (
    <div className="flex gap-10 max-w-4xl m-auto items-center py-18">
      <img className="rounded-md shadow-[0_12px_25px_rgba(0,0,0,0.25)]" src={gatinho} alt="Imagem de gatinho dormindo em cima de um piano" />

      <div>
        <h1 className="font-italianno text-5xl text-brown-900">Quadro em destaque</h1>
        <p className="text-brown-900 font-inter font-semibold mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, excepturi enim veritatis aliquam quod accusantium nulla. Sequi assumenda non, voluptate, voluptas, esse dignissimos id at possimus aperiam corrupti laudantium iusto. Lorem ipsum dolor sit am</p>
        <button className="text-white font-inter bg-green-900 rounded-md py-3 px-15 text-lg mt-5">Adquirir</button>
      </div>
    </div>
  )
}