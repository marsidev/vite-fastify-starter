import type { HelloMessage } from '@types'
import type { FastifyPluginAsync } from 'fastify'
import { MESSAGE } from '@lib/config'

export const hello: FastifyPluginAsync = async (server, opts) => {
  server.get('/hello', opts, async (_request, reply) => {
    const data: HelloMessage = {
      hello: MESSAGE || 'fastify'
    }
    return reply.send(data)
  })
}

export default hello
