export const loadEnvironmentVariable = (keyname: string, defaultValue?: any) => {
  const envVar = process.env[keyname]

  if (envVar) return envVar

  if (defaultValue === undefined) {
    throw new Error(`Configuration must include ${keyname}`)
  } else {
    return defaultValue
  }
}
