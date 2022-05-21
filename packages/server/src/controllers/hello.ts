import { HelloMessage } from '../types'

import { FastifyInstance, FastifyPluginOptions } from 'fastify'
const { MESSAGE } = process.env

const router = async (server: FastifyInstance, opts: FastifyPluginOptions) => {
  server.get('/', opts, async (_request, reply) => {
    const data: HelloMessage = {
      hello: MESSAGE || 'fastify'
    }
    return reply.send(data)
  })
}

export default router
