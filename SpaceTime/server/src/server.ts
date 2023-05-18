import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

const app = fastify()
const prisma = new PrismaClient()

// HTTP METODO: POST, PATCH, DELETE, PUT, GET
app.get('/users', async () => {
const users = await prisma.user.findMany()

    return users
})

//API RESTFull
app.listen({
    port: 3333,
}).then(() => {
    console.log(' 🚀 HTTP server running on http://localhost:3333')
})