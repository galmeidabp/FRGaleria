import { Button } from "../components/details/Button";

export function ErrorPage() {
  return (
    <div className="max-w-2xs m-auto mt-16 md:max-w-2xl lg:max-w-4xl">
      <h1 className="text-4xl font-bold mb-3">Ops!</h1>
      <h2 className="text-2xl font-bold">404 Página não encontrada</h2>
      <p className="mb-5">Desculpe, a página solicitada não existe ou foi removida!</p>
      <a href="/"><Button >Voltar para o início</Button></a>
    </div>
  );
}
