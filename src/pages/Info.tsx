import { MainTitle } from "../components/details/MainTitle";

export function Info() {
  return (
    <>
      <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
        <MainTitle title="Sobre nós" />

        <div className="flex flex-col gap-3 text-sm text-brown-900 font-inter md:text-md">
          <p>A FR Galeria de Arte nasceu com o propósito de aproximar artistas, colecionadores e instituições por meio das obras de arte, de forma segura, acessível e transparente.</p>
          <p>Nossa missão é atender as necessidades dos clientes, fornecedores e apreciadores de arte, com respeito e ética, valorizando a criatividade e autenticidade dos artistas e das obras de arte.</p>
          <p>Enxergamos a galeria como um ponto de encontro entre tradição e contemporaneidade, onde o público encontra obras que dialogam com o passado e impulsionam novos olhares. Acreditamos no poder transformador da expressão artística e, por isso, atuamos como ponte para que artistas possam expandir fronteiras e para que colecionadores encontrem obras que atendam seus propósitos.</p>
        </div>

        <h2 className="underline-gold text-xl mt-14 mb-5">Inscrição de artistas</h2>
        <div className="flex flex-col gap-3 text-sm text-brown-900 font-inter md:text-md">
          <p>Recebemos propostas de artistas que desejam apresentar seus trabalhos em nosso espaço expositivo. O processo é simples e transparente: basta entrar em contato por nossos canais oficiais de comunicação e informar seu interesse em submeter obras.</p>
          <p>Após o primeiro contato, nossa equipe orientará sobre os próximos passos. Cada proposta é analisada com atenção, considerando autenticidade, qualidade artística e alinhamento com a identidade curatorial da galeria.</p>
          <p>Oferecemos um atendimento claro e objetivo, garantindo que cada artista tenha uma experiência séria, organizada e compatível com a relevância que damos à arte e à trajetória de quem a produz.</p>
        </div>
      </div>
    </>
  )
}