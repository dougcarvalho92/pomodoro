import { z } from "zod";

export const TaskSchema = z.object({
  value: z
    .string()
    .trim()
    .nonempty()
    .min(3, { message: "Precisa de no mínimo 3 caracteres válidos!" }),
});
