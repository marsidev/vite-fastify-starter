import type { Server, IncomingMessage, ServerResponse } from 'http'

import 'dotenv/config'
import fastify, { FastifyInstance } from 'fastify'
import statics from '@fastify/static'
import path from 'path'
import hello from '@controllers/hello'

const { PORT = 3001, HOST = '0.0.0.0' } = process.env
const server: FastifyInstance<Server, IncomingMessage, ServerResponse> = fastify()

server.register(statics, {
  root: path.join(__dirname, '../../../public')
})

server.register(hello, { prefix: '/api/hello' })

const start = async () => {
  try {
    await server.listen(PORT, HOST)
    console.log(`Server listening on port ${PORT}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
