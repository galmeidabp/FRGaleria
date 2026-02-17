import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter no mínimo 2 caracteres")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "Nome não pode conter números ou símbolos"),

  phone: z
    .string()
    .min(9, "Telefone inválido")
    .regex(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Formato inválido"),

  email: z
    .string()
    .email("Email inválido"),

  message: z
    .string()
    .min(5, "Mensagem muito curta"),

  newsletter: z.enum(["sim", "nao"]).optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
