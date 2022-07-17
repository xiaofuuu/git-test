const isContainedIn = (a, b) => {
  for (const v of new Set(a)) {
    if (
      !b.some((e) => e === v) ||
      a.filter((e) => e === v).length > b.filter((e) => e === v).length
    )
      return false;
  }
  return true;
};

const when = (pred, whenTrue) => (x) => pred(x) ? whenTrue(x) : x;

console.log(isContainedIn([1, 2], [1, 4, 3]));
