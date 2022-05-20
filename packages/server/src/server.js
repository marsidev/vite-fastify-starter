import Fastify from 'fastify'
const fastify = Fastify({ logger: true })
import hello from '#controllers/hello.js'
import path from 'path'
import statics from '@fastify/static'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PORT = process.env.PORT || 3001

// serving
fastify.register(statics, {
  root: path.join(__dirname, '../../../public')
  // prefix: '/public/' // optional: default '/'
})

// routing
fastify.register(hello, { prefix: '/api/hello' })

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
