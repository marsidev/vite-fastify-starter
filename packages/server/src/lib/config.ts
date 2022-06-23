import 'dotenv/config'
import { loadEnvironmentVariable } from '.'

const NODE_ENV = loadEnvironmentVariable('NODE_ENV')
export const PORT = loadEnvironmentVariable('PORT', 3001)
export const MESSAGE = loadEnvironmentVariable('MESSAGE', 'fastify')
export const HOST = NODE_ENV === 'production' ? '0.0.0.0' : '::'
export const APP_URL = loadEnvironmentVariable('APP_URL', false)

export default {
  PORT,
  HOST,
  MESSAGE,
  APP_URL
}
