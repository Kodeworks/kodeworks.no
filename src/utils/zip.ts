export function zip<S, T>(x: Array<S>, y: Array<T>): Array<[S, T]> {
  return Array.from(Array(Math.max(x.length, y.length)), (_, i) => [x[i], y[i]]);
}