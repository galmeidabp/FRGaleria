import { useForm } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xzddbdlk")
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <form className="grid gap-y-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-1.5">
        <label
          className="block font-inter text-brown-900"
          htmlFor="name"
        >
          Seu Nome
        </label>
        <input
          className="h-10 border border-green-900 rounded-md"
          id="name"

        />
      </div>
      <div className="flex flex-col gap-y-1.5">
        <label
          className="block font-inter text-brown-900"
          htmlFor="email"
        >
          Seu Email
        </label>
        <input
          className="h-10 border border-green-900 rounded-md"
          id="email"
          name="email"
          required
        />
      </div>
      <div className="flex flex-col gap-y-1.5">
        <label
          className="block font-inter text-brown-900"
          htmlFor="message"
        >
          Escreva a sua mensagem
        </label>
        <textarea
          className="h-30 border resize-none border-green-900 rounded-md"
          id="message"
          name="message"
        />
      </div>
      <div className="flex flex-row-reverse gap-x-6">
        <button
          className="flex items-center justify-center bg-green-900 h-10 w-30 text-white font-inika font-bold border-2 border-green-900 rounded-md py-2 px-12 text-lg lg:py-4 lg:px-16 lg:text-lg hover:bg-transparent hover:text-green-900e hover:cursor-pointer"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}