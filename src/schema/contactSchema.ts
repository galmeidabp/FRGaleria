import { z } from "zod"

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Nome deve ter no mínimo 2 caracteres")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "Nome não pode conter números ou símbolos"),

  email: z
    .string()
    .email("Email inválido"),

  message: z
    .string()
    .min(5, "Mensagem muito curta"),
})

export type ContactFormData = z.infer<typeof contactSchema>
