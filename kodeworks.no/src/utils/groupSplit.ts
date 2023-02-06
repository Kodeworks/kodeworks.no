export function groupSplit<T>(ts: Array<T>, splitCrit: (t: T) => boolean): Array<Array<T>> {
  return ts
    .map((t) => [[t]])
    .reduce(
      (prev, cur, ind, arr) => {
        if (!splitCrit(cur[0][0])) {
          prev[prev.length - 1].push(cur[0][0]);
        } else {
          prev.push(cur[0]);
          if (ind < arr.length - 1) {
            prev.push([]);
          }
        }
        return prev;
      },
      [[]]
    );
}
