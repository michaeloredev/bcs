import { PrismaClient } from '@prisma/client'

declare global {
  // Allow global prisma in dev to avoid hot-reload instantiation
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
