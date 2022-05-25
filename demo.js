let result = [],
  total = [],
  s = new Set();
function foo(n) {
  for (var i = 0; i < n.length; i++) {
    if (result.length === 3) {
      total.push(Array.from(result));
      return;
    }
    if (s.has(n[i])) continue;
    s.add(n[i])
    result.push(n[i]);
    foo(n);
    result.pop();
    s.delete(n[i])
  }
}

foo([1, 2, 3, 4]);

console.log(total)

// Sometimes, she uses a needle on splinters