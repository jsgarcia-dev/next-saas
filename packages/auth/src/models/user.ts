import { z } from 'zod'

import { roleSchema } from '../roles'

export const userSchema = z.object({
  role: roleSchema,
})

export type USer = z.infer<typeof userSchema>
