import { Button } from "./details/Button";
import { MailCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { contactSchema, type ContactFormData } from "../schema/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

const baseInput =
  "w-full h-10 border rounded-md p-2 outline-none transition-all duration-200 font-inter"

function inputClass(hasError: boolean, disabled?: boolean) {
  if (disabled) {
    return `${baseInput} opacity-50 cursor-not-allowed bg-gray-100`
  }

  if (hasError) {
    return `${baseInput} border-red-600 focus:border-red-600 focus:ring-1 focus:ring-red-200`
  }

  return `${baseInput} border-green-900 focus:border-green-600 focus:ring-1 focus:ring-green-900`
}

export function ContactForm() {


  const navigate = useNavigate()
  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      newsletter: "sim"
    }
  })

  async function onSubmit(data: ContactFormData) {
    try {
      const res = await fetch("https://formspree.io/f/xzddbdlk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })

      if (!res.ok) throw new Error("Erro ao enviar")

      setSuccess(true)
    } catch (err) {
      console.error("Erro ao enviar email", err)
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center">
        <MailCheck className="text-green-900 mb-3" size={38} />
        <h3 className="text-xl font-semibold">Email enviado</h3>
        <p className="mb-5">
          Agradecemos sua mensagem. Em breve retornaremos o contato.
        </p>

        <Button onClick={() => navigate("/")}>
          Continuar
        </Button>
      </div>
    )
  }


  return (
    <form className="grid gap-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1.5">
        <label
          className="block font-inter text-brown-900"
          htmlFor="name"
        >
          Seu Nome
        </label>

        <input
          disabled={isSubmitting}
          className={inputClass(!!errors.name, isSubmitting)}
          id="name"
          {...register("name")}
        />
      </div>

      <div className="flex flex-col gap-y-1.5">
        <label
          className="block font-inter text-brown-900"
          htmlFor="phone"
        >
         Seu Telefone
        </label>

        <input
          id="phone"
          type="tel"
          disabled={isSubmitting}
          className={inputClass(!!errors.phone, isSubmitting)}
          {...register("phone")}
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
          className={inputClass(!!errors.email, isSubmitting)}
          disabled={isSubmitting}
          id="email"
          type="email"
          {...register("email")}
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
          disabled={isSubmitting}
          className={inputClass(!!errors.message, isSubmitting) + " h-32"}
          id="message"
          {...register("message")}
        />
      </div>

      <input type="hidden" {...register("newsletter")} value="nao" />

      <label className="flex gap-2 text-xs lg:text-smz">
        <input type="checkbox" className="outline-none cursor-pointer" value="sim" {...register("newsletter")} />
        Quero receber novidades através do Email e WhatsApp
      </label>



      <div className="flex flex-row-reverse gap-x-6">

        <Button disabled={isSubmitting} type="submit">{isSubmitting ? "Enviando" : "Enviar"}</Button>
      </div>
    </form>
  );
}