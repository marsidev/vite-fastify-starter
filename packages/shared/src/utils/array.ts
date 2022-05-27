/**
 * Create a new array by mapping each element of the original array to a random number and the element,
 * sort the new array by the random number, and then map the new array to just the element.
 * @param arr - Array<T>
 */
export const shuffleArray = <T>(arr: Array<T>): Array<T> =>
  arr
    .map((a: T): [number, T] => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])
