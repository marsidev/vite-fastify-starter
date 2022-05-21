import type { Server, IncomingMessage, ServerResponse } from 'http'

import fastify, { FastifyInstance } from 'fastify'
import statics from '@fastify/static'
import path from 'path'
import hello from '@controllers/hello'

const PORT: any = process.env.PORT || 3001
const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify()

server.register(statics, {
  root: path.join(__dirname, '../../../public')
})

server.register(hello, { prefix: '/api/hello' })

const start = async () => {
  try {
    await server.listen(PORT)
    console.log(`Server listening on port ${PORT}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
