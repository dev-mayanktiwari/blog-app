import { z } from "@hono/zod-openapi"

export const userSchema = z.object({
    email : z.string().email(),
    password : z.string().min(8),
    name : z.string(),
    username : z.string(),
})

