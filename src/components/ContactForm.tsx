import { useForm } from "@formspree/react";
import { Button } from "./details/Button";
import { MailCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ContactForm() {
  const [state, handleSubmit] = useForm("xzddbdlk")
  const navigate = useNavigate()
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center">
        <MailCheck className="text-green-900 mb-3" size={38} />
        <h3 className="text-xl font-semibold">Email enviado</h3>
        <p className="mb-5">Agradecemos sua mensagem. Em breve retornaremos o contato.</p>

        <Button onClick={() => navigate("/")}>Voltar para galeria</Button>
      </div>
    )
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
          className="h-10 border p-2 border-green-900 rounded-md"
          id="name"
          name="name"
          required
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
          className="h-10 border p-2 border-green-900 rounded-md"
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
          className="h-30 border p-2 resize-none border-green-900 rounded-md"
          id="message"
          name="message"
          required
        />
      </div>


      <div className="flex flex-row-reverse gap-x-6">
        <Button disabled={state.submitting} type="submit">Enviar</Button>
      </div>
    </form>
  );
}