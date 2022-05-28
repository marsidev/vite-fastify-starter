/**
 * It returns true if the value is truthy, and false if the value is falsy
 * @param {unknown} a - unknown
 */
export const isTruthy = (a: unknown) => Boolean(a)

/**
 * If a is not null, then a is of type T.
 * @param {T | null} a - T | null - a is either a T or null
 */
export const nonNull = <T>(a: T | null): a is T => a !== null
