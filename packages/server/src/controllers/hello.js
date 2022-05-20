const { MESSAGE } = process.env

const router = async (fastify, opts) => {
  fastify.get('/', opts, (request, reply) => {
    return reply.send({ hello: MESSAGE || 'fastify' })
  })
}

export default router
