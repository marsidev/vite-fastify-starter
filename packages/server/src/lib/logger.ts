import type { FastifyRequest, FastifyReply } from 'fastify'
import type { LoggerOptions as PinoLoggerOptions } from 'pino'

import pino from 'pino'
import { getVersion } from '.'
import { PORT } from './config'
import pc from 'picocolors'
import os from 'os'
import { performance } from 'perf_hooks'

interface LogUrl {
  url: string
  label: string
}

const pinoOptions: PinoLoggerOptions = {
  serializers: {
    req(request: FastifyRequest) {
      const { url, method } = request
      return `${method} - ${url}`
    },
    res(response: FastifyReply) {
      const { statusCode } = response
      return `${statusCode}`
    }
  },
  name: 'server',
  level: 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: true,
      ignore: 'hostname,pid'
    }
  }
}

export const logger = pino(pinoOptions)

const printServerUrls = (
  address: string,
  port: number,
  base: string,
  exposeNet: boolean = false
) => {
  const protocol = address.split(':')[0]
  const hostname = 'localhost'
  // const hostname = address.split(`:${PORT}`)[0].split(`${protocol}://`)[1]

  const interfaces = os.networkInterfaces()

  const urls: LogUrl[] = []

  Object.keys(interfaces).forEach(iface => {
    interfaces[iface]?.forEach(detail => {
      if (
        // Node < v18
        (typeof detail.family === 'string' && detail.family === 'IPv4') ||
        // Node >= v18
        (typeof detail.family === 'number' && detail.family === 4)
      ) {
        const host = detail.address.replace('127.0.0.1', hostname)
        const isLocal = detail.address.includes('127.0.0.1')

        const fullUrl = pc.magenta(`${protocol}://${host}:${pc.bold(port)}${base}`)

        const url = isLocal
          ? fullUrl : exposeNet
            ? fullUrl : 'use `--host` to expose'

        const label = isLocal ? 'Local' : 'Network'
        urls.push({ label, url })
      }
    })
  })

  const length = Math.max(...urls.map(({ label }) => label.length))

  const print = (icon: string, label: string, message: string) => {
    const formattedLabel = pc.bold(label)
    const formattedIcon = pc.magenta(icon)

    const fullMessage = `  ${formattedIcon}  ${
      label ? formattedLabel + ':' : ' '
    } ${' '.repeat(length - label.length)}${message}`

    console.log(fullMessage)
  }

  urls.forEach(({ label, url: text }) => {
    print('➜', label, text)
  })
}

const startupDuration = (startTime: number) => {
  const time = Math.ceil(performance.now() - startTime)
  return pc.white(`ready in ${pc.bold(time)} ms`)
}

export const startupLog = (address: string, startTime: number, exposeNet?: boolean) => {
  const baseUrl = '/'

  const appName = 'fastify'
  const version = getVersion(appName)

  const prettyAppName = pc.bold(appName)
  const appWithVersion = `${prettyAppName}${version ? ` v${version}` : ''}`

  const app = `  🚀 ${pc.yellow(appWithVersion)}`
  const duration = startupDuration(startTime)

  console.log()
  console.log(`${app}  ${duration}\n`)
  printServerUrls(address, PORT, baseUrl, exposeNet)
  console.log()
}
