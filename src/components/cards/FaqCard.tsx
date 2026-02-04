export function FaqCard() {
  return (
    <div className="mt-20 bg-gray-100 p-5 rounded-md">
      <h4 className="text-2xl border-b border-gray-300 mb-2 pb-2">FAQ</h4>
      <div className="flex flex-col gap-3">
        <details className="">
          <summary>As obras são originais?</summary>
          <p>Sim. Todas as obras acompanham certificado de autenticidade.</p>
        </details>
        <details className="">
          <summary>Como a obra é enviada?</summary>
          <p>Utilizamos embalagem especializada para transporte de arte, com proteção reforçada.</p>
        </details>
        <details>
          <summary>A obra vem assinada?</summary>
          <p>Sim, todas as obras possuem assinatura ou identifiação oficial do artista.</p>
        </details>

      </div>
    </div>
  )
}