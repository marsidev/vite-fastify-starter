/**
 * "If the input is not undefined, convert it to a string, otherwise return undefined."
 *
 * The function is generic, so it can be used with any number type
 * @param {number | undefined} x - number | undefined
 */
export const numberToString = (x: number | undefined): string | undefined =>
  x !== undefined ? BigInt(x).toString() : undefined
