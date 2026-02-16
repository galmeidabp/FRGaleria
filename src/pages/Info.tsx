import { MainTitle } from "../components/details/MainTitle";

export function Info() {
  return (
    <>
      <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
        <MainTitle title="Sobre nós" />

        <div className="flex flex-col gap-3 text-sm text-brown-900 font-inter md:text-md">
          <p>A Galeria de Arte FR nasceu do propósito de aproximar artistas, colecionadores e instituições por meio da arte, preservando a integridade de cada obra.</p>
          <p>Nossa missão é atender com rigor e respeito todos que se relacionam com a arte: clientes, fornecedores e apreciadores. Mantemos um compromisso claro com a ética, reconhecendo a criatividade e a autenticidade como fundamentos indispensáveis para o desenvolvimento artístico. Cada obra que recebemos carrega uma história, e nosso papel é garantir que ela seja apresentada com fidelidade, cuidado e a devida valorização.</p>
          <p>Enxergamos a galeria como um ponto de encontro entre tradição e contemporaneidade, onde o público encontra obras que dialogam com o passado e impulsionam novos olhares. Acreditamos no poder transformador da expressão artística e, por isso, atuamos como ponte para que artistas possam expandir fronteiras e para que colecionadores encontrem obras que representem verdade, propósito e permanência.</p>
        </div>

        <h2 className="underline-gold text-xl mt-14 mb-5">Inscrição de artistas</h2>
        <div className="flex flex-col gap-3 text-sm text-brown-900 font-inter md:text-md">
          <p>Recebemos propostas de artistas que desejam apresentar seus trabalhos em nosso espaço expositivo. O processo é simples e transparente: basta entrar em contato por nossos canais oficiais de comunicação e informar seu interesse em submeter obras para avaliação.</p>
          <p>Após o primeiro contato, nossa equipe orientará sobre os próximos passos. Cada proposta é analisada com atenção, considerando autenticidade, qualidade artística e alinhamento com a identidade curatorial da galeria.</p>
          <p>Oferecemos um atendimento claro e objetivo, garantindo que cada artista tenha uma experiência séria, organizada e compatível com a relevância que damos à arte e à trajetória de quem a produz.</p>
        </div>
      </div>
    </>
  )
}