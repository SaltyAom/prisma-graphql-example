import { Prisma, PrismaClient } from '@prisma/client'

export interface Context {
	prisma: PrismaClient<Prisma.PrismaClientOptions, never>
}

export default Context